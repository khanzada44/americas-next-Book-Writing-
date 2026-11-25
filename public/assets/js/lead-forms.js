/*
 * Enquiry forms (replaces inc/form.php, inc/mail.php and PHPMailer).
 *
 * Every lead form on the site and the landing pages has data-lead="1".
 * On submit this script:
 *   1. checks the fields (name, email, phone, required fields),
 *   2. fills the hidden fields the PHP used to fill (url, domain, subject, ip, city, region, country),
 *   3. sends everything as FormData (POST) to window.ABW_FORMS.endpoint
 *      (set NEXT_PUBLIC_LEAD_ENDPOINT in .env.local),
 *   4. opens the thank-you page when the endpoint answers with a 2xx status.
 */
(function () {
  'use strict';

  var cfg = window.ABW_FORMS || {};
  var geo = null;
  var geoAsked = false;

  function askGeo() {
    if (geoAsked || !window.fetch) return;
    geoAsked = true;
    fetch('https://ipinfo.io/json', { headers: { Accept: 'application/json' } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { geo = d; })
      .catch(function () { /* the lead is still sent without it */ });
  }

  function field(form, name) {
    return form.querySelector('[name="' + name + '"]');
  }

  function setHidden(form, name, value) {
    var el = field(form, name);
    if (el && el.type === 'hidden' && value != null) el.value = value;
  }

  function status(form, text, isError) {
    var box = form.querySelector('.lead-form-status');
    if (!box) {
      box = document.createElement('p');
      box.className = 'lead-form-status';
      box.setAttribute('role', 'status');
      box.style.cssText = 'margin:10px 0 0;font-size:14px;line-height:1.4;';
      var btn = form.querySelector('[type="submit"], button:not([type])');
      if (btn && btn.parentNode) btn.parentNode.insertBefore(box, btn.nextSibling);
      else form.appendChild(box);
    }
    box.textContent = text;
    box.style.color = isError ? '#d93025' : '#1e8e3e';
  }

  function fullPhone(input) {
    try {
      if (window.jQuery && window.jQuery(input).intlTelInput) {
        var n = window.jQuery(input).intlTelInput('getNumber');
        if (n) return n;
      }
    } catch (e) { /* plugin not on this page */ }
    return input.value;
  }

  function check(form) {
    var errors = [];
    var els = form.querySelectorAll('input, select, textarea');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.type === 'hidden' || el.disabled) continue;
      var v = (el.value || '').trim();
      var name = (el.name || '').toLowerCase();
      if (el.required && !v && el.type !== 'checkbox') {
        errors.push({ el: el, text: 'Please fill in all required fields.' });
        continue;
      }
      if (!v) continue;
      if (el.type === 'email' || name === 'email') {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) errors.push({ el: el, text: 'Please enter a valid email address.' });
      } else if (el.type === 'tel' || name === 'phone') {
        var digits = fullPhone(el).replace(/\D/g, '').length;
        if (digits < 7 || digits > 15) errors.push({ el: el, text: 'Please enter a valid phone number.' });
      } else if (name === 'name' && v.length < 2) {
        errors.push({ el: el, text: 'Please enter your name.' });
      }
    }
    return errors;
  }

  function isSent(res, data) {
    if (!res.ok) return false;
    if (!data) return true;
    if (data.success === false || data.status === false) return false;
    var errs = data.errors;
    if (Array.isArray(errs) ? errs.length : errs && typeof errs === 'object' && Object.keys(errs).length) return false;
    var code = Number(data.statusCode || data.status || res.status);
    return !(code && (code < 200 || code >= 300));
  }

  function onSubmit(e) {
    var form = e.target;
    if (!form || !form.matches || !form.matches('form[data-lead]')) return;
    if (e.defaultPrevented) return; // the page's own script stopped it (its own checks failed)
    e.preventDefault();
    if (form.getAttribute('data-sending') === '1') return;

    var errors = check(form);
    if (errors.length) {
      status(form, errors[0].text, true);
      try { errors[0].el.focus(); } catch (x) { /* ignore */ }
      return;
    }

    // hidden fields the PHP version filled on the server
    setHidden(form, 'url', location.href);
    setHidden(form, 'domain', location.hostname);
    setHidden(form, 'lead_area', location.href);
    var subject = field(form, 'subject');
    if (subject && subject.hasAttribute('data-add-page-url')) {
      subject.value = subject.defaultValue + ' (' + location.href + ')';
    }
    if (geo) {
      setHidden(form, 'ip', geo.ip);
      setHidden(form, 'city', geo.city);
      setHidden(form, 'region', geo.region);
      setHidden(form, 'country', geo.country);
    }

    if (!cfg.endpoint) {
      status(form, 'This form is not connected yet. Please call us at 090008401.', true);
      if (window.console) console.warn('lead-forms.js: set NEXT_PUBLIC_LEAD_ENDPOINT in .env.local');
      return;
    }

    var data;
    try { data = new FormData(form, e.submitter || undefined); } catch (x) { data = new FormData(form); }
    var phone = field(form, 'phone');
    if (phone) data.set('phone', fullPhone(phone));
    data.delete('website'); // spam-trap field, never sent

    form.setAttribute('data-sending', '1');
    var buttons = form.querySelectorAll('[type="submit"], button:not([type])');
    for (var b = 0; b < buttons.length; b++) buttons[b].disabled = true;
    status(form, 'Sending…', false);

    fetch(cfg.endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then(function (res) {
        return res.text().then(function (t) {
          var json = null;
          try { json = t ? JSON.parse(t) : null; } catch (x) { /* not JSON */ }
          return { res: res, json: json };
        });
      })
      .then(function (r) {
        if (!isSent(r.res, r.json)) throw new Error((r.json && r.json.message) || 'send failed');
        status(form, 'Thank you! Taking you to the next page…', false);
        location.href = form.getAttribute('data-redirect') || cfg.thankYou || '/thankyou';
      })
      .catch(function () {
        form.removeAttribute('data-sending');
        for (var b2 = 0; b2 < buttons.length; b2++) buttons[b2].disabled = false;
        status(form, 'We could not send your request. Please try again or call 090008401.', true);
      });
  }

  // a website field is filled only by bots: honeypot check
  document.addEventListener('submit', function (e) {
    var hp = e.target && e.target.querySelector && e.target.querySelector('input[name="website"]');
    if (hp && hp.value) { e.preventDefault(); return; }
    onSubmit(e);
  });
  document.addEventListener('focusin', function (e) {
    if (e.target && e.target.closest && e.target.closest('form[data-lead]')) askGeo();
  });
})();

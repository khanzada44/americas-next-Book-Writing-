'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { bodyClasses } from '@/lib/bodyClasses';

/*
 * Loads the original jQuery / slick / lozad / Zendesk scripts once, one after another,
 * after React has finished.
 * Pages change without a reload (<Link>), so after every page change this:
 *   - sets the page's <body class>,
 *   - puts back onclick / javascript: links,
 *   - runs window.abwPageInit() (public/assets/js/page-init.js): sliders, lazy images,
 *     phone fields of the new page.
 */
function load(src) {
  return new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = resolve;
    s.onerror = resolve; // one failed script must not stop the rest
    document.body.appendChild(s);
  });
}

// onclick="..." and href="javascript:..." from the old HTML
// (React does not accept handler strings and blocks javascript: links)
function restoreInlineHandlers() {
  ['onclick', 'href'].forEach((name) => {
    document.querySelectorAll(`[data-legacy-${name}]`).forEach((el) => {
      el.setAttribute(name, el.getAttribute(`data-legacy-${name}`));
      el.removeAttribute(`data-legacy-${name}`);
    });
  });
}

// lazy images when page-init.js is not on the page (landing pages)
function showLazyImages() {
  if (typeof window.lozad === 'function') {
    window.lozad('.lozad:not([data-loaded])', { rootMargin: '10px 0px', threshold: 0.1 }).observe();
    return;
  }
  document.querySelectorAll('.lozad:not([data-loaded])').forEach((el) => {
    const d = el.dataset;
    if (d.src) el.setAttribute('src', d.src);
    if (d.srcset) el.setAttribute('srcset', d.srcset);
    if (d.poster) el.setAttribute('poster', d.poster);
    if (d.backgroundImage) el.style.backgroundImage = `url('${d.backgroundImage}')`;
    el.querySelectorAll('source[data-src]').forEach((s) => s.setAttribute('src', s.dataset.src));
    if (el.tagName === 'VIDEO') el.load();
    el.setAttribute('data-loaded', 'true');
  });
}

function setupPage() {
  restoreInlineHandlers();
  if (typeof window.abwPageInit === 'function') window.abwPageInit();
  else showLazyImages();
}

export default function ScriptChain({ scripts }) {
  const pathname = usePathname();
  const lastPath = useRef(pathname);

  // after a page change without a reload
  useEffect(() => {
    if (pathname === lastPath.current) return undefined;
    lastPath.current = pathname;
    const p = pathname.replace(/\/+$/, '') || '/';
    document.body.className = bodyClasses[p] || '';
    if (!window.__legacyReady) return undefined; // first load is still running; it sets the page up when done
    setupPage();
    const t = setTimeout(setupPage, 250); // images / sliders that appear a moment later
    return () => clearTimeout(t);
  }, [pathname]);

  // first load: the old scripts, in order
  useEffect(() => {
    const key = scripts.join('|');
    window.__legacyLoaded = window.__legacyLoaded || {};
    if (window.__legacyLoaded[key]) return;
    window.__legacyLoaded[key] = true;
    restoreInlineHandlers();
    window.__legacyQueue = (window.__legacyQueue || Promise.resolve())
      .then(() => scripts.reduce((p, src) => p.then(() => load(src)), Promise.resolve()))
      .then(() => {
        // the old scripts waited for these events; they already happened, so send them again
        document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true }));
        window.dispatchEvent(new Event('load'));
        window.__legacyReady = true;
        setupPage();
      });
  }, [scripts]);

  return null;
}

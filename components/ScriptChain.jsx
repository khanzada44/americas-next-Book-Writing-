'use client';

import { useEffect } from 'react';

/*
 * Loads the original jQuery / slick / owl / lozad / Zendesk scripts.
 * They run one after another, in the same order as in the PHP pages,
 * and only after React has finished, so they never fight with React over the page.
 * Links between pages are normal <a> links, so every page loads them fresh.
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

export default function ScriptChain({ scripts }) {
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
      });
  }, [scripts]);

  return null;
}

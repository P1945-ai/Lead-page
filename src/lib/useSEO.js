import { useEffect } from 'react';

/**
 * useSEO — sets document title + meta description (and og equivalents) per page.
 * Lightweight; no external head-manager dependency.
 */
const BASE = 'Revenue Engine Ltd.';

export default function useSEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${BASE}` : `${BASE} — AI revenue systems for Canadian trades`;
    document.title = fullTitle;

    const setMeta = (selector, attr, value) => {
      if (!value) return;
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [a, v] = selector.replace(/meta\[|\]/g, '').split('=');
        el.setAttribute(a, v.replace(/["']/g, ''));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
  }, [title, description]);
}

// Minimal SEO helper: updates <title>, description, canonical and Open Graph/Twitter tags per route.
// (This is a client-side single-page app, so crawlers that don't run JavaScript see the defaults in index.html.)
import { useEffect } from 'react';

export const SITE_URL = 'https://www.wellminddatasolutions.com';
export const SITE_NAME = 'WellMind Data Solutions';
const DEFAULT_IMAGE = `${SITE_URL}/wellmind-logo.png`;

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export function applySeo({ title, description, path }) {
  const url = `${SITE_URL}${path === '/' ? '/' : path}`;
  document.title = title;
  setMeta('name', 'description', description);
  setCanonical(url);
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:site_name', SITE_NAME);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:image', DEFAULT_IMAGE);
  setMeta('name', 'twitter:card', 'summary');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', DEFAULT_IMAGE);
}

// Pass null/undefined to leave the current tags untouched.
export function useSeo(meta) {
  const title = meta && meta.title;
  const description = meta && meta.description;
  const path = meta && meta.path;
  useEffect(() => {
    if (title) applySeo({ title, description: description || '', path: path || window.location.pathname });
  }, [title, description, path]);
}

// Builds the meta for a service child page from its data record.
export function childMeta(data, parentName, path) {
  if (!data) return null;
  const fallback = `${data.title} services from ${SITE_NAME}.`;
  return {
    title: `${data.title} | ${parentName} | ${SITE_NAME}`,
    description: data.tagline && !/\d/.test(data.tagline) ? data.tagline : fallback,
    path,
  };
}

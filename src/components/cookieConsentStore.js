/**
 * cookieConsentStore.js — tiny store for the cookie-consent choice.
 * Kept separate from CookieConsent.jsx so that file only exports a component.
 *
 * Choice lives in localStorage ('wm-cookie-consent') and is shared with any component
 * through useCookieConsent(). Values: 'accepted' | 'rejected' | null (not chosen yet).
 */
import { useSyncExternalStore } from 'react';

const KEY = 'wm-cookie-consent';
const EVT = 'wm-cookie-consent-change';
export const REOPEN_EVENT = 'wm-cookie-reopen';

function read() {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || 'null');
    return v && (v.choice === 'accepted' || v.choice === 'rejected') ? v.choice : null;
  } catch { return null; }
}

export function setCookieConsent(choice) {
  try {
    if (choice) localStorage.setItem(KEY, JSON.stringify({ choice, at: new Date().toISOString() }));
    else localStorage.removeItem(KEY);
  } catch { /* storage blocked: the choice only lasts for this page view */ }
  window.dispatchEvent(new Event(EVT));
}

const subscribe = (cb) => {
  window.addEventListener(EVT, cb);
  window.addEventListener('storage', cb);
  return () => { window.removeEventListener(EVT, cb); window.removeEventListener('storage', cb); };
};

export function useCookieConsent() {
  return useSyncExternalStore(subscribe, read, () => null);
}
export const acceptCookies = () => setCookieConsent('accepted');
export const reopenCookieSettings = () => window.dispatchEvent(new Event(REOPEN_EVENT));

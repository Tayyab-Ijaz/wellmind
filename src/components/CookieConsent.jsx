/**
 * CookieConsent.jsx — WellMind Data Solutions
 * Non-modal consent banner shown immediately on a visitor's first page load.
 *
 * What it controls: optional third-party content that may set its own cookies
 * (today: the embedded Calendly scheduler on /book-discovery). The site itself
 * sets no analytics or advertising cookies.
 *
 * The choice itself lives in ./cookieConsentStore.js (localStorage 'wm-cookie-consent').
 */
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { REOPEN_EVENT, setCookieConsent, useCookieConsent } from './cookieConsentStore';

const CSS = `
.wm-cookie{position:fixed;left:20px;bottom:20px;z-index:100002;width:min(440px,calc(100vw - 24px));box-sizing:border-box;padding:20px 22px 18px;border-radius:18px;background:#0b0b0b;color:#fff;border:1px solid rgba(255,255,255,.16);box-shadow:0 24px 60px rgba(0,0,0,.45);font-family:'Space Grotesk',system-ui,sans-serif;animation:wmCookieIn .35s cubic-bezier(.16,1,.3,1) both}
.wm-cookie h2{margin:0 0 6px;font-size:16px;font-weight:700;letter-spacing:-.01em}
.wm-cookie p{margin:0;font-size:13.5px;line-height:1.55;color:rgba(255,255,255,.72)}
.wm-cookie p a{color:#fff;text-decoration:underline;text-underline-offset:3px}
.wm-cookie__row{display:flex;gap:10px;margin-top:16px}
.wm-cookie button{flex:1;padding:11px 16px;border-radius:12px;font:600 13.5px/1 'Space Grotesk',system-ui,sans-serif;cursor:pointer;transition:background .2s ease,color .2s ease,border-color .2s ease}
.wm-cookie__reject{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.32)}
.wm-cookie__reject:hover,.wm-cookie__reject:focus-visible{border-color:#fff;background:rgba(255,255,255,.08);outline:none}
.wm-cookie__accept{background:#fff;color:#000;border:1px solid #fff}
.wm-cookie__accept:hover,.wm-cookie__accept:focus-visible{background:#d9d9d9;border-color:#d9d9d9;outline:none}
@keyframes wmCookieIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@media (max-width:520px){.wm-cookie{left:12px;right:12px;bottom:12px;width:auto}}
@media (prefers-reduced-motion:reduce){.wm-cookie{animation:none}}
`;

export default function CookieConsent() {
  const consent = useCookieConsent();
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const on = () => setReopened(true);
    window.addEventListener(REOPEN_EVENT, on);
    return () => window.removeEventListener(REOPEN_EVENT, on);
  }, []);

  const choose = useCallback((choice) => { setCookieConsent(choice); setReopened(false); }, []);

  if (consent && !reopened) return null;

  return (
    <>
      <style>{CSS}</style>
      <div className="wm-cookie" role="dialog" aria-label="Cookie consent" aria-live="polite">
        <h2>Cookies on this site</h2>
        <p>
          We don't run analytics or advertising cookies. Some optional content, such as our booking
          calendar from Calendly, may set its own. Accept to load it here, or reject and we'll keep it off.{' '}
          <Link to="/cookie-policy">Cookie Policy</Link>
        </p>
        <div className="wm-cookie__row">
          <button type="button" className="wm-cookie__reject" onClick={() => choose('rejected')}>Reject</button>
          <button type="button" className="wm-cookie__accept" onClick={() => choose('accepted')}>Accept</button>
        </div>
      </div>
    </>
  );
}

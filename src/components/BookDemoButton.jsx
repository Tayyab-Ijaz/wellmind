/**
 * BookDemoButton.jsx — WellMind Data Solutions
 * Single source of truth for the Calendly "Book a Demo" CTA.
 * Change CALENDLY_URL / BOOK_DEMO_LABEL here to update every instance of the button.
 *
 * Behaviour: real <a href> to Calendly (opens in a new tab) so it always works —
 * including if the Calendly script hasn't loaded yet, is blocked, or is slow on mobile.
 * If window.Calendly is ready when clicked, we intercept the click and open the
 * popup overlay instead via Calendly.initPopupWidget(). The widget.css/widget.js
 * assets are loaded once, globally, in index.html.
 */

import React from 'react';
import { Calendar } from 'lucide-react';

export const CALENDLY_URL = 'https://calendly.com/tayyabijaz/special-request';
export const BOOK_DEMO_LABEL = 'Book a Demo';

export default function BookDemoButton({
  className = 'btn-primary',
  style,
  iconSize = 18,
  showIcon = true,
  label = BOOK_DEMO_LABEL,
  onClick,
}) {
  const handleClick = (e) => {
    if (typeof window !== 'undefined' && window.Calendly?.initPopupWidget) {
      e.preventDefault();
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
    onClick?.(e);
  };

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={handleClick}
    >
      {showIcon && <Calendar size={iconSize} />} {label}
    </a>
  );
}

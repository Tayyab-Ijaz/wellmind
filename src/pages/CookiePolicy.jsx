import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function CookiePolicy() {
  return (
    <LegalPageLayout
      badge="Legal"
      title="Cookie Policy"
      updated="October 9, 2026"
      intro="A short, honest note on what this site does and doesn't use cookies for."
      sections={[
        {
          heading: '1. Cookies we use',
          body: [
            "This site itself does not set analytics, advertising, or tracking cookies. We don't run Google Analytics or ad pixels. The only third-party content on the site is described in sections 2 and 3.",
          ],
        },
        {
          heading: '2. Fonts',
          body: [
            'This site loads web fonts from Google Fonts (fonts.googleapis.com and fonts.gstatic.com). Loading a font involves a request to Google\'s servers, which may log standard technical information on Google\'s side, but WellMind Data Solutions does not set any cookies through this.',
          ],
        },
        {
          heading: '3. Booking calendar (Calendly)',
          body: [
            "The Book a Call page embeds a scheduling calendar provided by Calendly. When that page loads, your browser connects to Calendly's servers, and Calendly may set its own cookies and run its own scripts, including error and performance monitoring, under Calendly's own privacy and cookie policies. We do not control these. Calendly may show its own consent notice.",
            "If you book a call, the details you enter (such as your name, email address and chosen time) are collected by Calendly and shared with us so we can hold the call. If you prefer not to use the embedded calendar, you can contact us by email or WhatsApp instead.",
          ],
        },
        {
          heading: '4. If this changes',
          body: [
            'If we add analytics, a live chat widget, or any other tool that sets cookies in the future, we will update this page and add a cookie consent notice before those tools go live.',
          ],
        },
        {
          heading: '5. Contact us',
          body: [
            'Questions about this policy can be sent to us via WhatsApp, LinkedIn, or email at info@wellminddatasolutions.com.',
          ],
        },
      ]}
    />
  );
}

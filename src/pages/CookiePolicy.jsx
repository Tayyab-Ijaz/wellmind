import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function CookiePolicy() {
  return (
    <LegalPageLayout
      badge="Legal"
      title="Cookie Policy"
      updated="September 25, 2026"
      intro="A short, honest note on what this site does and doesn't use cookies for."
      sections={[
        {
          heading: '1. Cookies we use',
          body: [
            "This site does not use analytics, advertising, or tracking cookies at this time. We don't run Google Analytics, ad pixels, or any third-party tracking script.",
          ],
        },
        {
          heading: '2. Fonts',
          body: [
            'This site loads web fonts from Google Fonts (fonts.googleapis.com and fonts.gstatic.com). Loading a font involves a request to Google\'s servers, which may log standard technical information on Google\'s side, but WellMind Data Solutions does not set any cookies through this.',
          ],
        },
        {
          heading: '3. If this changes',
          body: [
            'If we add analytics, a live chat widget, or any other tool that sets cookies in the future, we will update this page and add a cookie consent notice before those tools go live.',
          ],
        },
        {
          heading: '4. Contact us',
          body: [
            'Questions about this policy can be sent to us via WhatsApp or LinkedIn, both linked in the footer of this site.',
          ],
        },
      ]}
    />
  );
}

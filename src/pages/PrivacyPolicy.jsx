import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      badge="Legal"
      title="Privacy Policy"
      updated="October 9, 2026"
      intro="This policy explains what information WellMind Data Solutions collects from visitors to this website, and how client project data is handled during a paid engagement."
      sections={[
        {
          heading: '1. Who we are',
          body: [
            'WellMind Data Solutions is a data science, AI, and bioinformatics consultancy based in Faisalabad, Pakistan, working with clients internationally. This policy covers this website only, not the internal systems we may build for individual clients under a separate engagement.',
          ],
        },
        {
          heading: '2. Information we collect from this website',
          body: [
            "This site does not run a newsletter signup, account system, or analytics or advertising trackers. We don't store names, emails, or browsing behaviour through the site itself.",
            "The message form on the Book a Call page does not send anything to our servers: it opens your own email app with a pre-filled message, and nothing reaches us until you press send there.",
            "The Book a Call page also embeds a booking calendar from Calendly. If you use it, the details you enter are collected by Calendly, which may also set cookies and run its own scripts under its own privacy policy, and are shared with us so we can hold the call. See our Cookie Policy for details.",
            'If you message us through WhatsApp, LinkedIn, or email using the links on this site, that conversation is handled directly on those platforms and is subject to their own privacy policies (Meta/WhatsApp and LinkedIn/Microsoft, respectively). We only see and store what you choose to send us there.',
            'Our hosting provider may automatically log standard technical information for security and performance purposes, such as IP address, browser type, and pages visited. We do not access or use these logs for marketing.',
          ],
        },
        {
          heading: '3. Data shared during a client engagement',
          body: [
            'If you become a client, any project data you share with us for analysis or development work is covered by a signed NDA before any data changes hands. For healthcare or other sensitive data, we agree handling requirements with you as part of the engagement.',
            "We never use client data for our own research, marketing, or model training without your explicit, separate permission.",
          ],
        },
        {
          heading: '4. Third-party links',
          body: [
            'This site links out to WhatsApp, LinkedIn, and GitHub and embeds a Calendly booking calendar. We are not responsible for the privacy practices of those third-party platforms once you leave this site.',
          ],
        },
        {
          heading: '5. Changes to this policy',
          body: [
            'We will update this page if what we collect changes, for example if we add analytics or a newsletter in the future. Material changes will update the date at the top of this page.',
          ],
        },
        {
          heading: '6. Contact us',
          body: [
            'Questions about this policy can be sent to us via WhatsApp, LinkedIn, or email at info@wellminddatasolutions.com.',
          ],
        },
      ]}
    />
  );
}

import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      badge="Legal"
      title="Privacy Policy"
      updated="September 25, 2026"
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
            "This site does not run a contact form, newsletter signup, account system, or analytics/tracking scripts at this time. We don't collect names, emails, or browsing behaviour through the site itself.",
            'If you message us through WhatsApp or LinkedIn using the links on this site, that conversation is handled directly on those platforms and is subject to their own privacy policies (Meta/WhatsApp and LinkedIn/Microsoft, respectively). We only see and store what you choose to send us there.',
            'Our hosting provider may automatically log standard technical information for security and performance purposes, such as IP address, browser type, and pages visited. We do not access or use these logs for marketing.',
          ],
        },
        {
          heading: '3. Data shared during a client engagement',
          body: [
            'If you become a client, any project data you share with us for analysis or development work is covered by a signed NDA before any data changes hands. For healthcare or other regulated data, we follow HIPAA and GDPR requirements as applicable to the engagement.',
            "We never use client data for our own research, marketing, or model training without your explicit, separate permission.",
          ],
        },
        {
          heading: '4. Third-party links',
          body: [
            'This site links out to WhatsApp, LinkedIn, and GitHub. We are not responsible for the privacy practices of those third-party platforms once you leave this site.',
          ],
        },
        {
          heading: '5. Changes to this policy',
          body: [
            'We will update this page if what we collect changes, for example if we add analytics or a contact form in the future. Material changes will update the date at the top of this page.',
          ],
        },
        {
          heading: '6. Contact us',
          body: [
            'Questions about this policy can be sent to us via WhatsApp or LinkedIn, both linked in the footer of this site.',
          ],
        },
      ]}
    />
  );
}

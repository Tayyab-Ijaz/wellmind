import React from 'react';
import LegalPageLayout from '../components/LegalPageLayout';

export default function TermsOfService() {
  return (
    <LegalPageLayout
      badge="Legal"
      title="Terms of Service"
      updated="September 25, 2026"
      intro="These terms govern your use of this website and, where you engage us for a project, your working relationship with WellMind Data Solutions. They're a general starting point, not a substitute for the signed proposal or contract covering your specific engagement."
      sections={[
        {
          heading: '1. Our services',
          body: [
            'WellMind Data Solutions provides consulting and delivery services across AI & machine learning, data science and analytics, automation, bioinformatics, and related software and design work. Each engagement is scoped individually after a discovery call and confirmed in a written proposal before any work begins.',
          ],
        },
        {
          heading: '2. Engagements and payment',
          body: [
            'Specific pricing, deliverables, timelines, and payment schedules are agreed per project in a written proposal, not published generally on this site. Work begins once that proposal is accepted and any agreed initial payment is received.',
          ],
        },
        {
          heading: '3. Intellectual property',
          body: [
            'Unless otherwise agreed in writing, ownership of the code, models, and deliverables produced for your project transfers to you upon full payment. We retain the right to reuse general methods, non-confidential techniques, and our own pre-existing tools and frameworks across other engagements.',
          ],
        },
        {
          heading: '4. Confidentiality',
          body: [
            'We sign an NDA before any project data is shared with us and treat all client data and business information as confidential. See our Privacy Policy for how project data is handled.',
          ],
        },
        {
          heading: '5. No guaranteed outcomes',
          body: [
            'Data science and AI work involves inherent uncertainty. We commit to sound methodology, honest communication, and the deliverables agreed in your proposal, but we cannot guarantee a specific business outcome or model performance beyond what is explicitly stated in that proposal.',
          ],
        },
        {
          heading: '6. Limitation of liability',
          body: [
            'To the extent permitted by law, WellMind Data Solutions is not liable for indirect, incidental, or consequential damages arising from use of this website or from a services engagement, beyond what is agreed in the applicable signed proposal or contract.',
          ],
        },
        {
          heading: '7. Governing law',
          body: [
            'These terms are governed by the laws of Pakistan, without regard to conflict-of-law principles, unless a signed client contract states otherwise.',
          ],
        },
        {
          heading: '8. Changes to these terms',
          body: [
            'We may update these terms from time to time. The date at the top of this page reflects the most recent update. Continued use of this site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: '9. Contact us',
          body: [
            'Questions about these terms can be sent to us via WhatsApp or LinkedIn, both linked in the footer of this site.',
          ],
        },
      ]}
    />
  );
}

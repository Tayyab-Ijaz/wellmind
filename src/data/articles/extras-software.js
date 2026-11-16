// Extra sections (worked example, checklist, FAQ) inserted before each article's closing "Where to start" block.
// Examples are illustrative, not client stories.

export const SOFTWARE_EXTRAS = {
  'custom-software-project-lifecycle': [
    {
      h: 'What this looks like for a delivery business',
      p: [
        'Imagine a regional distributor that tracks deliveries in spreadsheets and phone calls. Drivers do not know their next stop until the morning call, customers ring the office for updates and nobody can say how many deliveries were late last month.',
        'Discovery would start by riding along with a driver and sitting with the dispatcher for a day. It would surface the real requirements: drivers need a simple mobile list, dispatch needs a live view and customers need a tracking link. The launch scope might be just those three things, with invoicing and reporting held back for a second phase.',
        'Design would produce a clickable prototype that the dispatcher and two drivers try in week two. The first build cycle would deliver the driver app and a basic dispatch screen, running against real routes. By the end of the second cycle the team would already be using it on a pilot route, so launch is a gradual widening rather than a switch-over weekend.',
      ],
    },
    {
      h: 'A checklist before you sign anything',
      list: [
        'The problem is written down in one page, with the people affected named.',
        'There is a prioritised feature list with a clear line between launch and later.',
        'You know who will make decisions on your side, and how quickly they can respond.',
        'Deliverables, timeline and what counts as "done" are agreed in writing.',
        'You will own the code, the documentation and the accounts the system runs on.',
        'There is a plan for data migration, training and the first month after launch.',
        'The way changes to scope are handled is agreed, including how they affect cost and time.',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['How long does a project like this take?', 'It depends on scope, but a useful first release is usually measured in weeks to a few months, not a year. Breaking the work into small releases is the best way to keep the timeline honest, because each release proves or corrects the plan.'],
        ['Should we fix the price or work time and materials?', 'Fixed price suits a well-defined scope; time and materials suits work where requirements will evolve. Many teams fix the price of discovery and the first release, then review after seeing real progress.'],
        ['What happens if requirements change halfway?', 'They always do. A good process expects it: changes are written down, sized and traded against the existing backlog, so you decide knowingly what to add and what to defer.'],
      ],
    },
  ],

  'build-buy-or-customise': [
    {
      h: 'Applying it to a clinic group',
      p: [
        'Consider a clinic group choosing a system for appointment reminders, patient intake forms and a dashboard for its operations manager. Appointment reminders are a commodity: many products do it well, so buying is the obvious choice. Intake forms are close to commodity but need to match the clinic\'s specific questions, so a configurable form tool fits.',
        'The dashboard is where the group differs from its competitors, because it blends scheduling, staffing and referral data in a way specific to how it runs. That is the part worth building, fed by the data the bought tools already expose through their APIs.',
        'The result is a hybrid: two bought products connected by a small custom layer. The custom surface is small, so maintenance stays manageable, and the group still owns the part that gives it an edge.',
      ],
    },
    {
      h: 'A scoring sheet you can copy',
      p: [
        'List your ten most important requirements down the side and the options across the top. Score each cell from zero to three: zero means it cannot do it, three means it does it well out of the box. Add a second row of scores for effort to integrate and for exit difficulty.',
        'Do not just add the columns. Look at where each option scores zero on a must-have, because a single hard gap often decides the matter regardless of the total.',
      ],
    },
    {
      h: 'Questions to ask a vendor',
      list: [
        'Can we run a trial on our own data and workflow, not a demo environment?',
        'What does the full pricing look like at our expected size in year one and year three?',
        'How do we export all of our data, and in what format?',
        'What does the API cover, and what are its limits?',
        'Which customisations are supported, and which would break on an upgrade?',
        'What happens to our data and service if the contract ends?',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['Is custom software always more expensive than buying?', 'Upfront, usually yes. Over several years it depends on licence growth, how much you pay for workarounds and how well the product fits. Compare the total cost across three years, not the first invoice.'],
        ['Can we start with a product and replace it later?', 'Yes, and it is often the sensible route if speed matters. Keep your data portable and your integrations through clean interfaces so that replacement stays possible.'],
        ['What if our needs are unusual but we are small?', 'A small, focused custom build for just the unusual part, combined with bought tools for the rest, often costs less than either bending a product or building everything.'],
      ],
    },
  ],

  'staff-augmentation-explained': [
    {
      h: 'How it plays out against a fixed deadline',
      p: [
        'Suppose a product team of five engineers is two months from a major release when it learns it must also build a data pipeline and a reporting layer for a new customer. Hiring two data engineers would take several months, and the release date will not move.',
        'They bring in a data engineer and a backend engineer for six months. In week one the new people get repository access, a walkthrough of the architecture and a small, well-defined ticket. By week three they are reviewing and being reviewed in the normal pull request flow. They take ownership of the pipeline, document it as they go and join the retrospectives.',
        'At the end of the six months the team decides whether to extend, hire one of the roles permanently or wind down. Because the work lived in the team\'s own repositories and tools, any of those choices is straightforward.',
      ],
    },
    {
      h: 'Staff augmentation compared with other models',
      list: [
        'Hiring employees: highest long-term commitment and cultural fit, slowest to start, best for permanent, core roles.',
        'Staff augmentation: you direct the work, the provider handles people logistics, good for flexible capacity and specific skills.',
        'Project delivery: the vendor owns the outcome and manages its team, best when you can define the result but do not want to manage the work.',
        'Freelancers: flexible and often cheaper per hour, but with more variation in availability and continuity.',
      ],
    },
    {
      h: 'Questions to ask a provider',
      list: [
        'Who exactly will join, and can we interview them first?',
        'How do you handle replacement if the fit is not right?',
        'How are confidentiality and intellectual property protected?',
        'What are the notice period and the minimum commitment?',
        'How do time zones and working hours overlap with ours?',
        'Can the engagement convert into a longer arrangement if it works well?',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['Who is responsible for the quality of the work?', 'In this model you set direction and review the work, so quality is shared. A good provider selects people carefully and replaces anyone who is not a fit, but day-to-day standards are set by your team\'s process.'],
        ['How quickly can someone start?', 'Usually in a matter of weeks, depending on the skills required and how fast access and onboarding can be arranged on your side.'],
        ['Is this a good option for a company with no technical lead?', 'It is risky. Augmented engineers need direction and priorities. Without a technical owner, a project engagement or an advisory arrangement is a safer start.'],
      ],
    },
  ],
};

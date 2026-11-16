// Software & engineering articles.
// Block shapes used by pages/Article.jsx:
//   { h, p: [paragraphs], list: [bullets], steps: [[title, text], ...] }  (every key except h is optional)

export const SOFTWARE_ARTICLES = [
  {
    slug: 'custom-software-project-lifecycle',
    cat: 'Software Engineering',
    title: 'How a Custom Software Project Runs: From Discovery to Launch',
    excerpt: 'What actually happens between "we need an app" and a product in production, stage by stage, and what you should expect to see at each one.',
    tags: ['Software', 'Process', 'Delivery'],
    intro: 'Most failed software projects do not fail on code. They fail on unclear scope, late surprises and a handover nobody planned. Knowing the stages up front lets you ask for the right things at the right time.',
    body: [
      {
        h: 'What a custom software project is',
        p: [
          'Custom software is a product built around your process, your users and your data, rather than a tool you configure and hope fits. It can be a web application, a mobile app, an internal platform or a set of integrations that quietly connect the systems you already run.',
          'The work is the same whatever the label: understand the problem, agree what will be built, build it in small verifiable pieces, put it live and keep it healthy afterwards.',
        ],
      },
      {
        h: 'Why the process matters more than the tech stack',
        p: [
          'The choice of framework rarely decides whether a project succeeds. What decides it is whether everyone agreed on the same outcome before the first line of code, and whether problems surface in week two instead of month six.',
          'A clear process turns a large, risky purchase into a sequence of small decisions you can inspect and change.',
        ],
      },
      {
        h: 'How a project runs, stage by stage',
        steps: [
          ['Discovery', 'We talk to the people who will use the system, look at the current workflow and the data involved, and write down the problem in plain language. The output is a short brief: goals, users, constraints and what success looks like.'],
          ['Scoping and estimate', 'The brief becomes a prioritised list of features. We separate what is needed at launch from what can wait, then agree scope, deliverables and a timeline in writing.'],
          ['Design', 'Wireframes and a clickable prototype let you react to something real before anything is built. This is the cheapest point in the project to change your mind.'],
          ['Build in iterations', 'Work is delivered in short cycles. At the end of each one you see working software, not a status report, and feedback goes straight into the next cycle.'],
          ['Testing', 'Automated tests cover the logic that must not break, and people test the real flows on real devices. Known issues are listed openly rather than hidden.'],
          ['Launch', 'Deployment is rehearsed on a staging copy first. We plan the release, the rollback and who is watching the system on day one.'],
          ['Handover and support', 'Your team receives the code, documentation and access it needs to run and extend the product. Support or a retainer can continue after that if you want it.'],
        ],
      },
      {
        h: 'What you should see along the way',
        list: [
          'A written scope you can point to when priorities change.',
          'A working demo at the end of every iteration.',
          'A short list of risks and open questions that is kept up to date.',
          'Documentation that grows with the code, not a pile written at the end.',
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Skipping discovery because the idea feels obvious. The obvious idea is where most hidden assumptions live.',
          'Treating scope as fixed in detail but vague in outcome. Fix the outcome, stay flexible on the detail.',
          'Waiting for a "big reveal". If you have not used the software in the first few weeks, something is wrong.',
          'Forgetting the people side: training, data migration and who owns the product after launch.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'Write one page describing who has the problem, what they do today and what would be different if it were solved. That page is the most useful thing you can bring to a discovery call, and it is free to produce.',
        ],
      },
    ],
  },

  {
    slug: 'build-buy-or-customise',
    cat: 'Software Engineering',
    title: 'Build, Buy or Customise? How to Decide',
    excerpt: 'A practical way to choose between custom software, an off-the-shelf product and a configured platform, without being swayed by a sales pitch.',
    tags: ['Strategy', 'Software', 'Decision-making'],
    intro: 'Every new system starts with the same question: do we build it, buy it or adapt something that exists? The honest answer is "it depends", but it depends on a short list of things you can actually check.',
    body: [
      {
        h: 'What the three options really are',
        list: [
          'Buy: a finished product you pay for and configure. Fast to start, limited in how far it bends.',
          'Customise: a platform or product you extend with your own logic and integrations. A middle path with its own constraints.',
          'Build: software written for your exact needs. The most control, and the most responsibility.',
        ],
      },
      {
        h: 'Why this decision is expensive to get wrong',
        p: [
          'Buying something that does not fit leads to years of workarounds and manual steps. Building something a product already does well burns budget on a solved problem. Both are common, and both are avoidable.',
        ],
      },
      {
        h: 'How to decide',
        steps: [
          ['Is it a differentiator?', 'If the capability is part of what makes your business different, lean towards building. If it is a commodity such as payroll or email, lean towards buying.'],
          ['How well does an existing product fit?', 'List your must-have requirements and check each against the product, using a trial rather than a demo. A product that covers about 80 percent of the must-haves without hacks is usually worth buying.'],
          ['What is the full cost over three years?', 'Count licences, implementation, integration, training, hosting and the people who maintain it. Compare totals, not the first-year price.'],
          ['How will it connect to everything else?', 'Integration is where most buy decisions go wrong. Check the APIs, the data export options and what happens when you want to leave.'],
          ['Who will own it?', 'Custom software needs an owner and a budget for change. If nobody will own it, a supported product is safer.'],
          ['What is the risk of waiting?', 'If time to market is the main constraint, buy or customise first and rebuild later if the case is proven.'],
        ],
      },
      {
        h: 'A hybrid is often the right answer',
        p: [
          'Many strong systems buy the commodity parts and build only the layer that is specific to the business, connected through well-defined interfaces. That keeps the custom surface small and the maintenance burden manageable.',
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Choosing on a demo built for the sales team rather than on your own data and workflow.',
          'Ignoring exit costs. If you cannot export your data cleanly, you are renting your own information.',
          'Building because it feels more "proper", or buying because it feels safer, without comparing the numbers.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'Write down your ten most important requirements and score each option against them. If you want a second opinion before committing budget, an advisory session is a low-cost way to pressure-test the decision.',
        ],
      },
    ],
  },

  {
    slug: 'staff-augmentation-explained',
    cat: 'Software Engineering',
    title: 'Staff Augmentation: What It Is and When It Beats Hiring',
    excerpt: 'How embedding outside engineers in your team works, when it is the right call, and how to run it so it does not turn into a black box.',
    tags: ['Staff Augmentation', 'Teams', 'Delivery'],
    intro: 'Sometimes you do not need a finished project. You need two more engineers who can start next month and work the way your team already works. That is what staff augmentation is for.',
    body: [
      {
        h: 'What staff augmentation is',
        p: [
          'In staff augmentation, an outside company supplies engineers or data scientists who join your team and work inside your tools, your process and your priorities. You direct the work day to day. The provider takes care of recruiting, contracts and the people side.',
          'That is different from project delivery, where a vendor owns the outcome and manages its own team to reach it.',
        ],
      },
      {
        h: 'Why teams choose it',
        list: [
          'Speed: adding capacity in weeks rather than a multi-month hiring cycle.',
          'Flexibility: scale up for a launch or a backlog and scale down afterwards.',
          'Skills you do not need permanently, such as MLOps, data engineering or a specific cloud stack.',
          'Lower risk than a full-time hire when the long-term need is still uncertain.',
        ],
      },
      {
        h: 'When it beats hiring, and when it does not',
        p: [
          'It tends to win when the need is time-bound, the skill is specialised or you already have a team and a backlog that someone can direct. It tends to lose when you have no technical leadership to guide the work, or when the role is core and permanent, where building your own team is usually better.',
        ],
      },
      {
        h: 'How to run it well',
        steps: [
          ['Define the role precisely', 'Describe the outcomes expected in the first 30, 60 and 90 days, not just a list of technologies.'],
          ['Onboard like a new hire', 'Give access, context, a buddy and a first small task. The people who ramp up fastest are the ones treated as part of the team.'],
          ['Keep one clear owner', 'Someone on your side sets priorities and reviews work. Without that, even strong engineers drift.'],
          ['Use your normal rituals', 'Stand-ups, code review and planning should include the augmented engineers, in your tools.'],
          ['Document as you go', 'Decisions and set-up notes should live in your repositories so knowledge stays with you.'],
          ['Plan the exit', 'Agree how a handover works from the start, whether that is ending the engagement or converting it into something longer.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Treating augmented engineers as a separate vendor team and then wondering why integration is hard.',
          'Giving vague goals and expecting a project manager to appear.',
          'Keeping all knowledge in one person who then leaves.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'Write the one-paragraph job description you would give a new hire, plus the first piece of work they would own. If you can describe that clearly, you are ready to talk to a provider.',
        ],
      },
    ],
  },
];

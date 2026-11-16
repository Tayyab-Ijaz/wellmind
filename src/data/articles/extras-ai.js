// Extra sections for the AI articles. See extras-software.js.

export const AI_EXTRAS = {
  'is-your-business-ready-for-ai': [
    {
      h: 'Sorting three AI ideas for a logistics firm',
      p: [
        'Suppose a mid-sized logistics firm wants to "use AI". Asked what that means, the team lists three ideas: predicting late deliveries, summarising driver notes and building a chatbot. Applying the readiness checks sorts them quickly.',
        'Late-delivery prediction has a clear outcome, years of delivery records and an operations manager who would act on a warning, so it passes. Summarising driver notes has data but no agreed benefit, so it is parked. The chatbot has no defined question it should answer, so it fails the first check.',
        'The firm starts with late-delivery prediction, measures how often deliveries are late today and uses that as its baseline. Six weeks later it knows whether the idea pays for itself, which is far more useful than a vague AI programme.',
      ],
    },
    {
      h: 'A readiness scorecard',
      p: [
        'Score each of the following from one to five, where five means "clearly yes": a measurable goal, accessible data, a known baseline, a named owner, a place in the workflow for the output and the willingness to change a process. A total that is low on data usually means start with data work, while a total that is low on ownership usually means resolve that first.',
        'The score is not a pass mark. Its value is that it makes the weakest link visible and gives your team something concrete to discuss.',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['Do we need a data scientist before we start?', 'Not to assess readiness. You need someone who understands the business problem and someone who can look at the data. A short engagement with an outside team can cover the technical side while you build your own capability.'],
        ['How much data is enough?', 'It depends on the problem. For some tasks, a few thousand well-labelled examples are useful; for others you need far more. A quick feasibility test on a sample will tell you better than a rule of thumb.'],
        ['What if our data is messy?', 'Nearly everyone\'s is. Messy data is a reason to plan for cleaning work, not a reason to wait. The question is whether the key fields are recorded at all and whether you can trust them.'],
      ],
    },
  ],

  'ml-model-to-production': [
    {
      h: 'Shipping a loan-review model',
      p: [
        'Suppose a lender wants to predict which loan applications will need manual review. A data scientist builds a model in a notebook that scores well on historical data. To ship it, the team first asks what is known at the moment an application arrives, and finds that two of the strongest features are only filled in after review. Those features are removed, and performance drops to a more honest level.',
        'The team then packages the model behind an API, adds validation for missing fields and runs it in shadow mode for a month. Predictions are logged next to what reviewers actually decide, which shows where the model agrees and where it does not.',
        'Only after that comparison does the model start ordering the review queue, with a switch to revert to the old process. Monitoring tracks the share of applications flagged and how often reviewers overrule the score, so decay is noticed early.',
      ],
    },
    {
      h: 'A production-readiness checklist',
      list: [
        'The decision the prediction supports, and who acts on it, are written down.',
        'Training and prediction code are in version control with pinned dependencies.',
        'Tests cover the data schema, the prediction function and edge cases such as missing values.',
        'Inputs are validated, and bad inputs get a clear error instead of a silent wrong answer.',
        'Latency and cost per prediction are measured against what the use case allows.',
        'Logging records inputs, outputs and the model version for every prediction.',
        'There is a defined way to roll back to the previous model.',
        'Someone owns monitoring and retraining after launch.',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['Should predictions run in real time or in batches?', 'Choose batch if the decision can wait, because it is simpler, cheaper and easier to monitor. Use real time only when the decision happens at the moment of the event, such as screening a transaction.'],
        ['How often should we retrain?', 'It depends on how fast the underlying behaviour changes. Start with a schedule that matches the business rhythm, then add triggers based on monitored drift or a drop in measured accuracy.'],
        ['What is shadow mode?', 'Running the model alongside the existing process without letting its output affect decisions. You compare what it would have done with what happened, which reveals problems with no real-world risk.'],
      ],
    },
  ],

  'rag-explained': [
    {
      h: 'Building a policy assistant',
      p: [
        'Suppose a services company has several hundred pages of internal policies, and new staff keep asking the same questions about leave, expenses and security rules. The team builds a RAG assistant over the policy documents.',
        'Early tests answer many questions well, but fail on expense limits. Looking at what was retrieved, they find the limits live in tables that were flattened into unreadable text when the PDFs were processed. They fix the extraction so that each table row keeps its headings, and the failing questions begin to pass.',
        'They then add the document title and section to each chunk\'s metadata so that answers can cite the exact policy, and they filter retrieval by the user\'s department so people only see documents meant for them. A set of forty real questions, re-run after every change, tells them whether each improvement actually helped.',
      ],
    },
    {
      h: 'How to evaluate a RAG system',
      list: [
        'Retrieval: for each test question, did the correct passage appear in the top results?',
        'Faithfulness: is every claim in the answer supported by the retrieved passages?',
        'Completeness: does the answer cover what was asked, or only part of it?',
        'Refusal: when the answer is not in the documents, does the system say so?',
        'Latency and cost: is the response fast and affordable at your expected volume?',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['Do we need a vector database?', 'For small collections, a simple index in an existing database is often enough. A dedicated vector store becomes useful as collections and query volume grow.'],
        ['Is our data safe if we use a hosted model?', 'That depends on the provider\'s terms and your configuration. Check whether prompts are retained or used for training, apply access controls at retrieval and consider models you host yourself for sensitive material.'],
        ['When is fine-tuning better than RAG?', 'Fine-tuning helps when you need to change style, format or a narrow behaviour. RAG is better when the task is answering from content that changes or must be cited. The two can be combined.'],
      ],
    },
  ],

  'ai-agents-vs-automation': [
    {
      h: 'Where each approach fits in invoice handling',
      p: [
        'Take a finance team that receives supplier invoices by email. A pure automation can read each attachment, extract the fields, match them against purchase orders and post the result. When a field is missing or the totals do not agree, the item goes to a person. This is predictable, cheap to run and easy to test.',
        'Now suppose a few invoices come with questions: a supplier writes that a price is disputed and asks for a call. Handling that means reading the thread, checking the order history, drafting a reply and possibly asking a colleague. This is where an agent with a small set of tools, such as searching the order system and drafting an email, may help.',
        'The sensible design is both: the workflow handles the routine majority, and an agent prepares a draft response for the exceptions, with a person approving anything that leaves the building.',
      ],
    },
    {
      h: 'Guardrails for any agent',
      list: [
        'Give it the narrowest set of tools and permissions that let it do the job.',
        'Require human approval for irreversible actions such as payments or external messages.',
        'Limit the number of steps and the spend per task to prevent runaway loops.',
        'Log every tool call and decision so behaviour can be reviewed.',
        'Test against a fixed set of scenarios before each change and after each model update.',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['Are agents ready for production use?', 'In narrow, well-guarded roles, yes. Open-ended autonomy on important tasks is still risky. Keep scope small, keep humans in the loop on consequential steps and measure results.'],
        ['Will an agent replace our existing automations?', 'Rarely. Existing automations are usually cheaper and more reliable for the work they do. Agents tend to be added alongside them for the cases that need flexibility.'],
        ['How do we know the agent is doing the right thing?', 'You test it on realistic scenarios with known good outcomes, review its logs and track measures such as task success, escalation rate and cost per task.'],
      ],
    },
  ],

  'mlops-for-small-teams': [
    {
      h: "A three-person team's first sprint",
      p: [
        'Suppose a team of three runs a demand-forecasting model for a retailer. At first, retraining is a notebook someone runs when they remember, and the model file is emailed to the engineer who deploys it. When the lead is away for two weeks, nobody can reproduce the last version.',
        'The team makes five small changes in a single sprint. Code and a pinned environment go into Git. Each training run writes its parameters, data snapshot and metrics to a tracker. A continuous integration job runs tests and a short training on every change. The model is packaged in a container and deployed with one script. A dashboard shows forecast error each week.',
        'Nothing here needed a platform team, and the risk of the knowledge sitting in one head is gone. They deliberately did not adopt a heavy orchestration system, because one scheduled job was enough.',
      ],
    },
    {
      h: 'A maturity ladder',
      list: [
        'Level 1: code is in Git and the environment is reproducible.',
        'Level 2: experiments are tracked and tests run automatically.',
        'Level 3: deployment is scripted and the same every time.',
        'Level 4: monitoring is live and alerts reach a person.',
        'Level 5: retraining is automated, with a check before a new model goes live.',
        'Move up one level at a time, when the pain of the current level justifies it.',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['Do we need Kubernetes for MLOps?', 'Usually not at first. A single container on a managed service handles many workloads. Adopt orchestration platforms when you have several models, schedules and teams that genuinely need them.'],
        ['What should we monitor first?', 'Start with input data checks, prediction volume and distribution, latency and errors. Add accuracy tracking as soon as real outcomes become available.'],
        ['Do we need a feature store?', 'Not until multiple models share features and you are hitting consistency problems between training and serving. Until then, well-organised, tested feature code is enough.'],
      ],
    },
  ],
};

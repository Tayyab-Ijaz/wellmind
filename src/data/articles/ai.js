// AI & machine learning articles. See software.js for the block shapes.

export const AI_ARTICLES = [
  {
    slug: 'is-your-business-ready-for-ai',
    cat: 'AI & Machine Learning',
    title: 'Signs Your Business Is Ready for AI (and Signs You Are Not)',
    excerpt: 'Most AI projects stall because the organisation was not ready, not because the model was weak. A short checklist to find out which side you are on.',
    tags: ['AI Strategy', 'Readiness', 'Planning'],
    intro: 'Before choosing tools or vendors, it helps to check a handful of basics. They take about a week to assess and they predict success far better than the choice of algorithm.',
    body: [
      {
        h: 'What "ready for AI" means',
        p: [
          'It does not mean having a data science team or a large budget. It means there is a specific problem worth solving, data that describes it, a way to measure improvement and a person who will act on the result.',
        ],
      },
      {
        h: 'Why readiness decides the outcome',
        p: [
          'A model is only one part of a working system. If the data is scattered, the goal is vague or nobody owns the output, even an excellent model ends up in a slide deck. Checking readiness early is the cheapest way to avoid that.',
        ],
      },
      {
        h: 'Signs you are ready',
        list: [
          'You can state the problem as a measurable outcome, for example "reduce manual review time" or "catch late payments earlier".',
          'The relevant data exists, you can access it and you roughly know how clean it is.',
          'There is a current baseline, even a rough one, so improvement can be measured.',
          'A named person owns the process the AI will change and wants it to work.',
          'You can imagine where the output plugs in: a dashboard, an alert, an approval step.',
        ],
      },
      {
        h: 'Signs you are not, yet',
        list: [
          'The goal is "use AI" rather than a result the business cares about.',
          'The data lives in people\'s heads, spreadsheets nobody trusts or systems you cannot export from.',
          'The process changes every month, so there is nothing stable to automate.',
          'Success is defined as perfect accuracy. No model is perfect; the question is whether it is better than today.',
          'Nobody will change their work based on the output.',
        ],
      },
      {
        h: 'How to assess it in a week',
        steps: [
          ['Pick one candidate use case', 'Choose the problem with the clearest cost and the most available data.'],
          ['Sample the data', 'Pull a real extract and check size, missing values, history and whether the outcome you care about is actually recorded.'],
          ['Measure the baseline', 'How long, how much and how often does the task go wrong today?'],
          ['Map the decision', 'Who would act on a prediction, how, and what would they do differently?'],
          ['Decide: build, prepare or wait', 'If the gaps are in the data, fix those first. If they are in ownership, resolve that first.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Starting with the most ambitious idea instead of the most measurable one.',
          'Buying a platform before knowing the use case.',
          'Underestimating data preparation, which is usually the largest part of the work.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'Pick one use case and run the five steps above. If the answers are mostly yes, a short proof of concept is a sensible next step. If they are mostly no, you have learned where to invest first, which is just as valuable.',
        ],
      },
    ],
  },

  {
    slug: 'ml-model-to-production',
    cat: 'AI & Machine Learning',
    title: 'From Notebook to Production: How a Machine Learning Model Ships',
    excerpt: 'Why a model that works in a notebook is only part of the job, and the steps that turn it into a service people can rely on.',
    tags: ['Machine Learning', 'Deployment', 'Engineering'],
    intro: 'A promising result in a notebook is a starting point. Putting a model into production means wrapping it in the engineering that makes it reliable, observable and safe to change.',
    body: [
      {
        h: 'What "production" actually means',
        p: [
          'A production model serves real users or real processes, on real data, repeatedly, without a data scientist running cells by hand. It has an interface, tests, logging and a plan for when things go wrong.',
        ],
      },
      {
        h: 'Why so many models never get there',
        p: [
          'Notebooks hide the hard parts: messy inputs, changing data, latency limits, access control and integration with existing systems. Teams that plan for these from the start ship; teams that discover them late stall.',
        ],
      },
      {
        h: 'How a model ships',
        steps: [
          ['Frame the problem', 'Define what is predicted, when, for whom and what action follows. A model without a decision attached is a report.'],
          ['Build a baseline', 'Start with a simple rule or a basic model. It sets the bar and often turns out to be good enough.'],
          ['Validate honestly', 'Split data by time when the future matters, check performance on the groups that matter and compare against the baseline, not against zero.'],
          ['Package it', 'Turn the training and prediction code into tested, versioned modules with pinned dependencies, then expose it as an API or a scheduled batch job.'],
          ['Wire it in', 'Connect inputs and outputs to the real systems. Handle missing values, bad inputs and timeouts explicitly.'],
          ['Release carefully', 'Run in shadow mode first, comparing predictions with reality before anyone relies on them. Then roll out gradually with a way to switch back.'],
          ['Monitor and retrain', 'Track input data, prediction distribution and, when labels arrive, real accuracy. Retrain on a schedule or when drift is detected.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Training on data that will not exist at prediction time, which makes results look better than they will be (data leakage).',
          'Optimising a headline metric and ignoring the cost of each type of error.',
          'Deploying without monitoring, so decay goes unnoticed until someone complains.',
          'No rollback plan.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'Before training anything, write down how predictions will be delivered and who will act on them. That single paragraph shapes every later technical choice.',
        ],
      },
    ],
  },

  {
    slug: 'rag-explained',
    cat: 'AI & Machine Learning',
    title: 'RAG Explained: Making an LLM Answer From Your Own Documents',
    excerpt: 'What retrieval-augmented generation is, why it beats fine-tuning for most document question-answering, and how to build one that stays accurate.',
    tags: ['Generative AI', 'LLM', 'RAG'],
    intro: 'Large language models know a lot about the world and nothing about your business. Retrieval-augmented generation, or RAG, closes that gap by showing the model the right passages from your own documents at the moment it answers.',
    body: [
      {
        h: 'What RAG is',
        p: [
          'RAG splits the job in two. A retrieval step finds the most relevant pieces of your content for a question. A generation step asks the language model to answer using only those pieces. The model is not retrained; it is given reading material.',
        ],
      },
      {
        h: 'Why use it instead of fine-tuning',
        list: [
          'Your content changes. With RAG you update the index; with fine-tuning you retrain.',
          'You can show sources, so people can verify answers.',
          'Access rules can be enforced at retrieval time, so people only get answers from documents they may see.',
          'It is usually cheaper and faster to build and to keep current.',
        ],
      },
      {
        h: 'How a RAG system works',
        steps: [
          ['Collect and clean documents', 'Gather policies, manuals, tickets or reports. Remove duplicates and extract text properly from PDFs and tables.'],
          ['Split into chunks', 'Break documents into passages that carry one idea each, usually with a little overlap. Chunk size strongly affects quality.'],
          ['Create embeddings', 'Turn each chunk into a vector that captures its meaning and store it with its source and metadata.'],
          ['Retrieve', 'Embed the question, find the closest chunks and optionally re-rank them with a second model or combine with keyword search.'],
          ['Generate with citations', 'Give the model the question and the retrieved chunks, and instruct it to answer only from them and to say when the answer is not there.'],
          ['Evaluate', 'Build a set of real questions with known answers. Measure whether the right chunks were retrieved and whether answers are faithful to them.'],
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Skipping evaluation, so quality is judged by a few impressive demos.',
          'Poor chunking: passages cut mid-thought, or tables flattened into noise.',
          'Ignoring permissions, which can leak documents to the wrong people.',
          'Letting the index go stale, so answers quote outdated policies.',
          'Not allowing the system to answer "I could not find this".',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'Pick one well-defined document set, collect twenty to fifty real questions people ask about it and build the smallest pipeline that answers them with sources. Measure, improve retrieval first and only then think about model changes.',
        ],
      },
    ],
  },

  {
    slug: 'ai-agents-vs-automation',
    cat: 'AI & Machine Learning',
    title: 'AI Agents vs Automation: When Each Makes Sense',
    excerpt: 'Not every workflow needs an agent. How to tell when a plain automation is the better, cheaper and safer choice, and when an agent earns its keep.',
    tags: ['AI Agents', 'Automation', 'Workflows'],
    intro: 'AI agents are getting a lot of attention, and it is tempting to put one everywhere. In practice, many problems are solved better by a simple automation with a language model in one step.',
    body: [
      {
        h: 'What the two things are',
        list: [
          'Automation: a fixed sequence of steps that runs the same way every time, for example "when an invoice arrives, extract the fields, check them, post to the ledger".',
          'AI agent: a system that decides for itself which steps to take, which tools to call and in what order, in order to reach a goal.',
        ],
      },
      {
        h: 'Why the difference matters',
        p: [
          'Agents are flexible but less predictable, slower and more expensive to run, and harder to test. Automations are predictable and cheap. Choosing the wrong one means paying for flexibility you do not need, or hitting a wall when the input varies too much.',
        ],
      },
      {
        h: 'How to choose',
        steps: [
          ['Can you write the steps down?', 'If a person could follow a checklist, build a workflow. Use a language model only for the parts that need understanding, such as reading an email or classifying a document.'],
          ['How variable is the input?', 'Highly varied, open-ended tasks, where the path depends on what is found along the way, are where agents help.'],
          ['What does a mistake cost?', 'The higher the cost, the more you want fixed steps, validation and a human approval before anything irreversible happens.'],
          ['What are the volume and latency needs?', 'High volume and fast response favour deterministic workflows. Low volume, high value tasks can absorb an agent\'s cost.'],
          ['Can you test it?', 'If you cannot define what a correct result looks like, you cannot safely let an agent act alone.'],
        ],
      },
      {
        h: 'A sensible middle path',
        p: [
          'Start with a workflow and add an AI step where understanding is needed. Add agent-style flexibility only to the sub-task that truly needs it, with limits on which tools it may call and a human check on important actions. This captures most of the value with far less risk.',
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Giving an agent broad permissions on day one.',
          'No logging, so nobody can explain why it did what it did.',
          'No limits on steps or cost, which allows runaway loops.',
          'Using an agent to do what a spreadsheet formula or a scheduled script would handle.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'Take one repetitive process and map it as a flowchart. Mark each box as "rule", "needs understanding" or "needs judgement". Rules become automation, understanding becomes a model call, and only the judgement boxes are candidates for an agent.',
        ],
      },
    ],
  },

  {
    slug: 'mlops-for-small-teams',
    cat: 'AI & Machine Learning',
    title: 'MLOps for Small Teams: What to Build, Buy or Skip',
    excerpt: 'Enterprise MLOps stacks are overkill for most small teams. The practical minimum that keeps models reliable without a platform team.',
    tags: ['MLOps', 'Production', 'CI/CD'],
    intro: 'MLOps is the set of habits that keeps machine learning systems working after launch. You do not need a large platform to get most of the benefit; you need a handful of disciplined basics.',
    body: [
      {
        h: 'What MLOps covers',
        p: [
          'It is the engineering around a model: versioning code, data and models, automated tests and deployment, monitoring and a repeatable way to retrain. The goal is that any change can be made safely and traced afterwards.',
        ],
      },
      {
        h: 'Why small teams should care, and not overdo it',
        p: [
          'Without basics, models decay silently and nobody can reproduce last month\'s result. With too much tooling, a three-person team spends its time maintaining infrastructure instead of improving the product. The aim is the minimum that removes the biggest risks.',
        ],
      },
      {
        h: 'The practical minimum',
        steps: [
          ['Version everything', 'Code in Git, dependencies pinned, and training data or its snapshot identified so a run can be reproduced.'],
          ['Track experiments', 'A simple tracker, or even a disciplined log, recording parameters, data version and metrics for each run.'],
          ['Automate tests and builds', 'Continuous integration runs unit tests, data checks and a quick training smoke test on every change.'],
          ['Package and deploy the same way every time', 'A container image, a single deployment script and a staging environment.'],
          ['Monitor what matters', 'Input data shape, prediction distribution, latency and errors, and real accuracy when labels arrive.'],
          ['Define a retraining routine', 'A schedule or a trigger, plus a check that the new model beats the current one before it replaces it.'],
        ],
      },
      {
        h: 'What to buy and what to skip',
        list: [
          'Buy or use managed services for experiment tracking, model hosting and monitoring when they save you real time.',
          'Skip for now: heavyweight orchestration platforms, feature stores and multi-cluster setups, until you have several models and several teams.',
          'Build only the glue that is specific to your data and your product.',
        ],
      },
      {
        h: 'Common mistakes',
        list: [
          'Adopting a full platform before the first model is in production.',
          'No monitoring at all, because "the model was tested".',
          'Manual deployment steps that live in one person\'s head.',
        ],
      },
      {
        h: 'Where to start',
        p: [
          'Take your most important model and ask: could someone else reproduce it, deploy it and notice if it got worse? Fix whichever of those three answers is "no" first.',
        ],
      },
    ],
  },
];

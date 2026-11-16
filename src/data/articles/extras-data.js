// Extra sections for the data & cloud articles. See extras-software.js.

export const DATA_EXTRAS = {
  'building-a-data-pipeline': [
    {
      h: 'Answering "which customers might leave?"',
      p: [
        'Suppose a subscription business keeps customers in a billing system, usage in application logs and support tickets in a help-desk tool. Leadership asks a simple question, "which customers are at risk of leaving?", and three teams give three different answers because each has its own export.',
        'The pipeline copies each source into a raw storage area every night, untouched. A transformation layer then standardises customer IDs across the three systems, calculates usage over the last thirty days and counts open tickets, producing one table with a row per customer.',
        'Tests check that every customer appears once, that usage is never negative and that totals match the billing system within a small tolerance. A dashboard reads only from the final table, and a freshness indicator shows when it was last updated. When the billing export changes format one morning, the schema check fails and an alert goes out before anyone sees a wrong number.',
      ],
    },
    {
      h: 'A pipeline design checklist',
      list: [
        'Each source has an owner and a documented way to extract from it.',
        'A raw copy is kept before any transformation.',
        'Every step can be rerun safely without creating duplicates.',
        'Tests cover keys, nulls, ranges and reconciliation against a trusted total.',
        'Failures alert a named person, and there is a retry policy.',
        'Metric definitions are written down in one place.',
        'Users can see when the data was last refreshed.',
        'Access to sensitive fields is restricted and logged.',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['ETL or ELT?', 'ELT, where data is loaded first and transformed inside the warehouse, is common today because warehouses are powerful and it keeps the raw data available. ETL still makes sense when data must be cleaned or masked before it lands.'],
        ['Do we need a data warehouse?', 'If you have several sources and want consistent reporting, usually yes. For one small source, a well-structured database may be enough for a while.'],
        ['How do we pick tools?', 'Start from your team\'s skills and your cloud provider\'s managed services. Prefer tools with good testing and monitoring support, and avoid choosing anything because it is fashionable.'],
      ],
    },
  ],

  'data-quality-checks': [
    {
      h: 'Catching leakage and silent coding',
      p: [
        'Suppose a team trains a model to predict which patients will miss appointments. The first version scores impressively. Looking closer, they find a column recording whether a reminder call was answered, which only exists for patients who were successfully contacted, and so correlates with attendance but would not be known in advance. This is leakage; removing the column drops performance to a realistic level.',
        'Profiling also shows that one clinic records missed appointments as blank rather than "no show". The model had learned that the clinic was "low risk" simply because it left the field empty. Fixing the coding changes the picture for that clinic entirely.',
        'The team adds both lessons as automated checks, so any future data load that contains the same problem fails before it reaches training.',
      ],
    },
    {
      h: 'A first-hour profiling routine',
      list: [
        'Count rows and check that the number is what you expect.',
        'List each column with its type, missing percentage and number of distinct values.',
        'Plot the volume of records over time and look for gaps and sudden steps.',
        'Check the key for duplicates.',
        'Look at the minimum and maximum of every numeric column.',
        'Compare category names across sources for spelling and case differences.',
        'Read twenty random raw rows with your own eyes.',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['How much missing data is too much?', 'There is no universal threshold. What matters is why the data is missing and whether it is related to what you are predicting. A column that is missing half the time at random may still help; one missing for a specific group may be biased.'],
        ['Which tools should we use for automated checks?', 'Libraries such as Great Expectations, pandera and the built-in tests in tools like dbt are common choices. Even simple assertions in code are a good start.'],
        ['Who should own data quality?', 'The people closest to the source usually understand it best. Give each important dataset a named owner, and treat failing checks as work for that owner, not just for the analyst who found them.'],
      ],
    },
  ],

  'cloud-setup-for-data-and-ai': [
    {
      h: 'From one shared account to a safe setup',
      p: [
        'Suppose a small analytics company starts with a single cloud account where three people run experiments, store data and host a demo. Within a year, an experiment accidentally deletes a shared bucket, a forgotten GPU instance runs for a weekend and the finance lead cannot say which project the bill belongs to.',
        'The clean-up takes a few days. They create separate accounts for development and production, give each person access only to what they need and store secrets in a managed vault. The infrastructure is described in version-controlled templates, so a new environment can be created in minutes. Every resource carries a project tag, budgets send alerts at set thresholds and idle development resources shut down overnight.',
        'None of these changes are exotic, and all of them are far cheaper to do at the start than after the first incident.',
      ],
    },
    {
      h: 'A first-month cloud checklist',
      list: [
        'Separate accounts or projects for development, staging and production.',
        'Single sign-on and multi-factor authentication for every human user.',
        'Least-privilege roles, with no shared administrator credentials.',
        'Secrets stored in a vault, never in code or chat.',
        'Infrastructure defined in version-controlled templates.',
        'Backups of important data, with a restore that has actually been tested.',
        'Budgets, cost alerts and a tagging convention.',
        'Central logs and basic alerts for errors and unusual activity.',
      ],
    },
    {
      h: 'Questions people often ask',
      faq: [
        ['Should we use serverless or containers?', 'Serverless suits spiky, event-driven work and small teams. Containers give more control and suit steady workloads and anything with special runtime needs. Many systems use both.'],
        ['How do we keep GPU costs under control?', 'Use GPUs only when the workload needs them, shut instances down when idle, consider smaller or quantised models for inference and compare on-demand with reserved or spot pricing for steady use.'],
        ['Is multi-cloud worth it?', 'Rarely at the start. It adds complexity and cost. Stay with one provider, keep your code portable through containers and open tools, and revisit if a real business reason appears.'],
      ],
    },
  ],
};

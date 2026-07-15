export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  category: string;
  technologies: string[];
  complexity: 1 | 2 | 3 | 4 | 5;
  aiLevel: 1 | 2 | 3 | 4 | 5;
  automationLevel: 1 | 2 | 3 | 4 | 5;
  businessImpact: 1 | 2 | 3 | 4 | 5;
  status: "Live" | "Beta" | "Archived";
  createdAt: string;
  metrics: {
    tasksExecuted: number;
    hoursSaved: number;
    costReduction: number;
    successRate: number;
  };
  problem: string[];
  workflow: string[];
  architecture: string[];
  before: string[];
  after: string[];
  impact: string[];
  timeline: { day: string; title: string; detail: string }[];
  liveStatus?: { label: string; value: string };
};

export const projects: Project[] = [
  {
    slug: "ai-news-automation",
    title: "AI News Automation System",
    tagline: "Autonomous tech news pipeline: scrape → translate → summarize → publish.",
    summary:
      "An AI-powered system that collects technology news from 40+ sources, translates content, generates editorial summaries, stores structured data, and auto-publishes to WordPress and Telegram.",
    category: "AI Automation",
    technologies: ["n8n", "OpenAI", "PostgreSQL", "Telegram API", "WordPress", "Docker"],
    complexity: 5,
    aiLevel: 5,
    automationLevel: 5,
    businessImpact: 4,
    status: "Live",
    createdAt: "2025-08-12",
    metrics: { tasksExecuted: 125430, hoursSaved: 842, costReduction: 3200, successRate: 99.7 },
    problem: [
      "Editors spent 5+ hours daily curating tech news",
      "Manual translation caused delays and inconsistencies",
      "Publishing pipeline was error-prone and slow",
      "No structured archive for future retrieval",
    ],
    workflow: ["RSS Feed", "Scraper", "AI Processing", "Translation", "Summary", "Database", "Publish"],
    architecture: ["Data Source", "Automation Engine", "AI Processing", "PostgreSQL", "Output Channels"],
    before: ["5 hours daily work", "Manual translation & QA", "Human formatting errors", "Limited scalability"],
    after: ["10 minutes monitoring", "Fully automated pipeline", "Zero manual errors", "24/7 operation"],
    impact: [
      "Reduced editorial workload by 92%",
      "Publishing speed increased 18×",
      "Zero manual publishing errors in 4 months",
      "Enabled 24/7 news coverage without staff",
    ],
    timeline: [
      { day: "Day 1", title: "Architecture", detail: "Data model, source list, workflow blueprint" },
      { day: "Day 2", title: "Workflow build", detail: "n8n nodes, scraper, AI prompt engineering" },
      { day: "Day 3", title: "Integration", detail: "PostgreSQL, WordPress, Telegram connectors" },
      { day: "Day 4", title: "Testing & deploy", detail: "QA, monitoring, Docker deployment" },
    ],
    liveStatus: { label: "Last execution", value: "2 minutes ago" },
  },
  {
    slug: "ecommerce-product-scraper",
    title: "E-commerce Product Intelligence",
    tagline: "Track competitor pricing across 12 marketplaces in real time.",
    summary:
      "A distributed scraper that monitors product prices, stock, and reviews across 12 marketplaces, enriches data with AI classification, and pushes insights to a live dashboard.",
    category: "Web Scraping",
    technologies: ["n8n", "Python", "Playwright", "PostgreSQL", "OpenAI", "Grafana"],
    complexity: 5,
    aiLevel: 4,
    automationLevel: 5,
    businessImpact: 5,
    status: "Live",
    createdAt: "2025-06-04",
    metrics: { tasksExecuted: 4500, hoursSaved: 620, costReduction: 5400, successRate: 98.9 },
    problem: [
      "Analysts manually checked competitor prices weekly",
      "Data was stale within hours of collection",
      "No unified view across marketplaces",
      "Impossible to react to price changes fast enough",
    ],
    workflow: ["Scheduler", "Playwright Scraper", "Data Cleaner", "AI Classifier", "PostgreSQL", "Dashboard"],
    architecture: ["Marketplace APIs", "Scraper Fleet", "AI Enrichment", "Warehouse", "Grafana Dashboards"],
    before: ["Weekly manual checks", "Stale, incomplete data", "Reactive pricing decisions", "No historic trends"],
    after: ["Real-time monitoring", "12 marketplaces unified", "Automated price alerts", "Full historic archive"],
    impact: [
      "Detected 340+ pricing opportunities/month",
      "Cut competitive research time by 95%",
      "Enabled dynamic pricing strategy",
      "Recovered $54k in margin in first quarter",
    ],
    timeline: [
      { day: "Week 1", title: "Discovery", detail: "Source mapping, anti-bot analysis" },
      { day: "Week 2", title: "Scraper build", detail: "Playwright fleet with rotation" },
      { day: "Week 3", title: "AI enrichment", detail: "Classification, deduplication" },
      { day: "Week 4", title: "Dashboards", detail: "Grafana panels, alerting" },
    ],
    liveStatus: { label: "Processed", value: "4,500 products" },
  },
  {
    slug: "seo-content-agent",
    title: "SEO Content Agent",
    tagline: "Autonomous writer: keyword research → outline → draft → publish.",
    summary:
      "An AI agent that researches keywords, generates SEO-optimized articles with citations, runs quality checks, and schedules publication across multiple CMS platforms.",
    category: "Content Automation",
    technologies: ["n8n", "OpenAI", "Anthropic", "SerpAPI", "WordPress", "Notion"],
    complexity: 4,
    aiLevel: 5,
    automationLevel: 4,
    businessImpact: 5,
    status: "Live",
    createdAt: "2025-09-20",
    metrics: { tasksExecuted: 1240, hoursSaved: 480, costReduction: 8200, successRate: 96.5 },
    problem: [
      "Content team bottlenecked at 8 articles/month",
      "SEO research consumed 60% of writer time",
      "Inconsistent quality across authors",
      "No systematic keyword coverage",
    ],
    workflow: ["Keyword Research", "Outline Agent", "Draft Agent", "QA Agent", "SEO Score", "Publish"],
    architecture: ["Keyword APIs", "Multi-Agent LLM", "Fact Checker", "CMS", "Analytics Loop"],
    before: ["8 articles/month", "Manual keyword research", "Inconsistent quality", "No scale"],
    after: ["120 articles/month", "Automated research", "Consistent brand voice", "Fully scalable"],
    impact: [
      "15× content output at same cost",
      "Organic traffic +240% in 90 days",
      "Editorial time redirected to strategy",
      "Positive ROI within first month",
    ],
    timeline: [
      { day: "Day 1-2", title: "Prompt design", detail: "Agent roles, brand voice" },
      { day: "Day 3-4", title: "Pipeline", detail: "Multi-step n8n workflow" },
      { day: "Day 5", title: "QA layer", detail: "Fact-checking, SEO scoring" },
      { day: "Day 6", title: "Launch", detail: "CMS integration, monitoring" },
    ],
    liveStatus: { label: "Generated", value: "120 articles" },
  },
  {
    slug: "crm-lead-router",
    title: "CRM Lead Router & Enricher",
    tagline: "Inbound leads scored, enriched, and routed in under 3 seconds.",
    summary:
      "Captures leads from 6 channels, enriches with firmographic data, scores using AI, and routes to the right sales rep with a personalized first-touch email.",
    category: "CRM Automation",
    technologies: ["n8n", "HubSpot", "Clearbit", "OpenAI", "Slack"],
    complexity: 3,
    aiLevel: 4,
    automationLevel: 5,
    businessImpact: 5,
    status: "Live",
    createdAt: "2025-10-11",
    metrics: { tasksExecuted: 8620, hoursSaved: 210, costReduction: 4100, successRate: 99.2 },
    problem: [
      "Leads sat in inbox for hours before assignment",
      "Reps wasted time on low-fit leads",
      "No enrichment, no scoring, no personalization",
      "Response time hurt conversion",
    ],
    workflow: ["Capture", "Deduplicate", "Enrich", "AI Score", "Route", "Personalize", "Notify"],
    architecture: ["Lead Sources", "Router", "Enrichment APIs", "AI Scoring", "CRM", "Slack"],
    before: ["4h avg response", "No enrichment", "Random routing", "Generic emails"],
    after: ["<3s response", "Full firmographics", "AI-scored routing", "Personalized outreach"],
    impact: [
      "Lead-to-meeting rate +68%",
      "Sales reply time cut from hours to seconds",
      "Reps focus only on qualified leads",
      "Revenue attributed to automation: $180k",
    ],
    timeline: [
      { day: "Day 1", title: "Scoping", detail: "Lead sources, ICP definition" },
      { day: "Day 2", title: "Enrichment", detail: "Clearbit + custom scrapers" },
      { day: "Day 3", title: "AI scoring", detail: "Prompt design, evaluation" },
      { day: "Day 4", title: "Rollout", detail: "HubSpot workflows, Slack alerts" },
    ],
    liveStatus: { label: "Leads routed today", value: "142" },
  },
  {
    slug: "invoice-processing-agent",
    title: "Invoice Processing Agent",
    tagline: "OCR + LLM extraction: PDFs to accounting system, hands-free.",
    summary:
      "Reads incoming invoice PDFs from email, extracts structured data with OCR + LLM, validates against POs, and posts to the accounting system with human approval only on exceptions.",
    category: "Data Processing",
    technologies: ["n8n", "Tesseract", "OpenAI", "QuickBooks", "PostgreSQL"],
    complexity: 4,
    aiLevel: 4,
    automationLevel: 5,
    businessImpact: 4,
    status: "Live",
    createdAt: "2025-07-02",
    metrics: { tasksExecuted: 3200, hoursSaved: 390, costReduction: 6800, successRate: 97.8 },
    problem: [
      "Bookkeeper manually entered 200+ invoices/week",
      "Error rate around 4% caused reconciliation pain",
      "PO matching was fully manual",
      "Approvals took days",
    ],
    workflow: ["Email Watcher", "OCR", "LLM Extract", "Validate", "Match PO", "Post to QB", "Notify"],
    architecture: ["Email Inbox", "OCR Engine", "LLM Parser", "Validation Rules", "Accounting API"],
    before: ["200 invoices manually", "4% error rate", "Slow PO matching", "Weekly close delays"],
    after: ["Hands-free processing", "<0.5% exceptions", "Instant PO matching", "Daily close"],
    impact: [
      "Bookkeeper redirected to advisory work",
      "Month-end close shortened by 4 days",
      "Vendor relationships improved (faster pay)",
      "Zero missed invoices in 6 months",
    ],
    timeline: [
      { day: "Week 1", title: "Sample analysis", detail: "Invoice variety, extraction schema" },
      { day: "Week 2", title: "OCR + LLM", detail: "Hybrid pipeline for accuracy" },
      { day: "Week 3", title: "Validation", detail: "PO matching, exception handling" },
      { day: "Week 4", title: "Go-live", detail: "QuickBooks sync, monitoring" },
    ],
    liveStatus: { label: "Processed this week", value: "184 invoices" },
  },
  {
    slug: "social-media-scheduler",
    title: "Multi-Platform Social Engine",
    tagline: "One idea in, ten platform-native posts out — scheduled and tracked.",
    summary:
      "Transforms a single content brief into platform-native posts for LinkedIn, X, Instagram, YouTube, and TikTok, with image generation, scheduling, and engagement analytics.",
    category: "Marketing Automation",
    technologies: ["n8n", "OpenAI", "Replicate", "Buffer", "Airtable"],
    complexity: 3,
    aiLevel: 5,
    automationLevel: 4,
    businessImpact: 4,
    status: "Beta",
    createdAt: "2025-11-01",
    metrics: { tasksExecuted: 980, hoursSaved: 160, costReduction: 2100, successRate: 95.4 },
    problem: [
      "Content had to be rewritten per platform",
      "Visuals took hours to produce",
      "No unified scheduling",
      "Engagement data lived in silos",
    ],
    workflow: ["Brief Input", "Rewrite Agent", "Image Gen", "Schedule", "Publish", "Analytics"],
    architecture: ["Content Brief", "LLM Rewriters", "Image Model", "Scheduler", "Analytics Warehouse"],
    before: ["Manual rewrites", "Stock imagery", "Disconnected tools", "Weekly reports"],
    after: ["Auto platform tuning", "AI visuals in seconds", "Unified scheduler", "Live analytics"],
    impact: [
      "Content output 6× per creator",
      "Engagement +82% platform-average",
      "Consistent posting cadence",
      "Analytics loop drives next content",
    ],
    timeline: [
      { day: "Day 1", title: "Content model", detail: "Platform rules, tone matrix" },
      { day: "Day 2", title: "AI rewriters", detail: "Per-platform prompt tuning" },
      { day: "Day 3", title: "Visual gen", detail: "Templates, brand consistency" },
      { day: "Day 4", title: "Scheduler", detail: "Buffer integration, analytics" },
    ],
    liveStatus: { label: "Posts queued", value: "38" },
  },
];

export const categories = [
  "All",
  "AI Automation",
  "Content Automation",
  "Web Scraping",
  "Marketing Automation",
  "CRM Automation",
  "Data Processing",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

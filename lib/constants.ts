export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "custom-development",
    title: "Custom Development",
    description:
      "Software built for your exact workflows, not adapted from someone else's template.",
    longDescription:
      "From greenfield builds to legacy modernization, we architect and deliver custom software that fits your workflows precisely, not the other way around. Our cross-functional PODs combine product thinking with deep engineering across web, API, and systems layers.",
    icon: "Code2",
    tags: ["Full-Stack", "API Design", "Architecture"],
    process: [
      { label: "Discovery", detail: "Requirements mapping & system architecture review" },
      { label: "Build", detail: "Sprint-based delivery with full-stack POD" },
      { label: "QA", detail: "Automated testing across all code layers" },
      { label: "Deploy", detail: "Production handoff with full documentation" },
    ],
    deliverables: [
      "Production-ready, maintainable codebase",
      "API documentation and architecture diagrams",
      "CI/CD pipeline configured and running",
    ],
    outcome: "Shipping velocity from week two",
  },
  {
    id: "support-maintenance",
    title: "Support and Maintenance",
    description:
      "Structured support that keeps your systems healthy so your team can focus on building, not firefighting.",
    longDescription:
      "We provide structured SLA-backed support tiers — from incident response and bug fixes to proactive performance monitoring and dependency management. Your systems stay healthy so your teams can focus forward.",
    icon: "Wrench",
    tags: ["SLA Support", "Monitoring", "Performance"],
    process: [
      { label: "Baseline", detail: "System audit and SLA tier definition" },
      { label: "Monitor", detail: "24/7 infrastructure and uptime monitoring" },
      { label: "Respond", detail: "Incident triage and resolution within SLA" },
      { label: "Optimize", detail: "Proactive dependency and performance tuning" },
    ],
    deliverables: [
      "Defined SLA tiers with response windows",
      "Monthly health and performance reports",
      "Runbook and escalation documentation",
    ],
    outcome: "Zero-surprise system health",
  },
  {
    id: "ecommerce",
    title: "eCommerce",
    description:
      "Commerce experiences built to convert, on platforms that fit your scale.",
    longDescription:
      "We design and build commerce experiences that convert — from headless storefronts and custom checkout flows to ERP integrations and inventory automation. Built on the platforms that fit your scale, extended where they don't.",
    icon: "ShoppingCart",
    tags: ["Headless Commerce", "Checkout", "Integrations"],
    process: [
      { label: "Platform", detail: "Platform selection and architecture planning" },
      { label: "Build", detail: "Storefront, checkout, and CMS development" },
      { label: "Integrate", detail: "ERP, inventory, and payment integrations" },
      { label: "Optimize", detail: "Performance tuning and conversion analysis" },
    ],
    deliverables: [
      "Conversion-optimized storefront and checkout",
      "ERP and inventory sync integrations",
      "Core Web Vitals and performance baseline",
    ],
    outcome: "Commerce built to scale from launch",
  },
  {
    id: "cloud-services",
    title: "Cloud Services (AWS)",
    description:
      "Cloud architecture that scales with demand and keeps your infrastructure costs predictable.",
    longDescription:
      "Our AWS-certified engineers design cloud architectures that scale with demand and stay cost-efficient. We handle migrations, infrastructure-as-code, CI/CD pipelines, and ongoing cloud operations — from startups to enterprise workloads.",
    icon: "Cloud",
    tags: ["AWS", "IaC", "DevOps", "Migration"],
    process: [
      { label: "Assess", detail: "Infrastructure review and target architecture" },
      { label: "Provision", detail: "IaC-managed environment setup on AWS" },
      { label: "Migrate", detail: "Data and workload migration with zero data loss" },
      { label: "Operate", detail: "Ongoing cost optimization and cloud ops" },
    ],
    deliverables: [
      "Infrastructure-as-code across all environments",
      "CI/CD pipelines and deployment automation",
      "Cost visibility dashboards and spend alerts",
    ],
    outcome: "AWS that scales and stays cost-efficient",
  },
  {
    id: "testing-services",
    title: "Testing Services",
    description:
      "QA built into the delivery cycle, not bolted on at the end.",
    longDescription:
      "Quality assurance built into the delivery cycle, not bolted on at the end. We provide unit, integration, E2E, performance, and security testing — with automation-first strategies that catch regressions before they reach production.",
    icon: "CheckCircle",
    tags: ["Automation", "QA", "Performance Testing"],
    process: [
      { label: "Strategy", detail: "Coverage planning and tooling selection" },
      { label: "Automate", detail: "Unit, integration, and E2E suite build" },
      { label: "Integrate", detail: "CI pipeline integration on every commit" },
      { label: "Report", detail: "Coverage dashboards and regression alerts" },
    ],
    deliverables: [
      "Automated test suites across all layers",
      "CI-integrated regression detection",
      "Coverage and quality reporting dashboard",
    ],
    outcome: "Regressions caught before production",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "Native and cross-platform apps built for performance, from first design through App Store launch.",
    longDescription:
      "Native and cross-platform mobile applications built for performance and retention. We cover iOS, Android, and React Native, from product design through App Store deployment, with ongoing iteration built into our engagement model.",
    icon: "Smartphone",
    tags: ["iOS", "Android", "React Native"],
    process: [
      { label: "Design", detail: "UX/UI product design and prototype validation" },
      { label: "Build", detail: "Native or cross-platform development" },
      { label: "Test", detail: "Device lab testing and App Store compliance" },
      { label: "Ship", detail: "Submission, launch, and iteration cycles" },
    ],
    deliverables: [
      "iOS and Android applications",
      "App Store and Play Store submission package",
      "Analytics integration and crash reporting",
    ],
    outcome: "From design to App Store without gaps",
  },
  {
    id: "data-analytics",
    title: "Data and Analytics",
    description:
      "Turn raw operational data into clear business intelligence you can actually act on.",
    longDescription:
      "We build data platforms that transform raw operational data into clear business intelligence — data pipelines, warehousing, dashboards, and predictive models. From early-stage analytics infrastructure to enterprise data strategy.",
    icon: "BarChart3",
    tags: ["Data Engineering", "BI", "ML Pipelines"],
    process: [
      { label: "Audit", detail: "Data source mapping and quality assessment" },
      { label: "Pipeline", detail: "ETL/ELT pipelines and data warehouse build" },
      { label: "Model", detail: "BI dashboards and predictive model development" },
      { label: "Govern", detail: "Pipeline monitoring and data quality governance" },
    ],
    deliverables: [
      "Unified data warehouse or lakehouse",
      "Real-time BI dashboards and reports",
      "Predictive models tied to business outcomes",
    ],
    outcome: "Raw data becomes clear decisions",
  },
  {
    id: "ai-generative-ai",
    title: "AI and Generative AI",
    description:
      "AI capabilities matched to your specific problem, not the nearest hype cycle.",
    longDescription:
      "We integrate AI capabilities that deliver measurable outcomes — LLM-powered workflows, intelligent document processing, RAG systems, and custom model fine-tuning. We match the tool to the problem, not the hype cycle.",
    icon: "Sparkles",
    tags: ["LLMs", "RAG", "Automation", "GenAI"],
    process: [
      { label: "Validate", detail: "Use case assessment and ROI scoping" },
      { label: "Select", detail: "Model selection — build, tune, or integrate" },
      { label: "Build", detail: "Integration into your workflows and systems" },
      { label: "Monitor", detail: "Output quality monitoring and iterative tuning" },
    ],
    deliverables: [
      "LLM-powered workflows and automations",
      "RAG systems grounded in your proprietary data",
      "Measurable productivity and cost metrics",
    ],
    outcome: "AI that solves a specific problem, measurably",
  },
];

export const CASE_STUDIES = [
  {
    id: "luxury-hotel-portfolio",
    industry: "Hospitality",
    tag: "Case Study",
    title: "Digital Transformation for a Luxury Hotel Portfolio",
    summary:
      "A portfolio of luxury hotels across India needed to fix three things: fragmented booking systems, inconsistent guest experiences across properties, and no real-time operational visibility.",
    outcome:
      "We built a unified digital platform with PMS connectivity, a headless booking engine, and a real-time operations dashboard. Booking abandonment dropped 40% across properties.",
    services: ["Custom Development", "Cloud Services", "Data and Analytics"],
    metric: "40% reduction in booking abandonment",
  },
  {
    id: "life-sciences-healthcare",
    industry: "Life Sciences / Healthcare",
    tag: "Case Study",
    title: "Full-Stack Modernization for a Life Sciences Group",
    summary:
      "A life sciences group was stuck on outdated infrastructure: siloed data systems, manual compliance workflows, and clinical applications that couldn't keep up with the organization's growth.",
    outcome:
      "We ran a phased modernization, moving core clinical systems to cloud-native architecture, automating compliance reporting, and building a unified data layer that finally connected the organization's siloed departments.",
    services: ["Custom Development", "Cloud Services", "Testing Services", "Data and Analytics"],
    metric: "Compliance reporting time reduced by 65%",
  },
];

export const HOW_WE_WORK_STEPS = [
  {
    step: "01",
    title: "Get in touch",
    description:
      "Tell us what you're working on. We'll set up a focused call with no decks and no sales process. Just a direct conversation about where you need help.",
  },
  {
    step: "02",
    title: "Agree on scope and timeline",
    description:
      "We define the scope, the model, and the start date. Quarterly planning means we're never scrambling to staff your next phase.",
  },
  {
    step: "03",
    title: "Get set up fast",
    description:
      "Standard stacks in under a week. Niche skills in two to three weeks. We cover every knowledge transition cost on our end.",
  },
];

export const DIFFERENTIATORS = [
  {
    title: "Resource Stickiness",
    description:
      "We assign resources specifically to your account and build their expertise around your business. When we backfill any role, we cover every transition cost.",
    icon: "Users",
  },
  {
    title: "Data Security",
    description:
      "Background-checked associates, mandatory training, access controls, encryption, and network monitoring. Your specific security requirements layer on top, not the other way around.",
    icon: "Shield",
  },
  {
    title: "Demand Planning",
    description:
      "We plan quarterly so resources are ready before you need them. Standard onboarding runs 5 to 10 business days from the day you ask.",
    icon: "Calendar",
  },
  {
    title: "EST to PST Coverage",
    description:
      "Our Guadalajara and Monterrey hubs (Mexico's Silicon Valley) cover the full span of US business hours, without the communication overhead of traditional offshore.",
    icon: "Clock",
  },
];

export const DELIVERY_HUBS = [
  {
    city: "Johns Creek",
    region: "Atlanta, GA",
    role: "Headquarters",
    description: "Strategic leadership, client partnerships, and account management.",
  },
  {
    city: "Guadalajara",
    region: "Jalisco, Mexico",
    role: "Primary Delivery Hub",
    description: "Engineering and delivery center — Silicon Valley of Mexico talent market.",
  },
  {
    city: "Monterrey",
    region: "Nuevo León, Mexico",
    role: "Secondary Delivery Hub",
    description: "Engineering and quality assurance. EST–PST timezone aligned.",
  },
];

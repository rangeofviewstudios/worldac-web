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
      "We specialize in delivering tailored software solutions that align seamlessly with your business objectives.",
    longDescription:
      "From greenfield builds to legacy modernization, we architect and deliver custom software that fits your workflows precisely — not the other way around. Our cross-functional PODs combine product thinking with deep engineering expertise across web, API, and systems layers.",
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
      "Ensure the longevity and optimal performance of your applications with our comprehensive support and maintenance services.",
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
      "Transform your online business with our end-to-end eCommerce solutions designed to enhance user experience and drive sales.",
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
      "Leverage the power of the cloud to enhance agility, scalability, and cost-efficiency in your operations.",
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
      "Ensure the reliability and quality of your software through our comprehensive testing services.",
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
      "Expand your reach with our mobile development services, creating engaging and high-performance mobile applications.",
    longDescription:
      "Native and cross-platform mobile applications built for performance and retention. We cover iOS, Android, and React Native — from product design through App Store deployment — with ongoing iteration built into our engagement model.",
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
      "Unlock actionable insights and drive informed decision-making with our data and analytics services.",
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
      "Innovate and automate with our AI and Generative AI services, transforming your business processes and customer experiences.",
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
      "A portfolio of luxury and business hotels across India faced critical challenges in digital engagement and operational efficiency — fragmented booking systems, inconsistent guest experiences across properties, and limited operational visibility.",
    outcome:
      "We delivered a unified digital platform integrating PMS connectivity, a headless booking engine, and a real-time operations dashboard — reducing booking abandonment by 40% and cutting front-desk processing time significantly across properties.",
    services: ["Custom Development", "Cloud Services", "Data and Analytics"],
    metric: "40% reduction in booking abandonment",
  },
  {
    id: "life-sciences-healthcare",
    industry: "Life Sciences / Healthcare",
    tag: "Case Study",
    title: "Full-Stack Modernization for a Life Sciences Group",
    summary:
      "A life sciences and healthcare group was operating on outdated digital infrastructure — siloed data systems, manual compliance workflows, and legacy clinical applications that could not scale with the organization's growth.",
    outcome:
      "We executed a phased full-stack modernization: re-platforming core clinical systems to cloud-native architecture, implementing automated compliance reporting pipelines, and delivering a unified data layer that connected previously isolated departments.",
    services: ["Custom Development", "Cloud Services", "Testing Services", "Data and Analytics"],
    metric: "Compliance reporting time reduced by 65%",
  },
];

export const HOW_WE_WORK_STEPS = [
  {
    step: "01",
    title: "Get in touch",
    description:
      "Tell us about your project, team gaps, or operational challenges. We'll schedule a focused discovery call — no boilerplate decks, just a direct conversation.",
  },
  {
    step: "02",
    title: "Agree on scope and timeline",
    description:
      "We define exactly what we're supporting, the engagement model, and the start date. Quarterly demand planning ensures resources are aligned to your roadmap.",
  },
  {
    step: "03",
    title: "Get set up fast",
    description:
      "Standard stack onboarding within 1 week. Niche skills within 2–3 weeks. Urgent requests accommodated. We absorb all knowledge transition costs on our end.",
  },
];

export const DIFFERENTIATORS = [
  {
    title: "Resource Stickiness",
    description:
      "We assign client-specific resources and develop talent centered on your line of business. When we backfill any role, we pick up the full cost of knowledge transition.",
    icon: "Users",
  },
  {
    title: "Data Security",
    description:
      "Background-checked associates, mandatory training cycles, access controls, encryption, and network monitoring. We implement your specific security standards — not just defaults.",
    icon: "Shield",
  },
  {
    title: "Demand Planning",
    description:
      "Quarterly planning cycles to fulfill contingent resourcing needs. Resources onboarded typically within 5–10 business days of your request.",
    icon: "Calendar",
  },
  {
    title: "EST–PST Coverage",
    description:
      "Nearshore delivery hubs in Guadalajara and Monterrey — the Silicon Valley of Mexico — means full US business hours coverage without the offshore latency.",
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

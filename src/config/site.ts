import type { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  name: "ZHS AI Agency",
  tagline: "Build Smarter. Automate Faster. Grow Better.",
  description:
    "ZHS AI Agency builds intelligent AI systems, automation workflows, digital products, creative experiences and growth solutions for modern businesses.",
  email: "zhsaiagency@gmail.com",
  siteUrl: import.meta.env.VITE_SITE_URL || "",
  navGroups: [
    {
      label: "Home",
      path: "/",
      items: [],
    },
    {
      label: "Services",
      path: "/solutions",
      items: [
        {
          label: "AI & Automation",
          path: "/ai-automation",
          items: [
            { label: "AI Automation", path: "/ai-automation" },
            { label: "AI Lead Generation Systems", path: "/solutions/ai-lead-generation" },
            { label: "AI Sales Automation", path: "/solutions/ai-sales-automation" },
            { label: "AI Customer Support Automation", path: "/solutions/ai-customer-support" },
            { label: "AI Marketing Automation", path: "/solutions/ai-marketing-automation" },
            { label: "Business Process Automation", path: "/solutions/business-process-automation" },
          ],
        },
        {
          label: "AI Solutions",
          path: "/solutions",
          items: [
            { label: "Local Business Growth Automation", path: "/solutions/local-business-growth" },
            { label: "WhatsApp & Chatbot Automation", path: "/solutions/whatsapp-chatbot" },
            { label: "AI Consulting & Strategy", path: "/solutions/ai-consulting" },
            { label: "Custom Chatbot Development", path: "/solutions/chatbot-development" },
            { label: "AI Agents", path: "/ai-automation" },
          ],
        },
        {
          label: "Technology",
          path: "/technology",
          items: [
            { label: "Technology Solutions", path: "/technology" },
            { label: "Web Development", path: "/technology" },
            { label: "Mobile App Development", path: "/services/mobile-app-development" },
            { label: "Custom Software", path: "/technology" },
            { label: "Integrations", path: "/solutions/integrations" },
          ],
        },
        {
          label: "Digital Growth",
          path: "/digital-growth",
          items: [
            { label: "Digital Marketing", path: "/digital-growth" },
            { label: "SEO & Search Growth", path: "/digital-growth" },
          ],
        },
        {
          label: "Creative",
          path: "/creative",
          items: [
            { label: "Graphic Design & Branding", path: "/creative" },
            { label: "Video Editing & Content", path: "/creative" },
            { label: "AI Commercial Ads", path: "/creative" },
          ],
        },
        {
          label: "3D Studio",
          path: "/3d-studio",
          items: [
            { label: "3D Design & Modeling", path: "/3d-studio" },
            { label: "3D Printing & Prototyping", path: "/3d-studio" },
          ],
        },
      ],
    },
    {
      label: "Industries",
      path: "/industries",
      items: [
        { label: "SaaS & Technology", path: "/industries/saas" },
        { label: "Real Estate", path: "/industries/real-estate" },
        { label: "Healthcare & Clinics", path: "/industries/healthcare" },
        { label: "E-commerce & Retail", path: "/industries/ecommerce" },
        { label: "Finance", path: "/industries/finance" },
        { label: "Education", path: "/industries/education" },
        { label: "Professional Services", path: "/industries/professional-services" },
        { label: "Manufacturing", path: "/industries/manufacturing" },
        { label: "Hospitality", path: "/industries/hospitality" },
        { label: "Local Businesses", path: "/industries/local-businesses" },
        { label: "Startups", path: "/industries/startups" },
      ],
    },
    {
      label: "Solutions",
      path: "/solutions",
      items: [
        { label: "AI Lead Generation", path: "/solutions/ai-lead-generation" },
        { label: "AI Sales Automation", path: "/solutions/ai-sales-automation" },
        { label: "AI Customer Support", path: "/solutions/ai-customer-support" },
        { label: "AI Voice Agents", path: "/solutions/ai-voice-agents" },
        { label: "WhatsApp AI Automation", path: "/solutions/whatsapp-ai-automation" },
        { label: "CRM Automation", path: "/solutions/crm-automation" },
        { label: "Appointment Automation", path: "/solutions/appointment-automation" },
        { label: "RAG / Knowledge Assistants", path: "/solutions/rag-knowledge-assistants" },
        { label: "Workflow Automation", path: "/solutions/workflow-automation" },
        { label: "Internal Business Assistants", path: "/solutions/internal-business-assistants" },
      ],
    },
    {
      label: "Works",
      path: "/works",
      items: [],
    },
    {
      label: "About",
      path: "/about-us",
      items: [
        { label: "About ZHS", path: "/about-us" },
        { label: "AI-First Company", path: "/about-us/ai-first-company" },
        { label: "Why ZHS", path: "/about-us/why-zhs" },
        { label: "Our Process", path: "/about-us/process" },
        { label: "Our Team", path: "/about-us/team" },
      ],
    },
    {
      label: "Insights",
      path: "/blog",
      items: [],
    },
  ],
  services: [
    { title: "AI Automation", description: "Intelligent workflow automation powered by artificial intelligence.", path: "/ai-automation", icon: "Bot" },
    { title: "Technology", description: "Custom technology solutions built for scale and performance.", path: "/technology", icon: "Code2" },
    { title: "Mobile App Development", description: "Business, customer-facing, and AI-powered mobile applications.", path: "/services/mobile-app-development", icon: "Smartphone" },
    { title: "Creative", description: "Creative design and branding that stands out in the market.", path: "/creative", icon: "Palette" },
    { title: "3D Studio", description: "Immersive 3D experiences and visualization solutions.", path: "/3d-studio", icon: "Box" },
    { title: "Digital Growth", description: "Data-driven strategies for sustainable digital growth.", path: "/digital-growth", icon: "TrendingUp" },
  ],
  socialLinks: {},
};

export const serviceCategories: Record<string, string[]> = {
  "AI & AUTOMATION": [
    "AI Automation",
    "AI Lead Generation Systems",
    "AI Sales Automation",
    "AI Customer Support Automation",
    "AI Marketing Automation",
    "Business Process Automation",
  ],
  "AI SOLUTIONS": [
    "Local Business Growth Automation",
    "WhatsApp & Chatbot Automation",
    "AI Consulting & Strategy",
    "Custom Chatbot Development",
    "AI Agents",
  ],
  TECHNOLOGY: [
    "Technology Solutions",
    "Web Development",
    "Mobile App Development",
    "Custom Software",
    "Integrations",
  ],
  "DIGITAL GROWTH": [
    "Digital Marketing",
    "SEO & Search Growth",
  ],
  CREATIVE: [
    "Graphic Design & Branding",
    "Video Editing & Content",
    "AI Commercial Ads",
  ],
  "3D STUDIO": [
    "3D Design & Modeling",
    "3D Printing & Prototyping",
  ],
};

export const industriesData = [
  { slug: "saas", title: "SaaS & Technology", description: "AI-powered tools for SaaS platforms that drive user engagement, reduce churn, and accelerate growth.", icon: "Cloud", challenges: ["High user churn and low retention", "Complex onboarding experiences", "Need for scalable infrastructure", "Competition-driven feature pressure"], solutions: ["Intelligent onboarding flows", "Churn prediction systems", "Automated feature adoption", "Scalable cloud architecture"], services: ["AI Automation", "Technology Solutions", "Digital Growth"], outcomes: ["Higher user retention", "Faster onboarding completion", "Reduced churn rates", "Scalable operations"] },
  { slug: "real-estate", title: "Real Estate", description: "AI-driven lead qualification, property matching, and virtual experiences that help agents close deals faster.", icon: "Home", challenges: ["Lead qualification bottleneck", "Manual property matching", "Inefficient follow-up sequences", "Limited virtual viewing capabilities"], solutions: ["AI Lead Generation", "CRM Automation", "AI Customer Support", "Workflow Automation"], services: ["AI Automation", "Technology Solutions", "Digital Growth"], outcomes: ["Faster lead conversion", "Automated follow-up", "Improved property matching", "Reduced manual workload"] },
  { slug: "healthcare", title: "Healthcare & Clinics", description: "Streamlined patient intake, appointment scheduling, and administrative automation that improves care coordination.", icon: "Heart", challenges: ["Administrative overhead", "Patient scheduling complexity", "Compliance documentation burden", "Long patient wait times"], solutions: ["AI Customer Support", "Appointment Automation", "Workflow Automation", "Internal Business Assistants"], services: ["AI Automation", "Custom Software", "Mobile App Development"], outcomes: ["Reduced admin time", "Faster patient intake", "Better scheduling efficiency", "Improved compliance"] },
  { slug: "ecommerce", title: "E-commerce & Retail", description: "AI-powered product recommendations, inventory optimization, and personalized shopping experiences.", icon: "ShoppingCart", challenges: ["Cart abandonment", "Personalization gaps", "Inventory management complexity", "Customer retention difficulty"], solutions: ["AI Lead Generation", "AI Marketing Automation", "CRM Automation", "Workflow Automation"], services: ["AI Automation", "Technology Solutions", "Digital Growth"], outcomes: ["Higher conversion rates", "Better personalization", "Reduced cart abandonment", "Increased repeat purchases"] },
  { slug: "finance", title: "Finance", description: "Automated reporting, compliance workflows, and client communication systems that reduce manual work.", icon: "BarChart3", challenges: ["Manual reporting processes", "Compliance documentation burden", "Client communication overhead", "Risk assessment complexity"], solutions: ["AI Customer Support", "CRM Automation", "Workflow Automation", "RAG / Knowledge Assistants"], services: ["AI Automation", "Technology Solutions", "Digital Growth"], outcomes: ["Automated reporting", "Reduced compliance risk", "Faster client responses", "Better risk management"] },
  { slug: "education", title: "Education", description: "Personalized learning pathways, automated grading, and engagement tools that enhance education at scale.", icon: "GraduationCap", challenges: ["Scaling personalized learning", "Manual grading burden", "Student engagement gaps", "Administrative inefficiencies"], solutions: ["AI Customer Support", "Workflow Automation", "Internal Business Assistants", "RAG / Knowledge Assistants"], services: ["AI Automation", "Technology Solutions", "Mobile App Development"], outcomes: ["Personalized learning at scale", "Automated grading", "Higher engagement", "Reduced admin burden"] },
  { slug: "professional-services", title: "Professional Services", description: "Client intake automation, project management workflows, and knowledge base systems that free up billable hours.", icon: "Briefcase", challenges: ["Client intake inefficiency", "Project management overhead", "Knowledge base maintenance", "Billable hour optimization"], solutions: ["Workflow Automation", "CRM Automation", "Appointment Automation", "Internal Business Assistants"], services: ["AI Automation", "Technology Solutions", "Digital Growth"], outcomes: ["More billable hours", "Faster client intake", "Better project tracking", "Reduced operational costs"] },
  { slug: "manufacturing", title: "Manufacturing", description: "Production scheduling optimization, quality control monitoring, and supply chain visibility systems.", icon: "Factory", challenges: ["Production scheduling complexity", "Quality control manual processes", "Supply chain visibility gaps", "Predictive maintenance gaps"], solutions: ["Workflow Automation", "Internal Business Assistants", "AI Customer Support", "RAG / Knowledge Assistants"], services: ["AI Automation", "Technology Solutions", "Custom Software"], outcomes: ["Optimized scheduling", "Better quality control", "Improved supply chain visibility", "Reduced downtime"] },
  { slug: "hospitality", title: "Hospitality", description: "Automated booking systems, personalized guest experiences, and operational efficiency tools.", icon: "Store", challenges: ["Booking management complexity", "Personalized guest experience gaps", "Staff scheduling challenges", "Reputation management overhead"], solutions: ["AI Customer Support", "Appointment Automation", "AI Marketing Automation", "Workflow Automation"], services: ["AI Automation", "Technology Solutions", "Mobile App Development"], outcomes: ["Automated bookings", "Personalized experiences", "Efficient scheduling", "Better reputation management"] },
  { slug: "local-businesses", title: "Local Businesses", description: "Local business growth automation, lead generation, and digital presence optimization.", icon: "Store", challenges: ["Limited marketing resources", "Local visibility challenges", "Customer acquisition costs", "Online reputation management"], solutions: ["AI Lead Generation", "AI Marketing Automation", "Digital Marketing", "SEO & Search Growth"], services: ["AI Automation", "Digital Growth", "Mobile App Development"], outcomes: ["Higher local visibility", "More qualified leads", "Lower acquisition costs", "Better online presence"] },
  { slug: "startups", title: "Startups", description: "Rapid prototyping, MVP development, and growth automation systems that help startups validate and scale.", icon: "Rocket", challenges: ["Rapid prototyping needs", "Limited resources", "Scalability concerns", "Growth validation pressure"], solutions: ["AI Lead Generation", "Workflow Automation", "AI Customer Support", "AI Marketing Automation"], services: ["AI Automation", "Technology Solutions", "Mobile App Development", "Digital Growth"], outcomes: ["Faster validation cycles", "Scalable infrastructure", "More qualified leads", "Reduced time to market"] },
];

export const solutionDetails: Record<string, { challenge: string; approach: string[]; outcomes: string[]; pillar: { label: string; path: string } }> = {
  "ai-lead-generation": {
    challenge: "Pipeline depends on manual prospecting and inconsistent follow-up. High-intent prospects slip through because response times are slow and qualification is subjective.",
    approach: ["Define ideal-customer criteria and scoring signals", "Capture and enrich inbound leads automatically", "Qualify and route prospects with AI-assisted scoring", "Nurture early-stage leads until they are sales-ready"],
    outcomes: ["A consistently populated pipeline", "Faster response to high-intent prospects", "Sales time focused on qualified opportunities"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  "ai-sales-automation": {
    challenge: "Repetitive sales tasks — data entry, follow-ups, scheduling, proposals — consume the hours your team should spend selling.",
    approach: ["Map the sales process and identify repetitive steps", "Automate scoring, routing, and CRM updates", "Automate follow-up sequences and meeting booking", "Surface next-best actions to your sales team"],
    outcomes: ["Less manual work per deal", "Nothing dropped between pipeline stages", "A sales process that runs consistently"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  "ai-customer-support": {
    challenge: "Support volume grows faster than the team. Customers wait, agents repeat themselves, and complex cases lose context when escalated.",
    approach: ["Audit the most common inquiries and resolution paths", "Build AI handling for repeat questions with your knowledge base", "Escalate complex cases to humans with full context", "Continuously improve from resolution data"],
    outcomes: ["Faster first responses", "Consistent answers to common questions", "Agents focused on the cases that need them"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  "ai-marketing-automation": {
    challenge: "Campaigns run on manual schedules and generic messaging. Segmentation, reporting, and optimization eat team time without guaranteeing results.",
    approach: ["Connect marketing data across channels and tools", "Automate segmentation and audience selection", "Personalize content and nurture journeys", "Track performance and iterate on what works"],
    outcomes: ["Campaigns that adapt to audience behavior", "Less time spent on manual campaign operations", "Clearer attribution and decision-making"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  "business-process-automation": {
    challenge: "Repetitive processes — approvals, data entry, handoffs, reporting — slow the business down and introduce human error.",
    approach: ["Document the current process and its bottlenecks", "Identify which steps can be automated safely", "Build automated flows with human checkpoints where needed", "Monitor, measure, and refine"],
    outcomes: ["Fewer manual steps per process", "Fewer errors in repetitive work", "Teams freed for higher-value work"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  "local-business-growth": {
    challenge: "Local businesses compete for attention with limited marketing resources — leads arrive through multiple channels and follow-up is inconsistent.",
    approach: ["Centralize lead capture from site, listings, and messages", "Automate follow-up and appointment booking", "Systematize review and repeat-customer engagement", "Improve local search visibility"],
    outcomes: ["More leads converted through faster follow-up", "A consistent local presence", "Less time lost to manual admin"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  "whatsapp-chatbot": {
    challenge: "Customers message on WhatsApp and web chat expecting instant answers — but manual replies are slow, inconsistent, and hard to scale.",
    approach: ["Design conversation flows around real customer journeys", "Ground answers in your knowledge base and policies", "Hand off to a human with full context when needed", "Integrate with CRM, booking, and notification systems"],
    outcomes: ["Instant answers around the clock", "Consistent, on-brand conversations", "Conversations that convert into actions"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  "ai-consulting": {
    challenge: "AI opportunities are everywhere — but investing in the wrong use case wastes budget, trust, and time.",
    approach: ["Audit workflows, data, and bottlenecks", "Rank opportunities by impact and feasibility", "Define an implementation roadmap with clear milestones", "Advise on tooling, risk, and human oversight"],
    outcomes: ["A prioritized, practical AI roadmap", "Confidence about where AI does — and doesn't — fit", "A foundation your team can build on"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  "chatbot-development": {
    challenge: "Off-the-shelf chatbots don't know your business — they give wrong answers, frustrate customers, and create more work than they remove.",
    approach: ["Map the conversations that matter to your business", "Train on your knowledge base, products, and policies", "Integrate with the tools your team already uses", "Add human oversight and continuous improvement"],
    outcomes: ["Accurate, business-specific answers", "Deflected repetitive inquiries", "A chatbot that improves with use"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  integrations: {
    challenge: "Disconnected tools create duplicate data entry, stale records, and broken handoffs between teams.",
    approach: ["Map systems, data flows, and failure points", "Design reliable API and event-driven connections", "Build sync jobs with error handling and monitoring", "Document and maintain the integration layer"],
    outcomes: ["One source of truth across tools", "Manual re-entry eliminated", "Handoffs that don't drop data"],
    pillar: { label: "Technology", path: "/technology" },
  },
  "ai-voice-agents": {
    challenge: "Phone volume and repetitive call handling take time from your team — while missed calls mean missed opportunities.",
    approach: ["Design call flows for inbound and outbound use cases", "Build voice AI for qualification, booking, and FAQs", "Integrate with telephony, CRM, and calendars", "Escalate complex calls to humans with context"],
    outcomes: ["Calls handled around the clock", "Consistent qualification and booking", "Team time protected from repetitive calls"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  "whatsapp-ai-automation": {
    challenge: "WhatsApp is where your customers are — but manual messaging doesn't scale, and slow replies lose deals.",
    approach: ["Design automated flows for support, sales, and notifications", "Ground AI replies in your business data", "Trigger messages from CRM and operational events", "Hand off to humans when judgment is needed"],
    outcomes: ["Instant engagement on WhatsApp", "Automated notifications that keep customers informed", "Conversations that move business forward"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  "crm-automation": {
    challenge: "CRMs only work when data is current — but manual entry means stale contacts, missed follow-ups, and unreliable reporting.",
    approach: ["Identify where CRM data goes stale or wrong", "Automate capture, enrichment, and synchronization", "Automate pipeline stage updates and reminders", "Keep reporting trustworthy"],
    outcomes: ["A CRM your team can trust", "Less time spent on data entry", "Reliable pipeline visibility"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  "appointment-automation": {
    challenge: "Scheduling by email or phone creates back-and-forth, no-shows, and calendar conflicts.",
    approach: ["Automate booking with real-time availability", "Send confirmations and reminders automatically", "Reduce no-shows with timely nudges", "Sync with CRM and operational systems"],
    outcomes: ["Booking without the back-and-forth", "Fewer no-shows", "Calendars that run themselves"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  "rag-knowledge-assistants": {
    challenge: "Answers live in documents, wikis, and people's heads — so teams search, wait, and sometimes guess.",
    approach: ["Structure and connect your proprietary knowledge", "Ground AI responses in that verified content", "Add citations, permissions, and guardrails", "Keep knowledge fresh as sources change"],
    outcomes: ["Accurate answers grounded in your data", "Less time searching for information", "Consistent knowledge across the team"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  "workflow-automation": {
    challenge: "Work moves between tools and people through manual steps — slowing delivery and introducing errors.",
    approach: ["Map the end-to-end workflow and its handoffs", "Connect tools into automated flows", "Add approvals and human checkpoints where needed", "Monitor failures and refine"],
    outcomes: ["Faster cycle times", "Fewer manual handoffs", "Processes that run consistently"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
  "internal-business-assistants": {
    challenge: "Employees spend hours finding information, drafting documents, and repeating routine tasks.",
    approach: ["Identify the highest-friction internal tasks", "Build assistants grounded in your data and tools", "Integrate into the places your team already works", "Improve continuously from real usage"],
    outcomes: ["Faster everyday work", "Instant access to internal knowledge", "More time for work that needs humans"],
    pillar: { label: "AI & Automation", path: "/ai-automation" },
  },
};

export const solutionsData = [
  { slug: "ai-lead-generation", title: "AI Lead Generation", description: "AI-powered systems that identify, qualify, and nurture leads automatically — filling your pipeline with high-intent prospects.", icon: "Target" },
  { slug: "ai-sales-automation", title: "AI Sales Automation", description: "Automate your entire sales pipeline from lead scoring to proposal generation, meeting booking, and follow-up sequences.", icon: "Workflow" },
  { slug: "ai-customer-support", title: "AI Customer Support", description: "Intelligent support systems that handle inquiries 24/7, resolve issues instantly, and escalate complex cases with full context.", icon: "MessageSquare" },
  { slug: "ai-marketing-automation", title: "AI Marketing Automation", description: "Data-driven campaign automation — audience segmentation, personalized content, lead nurturing, and performance optimization across channels.", icon: "TrendingUp" },
  { slug: "business-process-automation", title: "Business Process Automation", description: "End-to-end automation of repetitive business processes — approvals, data entry, reporting, and handoffs across your organization.", icon: "Workflow" },
  { slug: "local-business-growth", title: "Local Business Growth Automation", description: "Lead capture, review generation, local visibility, and follow-up automation that helps local businesses attract and retain more customers.", icon: "Store" },
  { slug: "whatsapp-chatbot", title: "WhatsApp & Chatbot Automation", description: "Conversational automation across WhatsApp and web chat — answering questions, qualifying leads, booking appointments, and sending notifications.", icon: "MessageSquare" },
  { slug: "ai-consulting", title: "AI Consulting & Strategy", description: "Strategic guidance on where AI can create real business value — opportunity audits, roadmaps, tooling decisions, and implementation planning.", icon: "Brain" },
  { slug: "chatbot-development", title: "Custom Chatbot Development", description: "Tailored conversational AI built for your specific use cases, knowledge base, tone, and integration stack.", icon: "Bot" },
  { slug: "integrations", title: "Integrations", description: "Connect your tools, data, and processes into one reliable flow — APIs, webhooks, sync jobs, and orchestration between the systems you already use.", icon: "Plug" },
  { slug: "ai-voice-agents", title: "AI Voice Agents", description: "Natural voice interfaces for phone systems, IVR, and hands-free interactions that handle inbound and outbound calls.", icon: "Headphones" },
  { slug: "whatsapp-ai-automation", title: "WhatsApp AI Automation", description: "Automated WhatsApp flows for support, sales, notifications, and customer engagement at scale.", icon: "MessageSquare" },
  { slug: "crm-automation", title: "CRM Automation", description: "Keep your CRM clean and current with automated data entry, pipeline management, and contact synchronization.", icon: "Database" },
  { slug: "appointment-automation", title: "Appointment Automation", description: "Smart scheduling systems that eliminate back-and-forth, send reminders, and optimize calendar utilization.", icon: "Calendar" },
  { slug: "rag-knowledge-assistants", title: "RAG / Knowledge Assistants", description: "Retrieval-augmented generation systems that ground AI responses in your proprietary data for accurate answers.", icon: "BookOpen" },
  { slug: "workflow-automation", title: "Workflow Automation", description: "End-to-end automation that connects your tools and eliminates repetitive tasks across your entire organization.", icon: "Zap" },
  { slug: "internal-business-assistants", title: "Internal Business Assistants", description: "AI copilots that help your team work faster, find information instantly, and make better decisions.", icon: "Cpu" },
];

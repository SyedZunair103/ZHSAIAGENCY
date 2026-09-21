import { useState, useEffect } from "react";
import { Bot, Users, Code2, Box, TrendingUp } from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";
import { supabase } from "../lib/supabase";
import { getIcon } from "../lib/icons";

interface DbCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  category: string;
  challenge: string;
  solution: string;
  capabilities: string[] | unknown;
  tech_stack: string[] | unknown;
  business_application: string | null;
  display_order: number;
  is_published: boolean;
}

const categoryColorMap: Record<string, string> = {
  "AI Automation": "bg-zhs-accent/10 text-zhs-accent",
  Technology: "bg-zhs-blue/10 text-zhs-blue",
  Creative: "bg-zhs-violet/10 text-zhs-violet",
  "3D Studio": "bg-zhs-cyan/10 text-zhs-cyan",
  "Digital Growth": "bg-zhs-emerald/10 text-zhs-emerald",
};

const fallbackProjects = [
  {
    icon: Bot,
    title: "AI Customer Support System",
    category: "AI Automation",
    categoryColor: "bg-zhs-accent/10 text-zhs-accent",
    projectType: "Concept Project",
    challenge:
      "Support teams face growing ticket volumes while maintaining response quality. Manual ticket routing and repetitive inquiries consume agent time that could be spent on complex issues.",
    solution:
      "An intelligent support system combining a custom AI chatbot with automated ticket classification. The AI handles common questions instantly, routes complex issues to the right team, and provides agents with suggested responses — reducing response times while maintaining a human touch.",
    capabilities: ["AI Chatbot Development", "Natural Language Processing", "Ticket Routing Automation", "Knowledge Base Integration"],
    techStack: ["Python", "LangChain", "OpenAI API", "React", "Node.js", "PostgreSQL"],
    businessApplication: "Service businesses handling high support volumes — reducing agent workload by deflecting routine inquiries while improving customer satisfaction through instant responses.",
  },
  {
    icon: Users,
    title: "Automated Lead Qualification",
    category: "AI Automation",
    categoryColor: "bg-zhs-accent/10 text-zhs-accent",
    projectType: "Representative Work",
    challenge:
      "Sales teams spend hours qualifying leads manually, often pursuing prospects that aren't a good fit. The disconnect between marketing and sales creates friction and wasted effort.",
    solution:
      "A lead scoring engine that analyzes behavior signals, engagement patterns, and firmographic data to rank prospects automatically. Qualified leads flow directly into the CRM with enriched profiles and recommended next actions.",
    capabilities: ["Lead Scoring Models", "CRM Integration", "Behavioral Analytics", "Automated Workflows"],
    techStack: ["Python", "scikit-learn", "FastAPI", "Zapier", "HubSpot API", "PostgreSQL"],
    businessApplication: "B2B companies with longer sales cycles — helping sales teams focus on the highest-probability prospects and reducing time-to-close.",
  },
  {
    icon: Code2,
    title: "SaaS Product Development",
    category: "Technology",
    categoryColor: "bg-zhs-blue/10 text-zhs-blue",
    projectType: "Concept Project",
    challenge:
      "Building a SaaS platform from scratch requires expertise across frontend, backend, billing, authentication, multi-tenancy, and infrastructure — a complex undertaking for any team.",
    solution:
      "A complete SaaS architecture with subscription billing, multi-tenant data isolation, real-time dashboards, and role-based access control. Built with a modular structure that allows features to be added without rearchitecting the core system.",
    capabilities: ["Full-Stack Development", "Subscription Billing", "Multi-Tenant Architecture", "Real-Time Dashboards"],
    techStack: ["Next.js", "TypeScript", "Node.js", "Stripe", "PostgreSQL", "Redis", "Vercel"],
    businessApplication: "Startups and businesses launching subscription-based products — providing a production-ready foundation that scales from MVP to thousands of users.",
  },
  {
    icon: Box,
    title: "3D Product Visualization",
    category: "Creative",
    categoryColor: "bg-zhs-violet/10 text-zhs-violet",
    projectType: "Concept Project",
    challenge:
      "E-commerce and product companies struggle to showcase products online with the same impact as in-person experiences. Static images don't convey scale, texture, or spatial context.",
    solution:
      "An interactive 3D visualization platform allowing users to rotate, zoom, and customize products in a realistic environment. Integrated with the product catalog for a seamless browse-to-visualize experience.",
    capabilities: ["3D Product Rendering", "Interactive Visualization", "WebGL Development", "Product Catalog Integration"],
    techStack: ["Three.js", "React", "Blender", "WebGL", "Node.js", "AWS S3"],
    businessApplication: "Furniture, automotive, and product companies looking to reduce return rates and increase purchase confidence through immersive product experiences.",
  },
  {
    icon: TrendingUp,
    title: "Brand & Growth System",
    category: "Digital Growth",
    categoryColor: "bg-zhs-emerald/10 text-zhs-emerald",
    projectType: "Representative Work",
    challenge:
      "Early-stage companies need a cohesive brand presence and growth engine — from identity and website to content strategy and analytics — but lack the budget for separate agencies.",
    solution:
      "A unified brand and growth system covering visual identity, landing page design, SEO optimization, content strategy, and analytics dashboards. All components built with consistency and measurability in mind.",
    capabilities: ["Brand Identity Design", "Landing Page Development", "SEO Strategy", "Analytics Dashboards"],
    techStack: ["Figma", "Next.js", "Tailwind CSS", "Google Analytics", "Vercel", "Notion"],
    businessApplication: "Startups and SMBs launching new products or entering new markets — establishing a professional brand presence and data-driven growth foundation from day one.",
  },
];

function toArray(val: string[] | unknown): string[] {
  if (Array.isArray(val)) return val as string[];
  if (typeof val === "string") {
    try {
      const parsed = JSON.parse(val);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      // not JSON
    }
  }
  return [];
}

export default function CaseStudies() {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      const { data, error } = await supabase
        .from("case_studies")
        .select("*")
        .eq("is_published", true)
        .order("display_order", { ascending: true });

      if (error || !data || data.length === 0) {
        setProjects(fallbackProjects);
      } else {
        const mapped = data.map((cs: DbCaseStudy) => {
          const Icon = getIcon(null);
          return {
            icon: Icon,
            title: cs.title,
            category: cs.category,
            categoryColor: categoryColorMap[cs.category] ?? "bg-zhs-accent/10 text-zhs-accent",
            projectType: "Case Study",
            challenge: cs.challenge,
            solution: cs.solution,
            capabilities: toArray(cs.capabilities),
            techStack: toArray(cs.tech_stack),
            businessApplication: cs.business_application ?? "",
          };
        });
        setProjects(mapped);
      }

    };

    fetchCaseStudies();
  }, []);

  return (
    <>
      <Seo
        title="Case Studies | ZHS AI Agency"
        description="Explore representative projects and concept work from ZHS AI Agency — AI customer support, lead qualification, SaaS development, 3D visualization, and brand systems."
        path="/case-studies"
      />

      <PageHero
        eyebrow="Case Studies"
        heading="What We Build."
        subheading="Real projects showcasing our approach to AI, technology, and design. Each project demonstrates how we translate complex challenges into practical, scalable solutions."
      />

      {/* Disclaimer */}
      <section className="relative py-8">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-zhs-amber/20 bg-zhs-amber/5 p-5 text-center backdrop-blur-sm">
              <p className="text-sm font-medium dark:text-zhs-amber text-amber-700">
                Note: The projects below are representative work and concept projects. They illustrate our capabilities and approach — not all may be live client deployments.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Projects */}
      <SectionWrapper id="projects" className="dark:bg-zhs-black bg-white">
        <div className="space-y-12">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 80}>
              <div className="card-premium overflow-hidden">
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 p-2">
                  {/* Left: Project Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent">
                        <project.icon className="h-5 w-5" />
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${project.categoryColor}`}>
                        {project.category}
                      </span>
                      <span className="rounded-full border border-zhs-border bg-zhs-dark-2/50 px-3 py-1 text-xs font-medium dark:text-zhs-muted text-slate-500">
                        {project.projectType}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold dark:text-zhs-white text-slate-900">{project.title}</h3>

                    {/* Challenge */}
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider dark:text-zhs-accent-2 text-zhs-accent mb-2">Challenge</h4>
                      <p className="text-sm leading-relaxed dark:text-zhs-muted text-slate-500">{project.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mt-5">
                      <h4 className="text-sm font-semibold uppercase tracking-wider dark:text-zhs-accent-2 text-zhs-accent mb-2">Solution</h4>
                      <p className="text-sm leading-relaxed dark:text-zhs-muted text-slate-500">{project.solution}</p>
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="lg:w-72 flex-shrink-0">
                    {/* Capabilities */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider dark:text-zhs-text text-slate-600 mb-3">Capabilities</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.capabilities.map((cap) => (
                          <span key={cap} className="rounded-full border px-3 py-1 text-xs dark:border-zhs-border dark:text-zhs-muted border-slate-200 text-slate-500">
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider dark:text-zhs-text text-slate-600 mb-3">Technology</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="rounded-full bg-zhs-accent/10 px-3 py-1 text-xs font-medium text-zhs-accent">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Business Application */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider dark:text-zhs-text text-slate-600 mb-3">Ideal For</h4>
                      <p className="text-sm leading-relaxed dark:text-zhs-muted text-slate-500">{project.businessApplication}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Process Teaser */}
      <SectionWrapper id="process" className="dark:bg-zhs-dark bg-slate-50">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">How We Work</p>
            <h2 className="section-heading">Every Project Follows Our Process.</h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              From discovery to deployment, we follow a structured approach that minimizes risk and maximizes impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { num: "01", title: "Discover", desc: "Deep dive into your goals, users, and constraints." },
            { num: "02", title: "Design", desc: "Prototype solutions and validate before building." },
            { num: "03", title: "Build", desc: "Iterative development with continuous feedback." },
            { num: "04", title: "Launch", desc: "Deploy, monitor, and optimize for real-world use." },
          ].map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 80}>
              <div className="card-premium h-full text-center p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zhs-accent/10 text-sm font-bold text-zhs-accent">
                  {step.num}
                </span>
                <h3 className="mt-4 text-lg font-bold dark:text-zhs-white text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed dark:text-zhs-muted text-slate-500">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <CtaSection
        heading="Have a Project in Mind?"
        subheading="Whether you need AI automation, a custom SaaS platform, or a complete brand system — we'd love to hear about your challenges."
      />
    </>
  );
}

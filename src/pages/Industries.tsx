import { ShoppingCart, Cloud, Heart, Home, DollarSign, GraduationCap, Briefcase, Factory, Store, Cpu, Rocket } from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";

const industries = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "AI-powered product recommendations, inventory optimization, and personalized shopping experiences that increase conversion rates and average order value.",
    capabilities: [
      "Personalized product discovery engines",
      "Dynamic pricing and inventory management",
      "AI chatbots for customer support",
      "Automated email and retargeting flows",
    ],
  },
  {
    icon: Cloud,
    title: "SaaS",
    description: "Intelligent user onboarding, churn prediction, and automated feature adoption workflows that help SaaS companies grow revenue and retain customers.",
    capabilities: [
      "User behavior analytics and segmentation",
      "Automated onboarding sequences",
      "Churn prediction and intervention",
      "Usage-based billing automation",
    ],
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Streamlined patient intake, appointment scheduling, and administrative workflow automation that reduce overhead and improve care coordination.",
    capabilities: [
      "Patient intake and form automation",
      "Appointment scheduling assistants",
      "Medical records processing",
      "Compliance-ready documentation",
    ],
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Automated lead qualification, property matching, and virtual tour experiences that help agents close deals faster and serve more clients.",
    capabilities: [
      "AI lead scoring and qualification",
      "Property matching algorithms",
      "Virtual staging and 3D tours",
      "Automated follow-up sequences",
    ],
  },
  {
    icon: DollarSign,
    title: "Finance",
    description: "Automated reporting, client communication, and document processing systems that reduce manual work and improve compliance workflows.",
    capabilities: [
      "Automated financial report generation",
      "Client onboarding and KYC automation",
      "Document extraction and processing",
      "Transaction monitoring workflows",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Personalized learning pathways, automated grading systems, and student engagement tools that enhance the educational experience at scale.",
    capabilities: [
      "Adaptive learning content delivery",
      "Automated grading and feedback",
      "Student progress tracking",
      "Administrative workflow automation",
    ],
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Client intake automation, project management workflows, and knowledge base systems that free up billable hours and improve service delivery.",
    capabilities: [
      "Client intake and onboarding automation",
      "Project tracking and reporting",
      "Knowledge base and documentation",
      "Time tracking and billing integration",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Production scheduling, quality control monitoring, and supply chain optimization systems that reduce waste and improve operational efficiency.",
    capabilities: [
      "Production scheduling optimization",
      "Quality control monitoring",
      "Supply chain visibility tools",
      "Predictive maintenance alerts",
    ],
  },
  {
    icon: Store,
    title: "Retail",
    description: "Omnichannel inventory management, customer loyalty programs, and personalized marketing automation that drive repeat purchases and lifetime value.",
    capabilities: [
      "Omnichannel inventory sync",
      "Customer loyalty program automation",
      "Personalized marketing campaigns",
      "In-store experience enhancement",
    ],
  },
  {
    icon: Cpu,
    title: "Technology",
    description: "Developer productivity tools, internal documentation systems, and AI-powered code assistance that accelerate product development cycles.",
    capabilities: [
      "Developer workflow automation",
      "Internal documentation systems",
      "AI code review and assistance",
      "Deployment pipeline optimization",
    ],
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Rapid prototyping, MVP development, and growth automation systems that help startups validate ideas, launch fast, and scale efficiently.",
    capabilities: [
      "MVP development and prototyping",
      "Growth analytics dashboards",
      "Automated customer feedback loops",
      "Scalable infrastructure setup",
    ],
  },
];

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries | ZHS AI Agency"
        description="ZHS AI Agency delivers specialized AI, automation, and technology solutions across industries — e-commerce, SaaS, healthcare, finance, real estate, and more."
        path="/industries"
      />

      <PageHero
        eyebrow="Industries"
        heading="Built For Your Industry."
        subheading="Every business has unique challenges. We design AI-powered solutions tailored to the specific workflows, regulations, and goals of your industry — not generic templates."
      />

      {/* Industries Grid */}
      <SectionWrapper id="industries" className="dark:bg-zhs-black bg-white">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Who We Serve</p>
            <h2 className="section-heading">Deep Expertise Across Sectors.</h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              We combine domain knowledge with technical capability to build solutions that actually work within your industry's constraints and opportunities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <ScrollReveal key={industry.title} delay={i * 50}>
              <div className="card-premium group h-full">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-all duration-300 group-hover:bg-zhs-accent/20 group-hover:scale-110">
                  <industry.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold dark:text-zhs-white text-slate-900">{industry.title}</h3>
                <p className="mt-3 text-sm leading-relaxed dark:text-zhs-muted text-slate-500">{industry.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {industry.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-sm dark:text-zhs-text text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zhs-accent" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Approach Section */}
      <SectionWrapper id="approach" className="dark:bg-zhs-dark bg-slate-50">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Approach</p>
            <h2 className="section-heading">Why Industry-Specific Solutions Matter.</h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              Generic tools force you to adapt your business to the software. We build solutions that adapt to your business.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          <ScrollReveal delay={0}>
            <div className="card-premium h-full text-center p-8">
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-zhs-blue/10 text-zhs-blue">
                <span className="text-2xl font-bold">01</span>
              </div>
              <h3 className="text-lg font-bold dark:text-zhs-white text-slate-900">Domain Discovery</h3>
              <p className="mt-3 text-sm leading-relaxed dark:text-zhs-muted text-slate-500">
                We learn your industry's terminology, regulations, workflows, and pain points before writing a single line of code.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="card-premium h-full text-center p-8">
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-zhs-cyan/10 text-zhs-cyan">
                <span className="text-2xl font-bold">02</span>
              </div>
              <h3 className="text-lg font-bold dark:text-zhs-white text-slate-900">Tailored Architecture</h3>
              <p className="mt-3 text-sm leading-relaxed dark:text-zhs-muted text-slate-500">
                We design systems around your existing tools and processes — not the other way around — for seamless adoption.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="card-premium h-full text-center p-8">
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-zhs-emerald/10 text-zhs-emerald">
                <span className="text-2xl font-bold">03</span>
              </div>
              <h3 className="text-lg font-bold dark:text-zhs-white text-slate-900">Iterative Refinement</h3>
              <p className="mt-3 text-sm leading-relaxed dark:text-zhs-muted text-slate-500">
                We deploy, gather real-world feedback, and refine — ensuring the solution evolves with your business needs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      <CtaSection
        heading="Ready to Solve Your Industry's Unique Challenges?"
        subheading="Tell us about your business. We'll show you how AI and automation can work within your industry's specific context."
      />
    </>
  );
}

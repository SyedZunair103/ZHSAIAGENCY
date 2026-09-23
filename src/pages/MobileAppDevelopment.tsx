import { Smartphone, Code2, Zap, Users, Cpu, GitBranch } from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";

const sections = [
  {
    icon: Smartphone,
    title: "Business Mobile Applications",
    description: "Purpose-built mobile apps designed to solve real business problems — from field service management to customer engagement.",
  },
  {
    icon: Users,
    title: "Customer-Facing Apps",
    description: "Mobile experiences your customers will love — intuitive interfaces, seamless onboarding, and reliable performance.",
  },
  {
    icon: Users,
    title: "Internal Business Apps",
    description: "Tools your team uses every day — workforce management, reporting dashboards, approval workflows, and more.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Mobile Apps",
    description: "Mobile applications enhanced with machine learning — from intelligent recommendations to real-time image recognition.",
  },
  {
    icon: GitBranch,
    title: "Cross-Platform Development",
    description: "Build once, deploy everywhere — React Native and Expo applications that work across iOS and Android.",
  },
  {
    icon: Code2,
    title: "Backend & API Integrations",
    description: "Robust server-side infrastructure and API integrations that power your mobile app with speed and reliability.",
  },
];

const capabilities = [
  "Native and cross-platform mobile development",
  "React Native / Expo applications",
  "iOS and Android app development",
  "Business and customer-facing mobile apps",
  "AI-powered mobile features",
  "Backend API design and integration",
  "App deployment and maintenance",
  "Performance optimization and monitoring",
];

export default function MobileAppDevelopment() {
  return (
    <>
      <Seo
        title="Mobile App Development | ZHS AI Agency"
        description="Business mobile applications, customer-facing apps, internal business tools, AI-powered mobile experiences — built with React Native, Expo, and native technologies."
        path="/services/mobile-app-development"
      />

      <PageHero
        eyebrow="Mobile App Development"
        heading="Mobile Apps That Drive Business Results."
        subheading="From customer-facing experiences to internal business tools and AI-powered mobile applications — we build mobile solutions that work."
      />

      <SectionWrapper id="overview" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-label mb-4">What We Build</p>
              <h2 className="section-heading">Mobile-First Solutions for Modern Business.</h2>
              <p className="section-subheading mx-auto mt-4 max-w-xl">
                Mobile App Development is a core ZHS service. We build business applications that your customers and team will actually use — with the right technology for each project.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="types" className="dark:bg-zhs-black bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Our Mobile Services</p>
              <h2 className="section-heading">Every Type of Mobile App We Build.</h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <ScrollReveal key={section.title} delay={i * 80}>
                  <div className="card-premium group h-full p-8 transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-colors duration-300 group-hover:bg-zhs-accent/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold">{section.title}</h3>
                    <p className="mt-3 dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">{section.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="scope" className="dark:bg-zhs-dark bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="section-label mb-4">What Mobile App Development Covers</p>
              <h2 className="section-heading">A Full Spectrum of Mobile Capabilities.</h2>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((cap, i) => (
                <ScrollReveal key={cap} delay={i * 60}>
                  <div className="flex items-start gap-3 rounded-xl border dark:border-zhs-border dark:bg-zhs-dark-2/60 border-slate-200 bg-white p-5">
                    <Zap className="h-5 w-5 flex-shrink-0 text-zhs-accent mt-0.5" />
                    <span className="dark:text-zhs-text text-slate-700 text-sm">{cap}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="process" className="dark:bg-zhs-black bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="section-label mb-4">How We Build</p>
              <h2 className="section-heading">From Concept to App Store.</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { num: "01", title: "Discover", desc: "We understand your business needs, target audience, and technical requirements." },
              { num: "02", title: "Design", desc: "We create wireframes, user flows, and high-fidelity prototypes for your review." },
              { num: "03", title: "Build", desc: "We develop the app with the right technology stack for your specific needs." },
              { num: "04", title: "Deploy & Maintain", desc: "We launch, monitor, and provide ongoing maintenance and updates." },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 120}>
                <div className="card-premium group relative overflow-hidden h-full">
                  <div className="absolute -right-4 -top-4 text-[7rem] font-bold leading-none dark:text-white/[0.02] text-slate-900/[0.03]">
                    {step.num}
                  </div>
                  <div className="relative">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-zhs-accent/10 text-xs font-bold text-zhs-accent-2">
                      {step.num}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold dark:text-zhs-white text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed dark:text-zhs-muted text-slate-500">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <CtaSection
        heading="Ready to Build Your Mobile App?"
        subheading="Whether you need a customer-facing app, an internal tool, or an AI-powered mobile experience — we can help."
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}
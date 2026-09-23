import { Search, Globe, Megaphone, Share2, TrendingUp, Target, FileText, Layout, MousePointerClick, BarChart3, Activity, ArrowRight, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";

const funnelStages = [
  { label: "Visibility", width: "w-full", color: "bg-zhs-accent", icon: Globe, desc: "Get found by the right audience" },
  { label: "Traffic", width: "w-[85%]", color: "bg-zhs-cyan", icon: TrendingUp, desc: "Drive qualified visitors to your site" },
  { label: "Leads", width: "w-[70%]", color: "bg-zhs-emerald", icon: Target, desc: "Capture and nurture potential customers" },
  { label: "Conversion", width: "w-[55%]", color: "bg-zhs-violet", icon: MousePointerClick, desc: "Turn prospects into paying customers" },
  { label: "Revenue", width: "w-[40%]", color: "bg-zhs-amber", icon: BarChart3, desc: "Scale profitable growth sustainably" },
];

const services = [
  { icon: Search, title: "SEO", desc: "Technical SEO audits, on-page optimization, and authority building to earn sustainable organic visibility." },
  { icon: Globe, title: "AI Search Optimization", desc: "Optimize your brand for AI-powered search engines, LLM citations, and generative answer panels." },
  { icon: Megaphone, title: "Google Ads", desc: "Data-driven Google Ads campaigns — search, display, shopping, and performance max with real-time optimization." },
  { icon: Share2, title: "Meta Ads", desc: "Strategic Facebook and Instagram advertising with advanced targeting, creative testing, and retargeting." },
  { icon: TrendingUp, title: "Digital Marketing", desc: "Integrated digital marketing strategies that align SEO, paid media, content, and analytics into one growth engine." },
  { icon: FileText, title: "Content Strategy", desc: "Content planning, creation, and distribution strategies that attract, educate, and convert your target audience." },
  { icon: Target, title: "Lead Generation", desc: "Multi-channel lead generation systems that fill your pipeline with qualified prospects on autopilot." },
  { icon: Layout, title: "Landing Pages", desc: "High-converting landing pages built with persuasive copy, clean design, and conversion-focused UX." },
  { icon: MousePointerClick, title: "CRO", desc: "Conversion rate optimization through A/B testing, user behavior analysis, and data-backed UX improvements." },
  { icon: BarChart3, title: "Analytics", desc: "Comprehensive analytics setup, dashboards, and reporting that turn raw data into actionable growth insights." },
  { icon: Activity, title: "Conversion Tracking", desc: "Pixel-perfect conversion tracking across all channels — from first click to closed deal." },
];

export default function DigitalGrowth() {
  return (
    <>
      <Seo
        title="Digital Growth | ZHS AI Agency"
        description="Data-driven digital growth strategies — SEO, AI search optimization, Google Ads, Meta Ads, content strategy, CRO, and analytics. We build growth engines, not just campaigns."
        path="/digital-growth"
      />

      <PageHero
        eyebrow="Digital Growth"
        heading="Build A Growth Engine, Not Just A Marketing Campaign."
        subheading="We architect data-driven growth systems that compound over time — combining SEO, paid media, content, and analytics into a single engine that drives measurable business outcomes."
      />

      {/* Disclaimer */}
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl -mb-4">
            <div className="flex items-start gap-3 rounded-xl border dark:border-zhs-border dark:bg-zhs-dark-2/60 border-slate-200 bg-slate-50 px-5 py-4 text-sm dark:text-zhs-muted text-slate-500">
              <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5 dark:text-zhs-amber text-amber-500" />
              <p>
                <strong className="dark:text-zhs-text text-slate-700">Important:</strong> We do not guarantee specific rankings, revenue, or advertising results. Outcomes vary based on market conditions, competition, budget, and implementation. All strategies are based on industry best practices and data-driven methodologies.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Visual Funnel */}
      <SectionWrapper id="funnel" className="dark:bg-zhs-dark bg-slate-50">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">The Growth Funnel</p>
            <h2 className="section-heading">Every Stage, Optimized.</h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              A true growth engine optimizes every stage of the funnel — not just the top. We build systems that drive measurable results from first impression to repeat purchase.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {funnelStages.map((stage, i) => (
              <ScrollReveal key={stage.label} delay={i * 100} direction="left">
                <div className="flex items-center gap-5">
                  {/* Funnel bar */}
                  <div className={`${stage.width} transition-all duration-500`}>
                    <div className={`flex items-center gap-4 rounded-xl ${stage.color}/10 border border-transparent px-5 py-4 transition-all duration-300 hover:border-current/20`}>
                      <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${stage.color}/20`}>
                        <stage.icon className={`h-5 w-5 ${stage.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold dark:text-zhs-white text-slate-900">{stage.label}</h3>
                        <p className="text-sm dark:text-zhs-muted text-slate-500 truncate">{stage.desc}</p>
                      </div>
                      {/* Width indicator */}
                      <div className={`hidden sm:block h-2 rounded-full ${stage.color} opacity-40`} style={{ width: stage.width }} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services Grid */}
      <SectionWrapper id="services" className="dark:bg-zhs-black bg-white">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">What We Deliver</p>
            <h2 className="section-heading">Full-Spectrum Growth Services.</h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              From organic search to paid acquisition — every service is designed to work together as part of a unified growth system.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 50}>
              <div className="card-premium group h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-all duration-300 group-hover:bg-zhs-accent/20 group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold dark:text-zhs-white text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed dark:text-zhs-muted text-slate-500">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Approach Section */}
      <SectionWrapper id="approach" className="dark:bg-zhs-dark bg-slate-50">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <div className="card-premium relative overflow-hidden">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-zhs-cyan/5 blur-[80px]" />
              <div className="relative">
                <p className="section-label mb-4">Our Approach</p>
                <h3 className="text-2xl font-bold dark:text-zhs-white text-slate-900">Data-Driven, Not Guesswork.</h3>
                <p className="mt-4 dark:text-zhs-muted text-slate-500 leading-relaxed max-w-2xl">
                  Every decision we make is backed by data. We combine advanced analytics, AI-powered insights, and years of growth expertise to build strategies that compound — not campaigns that fade.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                  {[
                    { num: "100%", label: "Transparent Reporting", desc: "Real-time dashboards with metrics that matter to your business" },
                    { num: "0", label: "Long-Term Contracts", desc: "We earn your business every month through results, not lock-ins" },
                    { num: "24/7", label: "Campaign Monitoring", desc: "Automated alerts and proactive optimization around the clock" },
                  ].map((item, i) => (
                    <ScrollReveal key={item.label} delay={i * 100}>
                      <div className="text-center sm:text-left">
                        <span className="text-3xl font-bold gradient-text">{item.num}</span>
                        <h4 className="mt-2 font-semibold dark:text-zhs-white text-slate-900">{item.label}</h4>
                        <p className="mt-1 text-sm dark:text-zhs-muted text-slate-500">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
                <div className="mt-8">
                  <Link to="/contact" className="btn-primary">
                    Get Your Growth Audit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <CtaSection
        heading="Ready to Build Your Growth Engine?"
        subheading="Let's audit your current marketing stack and identify the highest-leverage opportunities for sustainable, data-driven growth."
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}

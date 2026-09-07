import { Compass, Eye, PenTool, Layout, Share2, Clapperboard, Film, Sparkles, Video } from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";

const services = [
  { icon: Compass, title: "Brand Strategy", desc: "Research-driven brand positioning, messaging frameworks, and competitive differentiation strategies." },
  { icon: PenTool, title: "Logo Design", desc: "Distinctive logo systems designed for versatility across digital, print, and motion applications." },
  { icon: Eye, title: "Visual Identity", desc: "Complete visual language systems — typography, color, imagery, and design principles that scale." },
  { icon: Layout, title: "Graphic Design", desc: "Marketing materials, presentations, infographics, and editorial design that communicates clearly." },
  { icon: Layout, title: "UI Design", desc: "Pixel-perfect interfaces with design systems, component libraries, and interaction specifications." },
  { icon: Share2, title: "Social Media Design", desc: "Platform-native creative assets optimized for engagement across Instagram, LinkedIn, TikTok, and X." },
  { icon: Clapperboard, title: "Motion Design", desc: "Animated brand experiences, product animations, and micro-interactions that captivate attention." },
  { icon: Film, title: "Video Editing", desc: "Professional post-production — color grading, sound design, transitions, and narrative pacing." },
  { icon: Sparkles, title: "AI Commercials", desc: "AI-generated and AI-enhanced commercial content that scales production without sacrificing quality." },
  { icon: Video, title: "Product Videos", desc: "Product demos, explainer videos, and showcase reels that drive understanding and conversions." },
];

const creativeProcess = [
  {
    phase: "Phase 1",
    title: "Concept & Direction",
    items: ["Brand Audit", "Moodboarding", "Visual Research", "Creative Brief"],
    color: "from-zhs-accent/20 to-zhs-violet/10",
    accent: "bg-zhs-accent",
  },
  {
    phase: "Phase 2",
    title: "Design & Development",
    items: ["Visual Identity", "Design Systems", "Asset Creation", "Prototyping"],
    color: "from-zhs-cyan/20 to-zhs-blue/10",
    accent: "bg-zhs-cyan",
  },
  {
    phase: "Phase 3",
    title: "Production & Delivery",
    items: ["Motion & Animation", "Video Production", "File Preparation", "Brand Guidelines"],
    color: "from-zhs-emerald/20 to-zhs-cyan/10",
    accent: "bg-zhs-emerald",
  },
];

const visualSystem = [
  { label: "Color Theory", value: "Emotion-driven palettes that build recognition", width: "w-full" },
  { label: "Typography", value: "Type hierarchies that guide the eye and reinforce voice", width: "w-[88%]" },
  { label: "Imagery", value: "Photography and illustration styles that feel cohesive", width: "w-[76%]" },
  { label: "Composition", value: "Grid systems and layouts that create visual rhythm", width: "w-[92%]" },
  { label: "Motion", value: "Animation language that adds personality and guides interaction", width: "w-[68%]" },
];

export default function Creative() {
  return (
    <>
      <Seo
        title="Creative | ZHS AI Agency"
        description="Creative design and branding from ZHS AI Agency — brand strategy, visual identity, UI design, motion design, video production, and AI-powered creative content."
        path="/creative"
      />

      <PageHero
        eyebrow="Creative"
        heading="Technology Gets Attention. Creative Makes People Care."
        subheading="We craft visual identities, design systems, and creative content that transform how people see, feel, and interact with your brand."
      />

      {/* Services Grid */}
      <SectionWrapper id="services" className="dark:bg-zhs-black bg-white">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">What We Create</p>
            <h2 className="section-heading">Design That Drives Results.</h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              From brand identity to AI-powered content — we produce creative assets that capture attention and communicate with precision.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 50}>
              <div className="card-premium group h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-all duration-300 group-hover:bg-zhs-accent/20 group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold dark:text-zhs-white text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed dark:text-zhs-muted text-slate-500">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Creative Process */}
      <SectionWrapper id="process" className="dark:bg-zhs-dark bg-slate-50">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Process</p>
            <h2 className="section-heading">From Concept to Visual Reality.</h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              Every creative project follows a structured process — ensuring consistency, quality, and alignment with your brand vision.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {creativeProcess.map((phase, i) => (
            <ScrollReveal key={phase.phase} delay={i * 120}>
              <div className="relative overflow-hidden rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2/80 border-slate-200 bg-white p-8 h-full">
                {/* Gradient corner accent */}
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${phase.color} blur-2xl`} />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`h-2.5 w-2.5 rounded-full ${phase.accent}`} />
                    <span className="text-xs font-semibold uppercase tracking-widest dark:text-zhs-muted text-slate-500">{phase.phase}</span>
                  </div>

                  <h3 className="text-xl font-bold dark:text-zhs-white text-slate-900 mb-5">{phase.title}</h3>

                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm dark:text-zhs-text text-slate-600">
                        <div className={`h-1 w-1 rounded-full ${phase.accent} opacity-60`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Visual System */}
      <SectionWrapper id="visual-system" className="dark:bg-zhs-black bg-white">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Visual System</p>
            <h2 className="section-heading">The Pillars of Great Design.</h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              Great creative work isn't accidental — it's built on a foundation of design principles that work together to create lasting impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl space-y-6">
          {visualSystem.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 80}>
              <div className="group">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold dark:text-zhs-white text-slate-900">{item.label}</h4>
                  <span className="text-xs dark:text-zhs-muted text-slate-400">{item.value}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full dark:bg-zhs-dark-3 bg-slate-100">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-zhs-accent to-zhs-cyan transition-all duration-700 ease-out ${item.width}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Design principles */}
        <ScrollReveal delay={300}>
          <div className="mt-20 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Consistency", desc: "Every touchpoint feels like part of the same story — unified, intentional, unmistakable." },
              { title: "Clarity", desc: "Complex ideas distilled into visual communication that anyone can understand in seconds." },
              { title: "Craft", desc: "Obsessive attention to detail — from kerning to color theory, nothing is left to chance." },
            ].map((principle, i) => (
              <div key={principle.title} className="text-center p-6">
                <div className="mx-auto mb-4 h-12 w-12 rounded-xl bg-zhs-accent/10 flex items-center justify-center">
                  <span className="text-lg font-bold gradient-text">{i + 1}</span>
                </div>
                <h4 className="text-lg font-semibold dark:text-zhs-white text-slate-900">{principle.title}</h4>
                <p className="mt-2 text-sm dark:text-zhs-muted text-slate-500 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <CtaSection
        heading="Ready to Elevate Your Brand?"
        subheading="Whether you're building from scratch or refining an existing identity — we create the visual experiences that make people stop, look, and remember."
      />
    </>
  );
}

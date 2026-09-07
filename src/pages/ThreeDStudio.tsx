import { PenTool, Eye, Lightbulb, Printer, Rotate3d, Cuboid, Scan, Layers, Move3d, Shapes, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/animations/ScrollReveal";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";

const pipelineSteps = [
  { icon: Lightbulb, label: "Concept", desc: "Ideation & Sketching" },
  { icon: Cuboid, label: "3D Model", desc: "Digital Sculpting" },
  { icon: Eye, label: "Visualization", desc: "Photorealistic Renders" },
  { icon: Layers, label: "Prototype", desc: "Functional Testing" },
  { icon: Printer, label: "3D Print", desc: "Physical Production" },
];

const services = [
  { icon: Cuboid, title: "3D Modeling", desc: "Detailed digital models from scratch or scans — optimized for animation, visualization, or manufacturing." },
  { icon: PenTool, title: "CAD Design", desc: "Precision engineering drawings and parametric models for industrial and mechanical applications." },
  { icon: Shapes, title: "Product Design", desc: "End-to-end product design from concept sketches to production-ready 3D assets and documentation." },
  { icon: Eye, title: "Rendering", desc: "Photorealistic and stylized rendering that brings products and environments to life before production." },
  { icon: Scan, title: "Visualization", desc: "Interactive 3D visualizations, configurators, and virtual showrooms for immersive product experiences." },
  { icon: Move3d, title: "Animation", desc: "Product animations, explainer sequences, and cinematic 3D motion graphics for marketing and training." },
  { icon: Layers, title: "Prototyping", desc: "Rapid functional prototypes from digital models — bridging the gap between design and production." },
  { icon: Printer, title: "3D Printing", desc: "Production-grade additive manufacturing across FDM, SLA, SLS, and metal printing technologies." },
];

const applications = [
  {
    title: "Product Visualization",
    desc: "Photorealistic product renders for e-commerce, catalogs, and marketing campaigns — no physical sample required.",
    color: "bg-zhs-accent",
  },
  {
    title: "Architectural Rendering",
    desc: "Photorealistic interior and exterior renders that help architects and developers present designs with impact.",
    color: "bg-zhs-cyan",
  },
  {
    title: "Industrial Design",
    desc: "Precision CAD models and engineering visualizations for manufacturing, assembly, and quality control.",
    color: "bg-zhs-emerald",
  },
  {
    title: "Medical & Scientific",
    desc: "Anatomical models, medical device prototypes, and scientific visualizations for research and education.",
    color: "bg-zhs-violet",
  },
  {
    title: "Fashion & Jewelry",
    desc: "Detailed 3D models and renders for fashion accessories, jewelry, and wearable product lines.",
    color: "bg-zhs-amber",
  },
  {
    title: "Entertainment & Gaming",
    desc: "Character modeling, environment design, and asset creation for games, films, and interactive media.",
    color: "bg-zhs-rose",
  },
];

export default function ThreeDStudio() {
  return (
    <>
      <Seo
        title="3D Studio | ZHS AI Agency"
        description="Full-service 3D design studio — 3D modeling, CAD, rendering, animation, prototyping, and 3D printing. From concept to physical production, we bring your ideas to life."
        path="/3d-studio"
      />

      <PageHero
        eyebrow="3D Studio"
        heading="Imagine It. Design It. Build It."
        subheading="We bring ideas to life through precision 3D design, photorealistic visualization, and rapid prototyping — transforming concepts into tangible, production-ready assets."
      />

      {/* Pipeline Visualization */}
      <SectionWrapper id="pipeline" className="dark:bg-zhs-dark bg-slate-50">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Pipeline</p>
            <h2 className="section-heading">From Sketch to Physical Reality.</h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              A streamlined production pipeline that takes your idea through every stage of 3D creation — from initial concept to finished physical product.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-4xl">
          {/* Desktop pipeline */}
          <div className="hidden md:flex items-start justify-between">
            {pipelineSteps.map((step, i) => (
              <ScrollReveal key={step.label} delay={i * 120} className="flex-1">
                <div className="flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className="relative">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2 border-slate-200 bg-white transition-all duration-300 hover:dark:border-zhs-accent/50 hover:dark:glow-sm hover:border-indigo-300">
                      <step.icon className="h-8 w-8 dark:text-zhs-accent text-indigo-500" />
                    </div>
                    {i < pipelineSteps.length - 1 && (
                      <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2">
                        <ArrowRight className="h-5 w-5 dark:text-zhs-muted text-slate-400" />
                      </div>
                    )}
                  </div>
                  {/* Label */}
                  <h3 className="mt-5 text-base font-semibold dark:text-zhs-white text-slate-900">{step.label}</h3>
                  <p className="mt-1 text-sm dark:text-zhs-muted text-slate-500">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile pipeline */}
          <div className="md:hidden space-y-4">
            {pipelineSteps.map((step, i) => (
              <ScrollReveal key={step.label} delay={i * 80}>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border dark:border-zhs-border dark:bg-zhs-dark-2 border-slate-200 bg-white">
                    <step.icon className="h-6 w-6 dark:text-zhs-accent text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold dark:text-zhs-white text-slate-900">{step.label}</h3>
                    <p className="text-sm dark:text-zhs-muted text-slate-500">{step.desc}</p>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <div className="ml-auto">
                      <ArrowRight className="h-4 w-4 dark:text-zhs-muted text-slate-400 rotate-90" />
                    </div>
                  )}
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
            <p className="section-label mb-4">What We Do</p>
            <h2 className="section-heading">Full-Spectrum 3D Services.</h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              From initial concept sketches to production-grade physical models — we handle every stage of the 3D creation workflow.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Applications / Use Cases */}
      <SectionWrapper id="applications" className="dark:bg-zhs-dark bg-slate-50">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Applications</p>
            <h2 className="section-heading">Industries We Serve.</h2>
            <p className="section-subheading mx-auto mt-4 max-w-2xl">
              Our 3D expertise spans across industries — delivering tailored solutions that solve real-world design and production challenges.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((app, i) => (
            <ScrollReveal key={app.title} delay={i * 80}>
              <div className="card-premium group relative overflow-hidden h-full">
                {/* Color accent bar */}
                <div className={`absolute top-0 left-0 h-1 w-full ${app.color} opacity-60 transition-opacity duration-300 group-hover:opacity-100`} />
                <h3 className="text-lg font-semibold dark:text-zhs-white text-slate-900 mt-2">{app.title}</h3>
                <p className="mt-2 text-sm leading-relaxed dark:text-zhs-muted text-slate-500">{app.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* 3D Print Feature */}
      <SectionWrapper id="printing" className="dark:bg-zhs-black bg-white">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <div className="card-premium relative overflow-hidden">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-zhs-accent/5 blur-[80px]" />
              <div className="relative grid gap-10 md:grid-cols-2 items-center">
                <div>
                  <p className="section-label mb-4">3D Printing</p>
                  <h3 className="text-2xl font-bold dark:text-zhs-white text-slate-900">From Digital to Physical in Hours.</h3>
                  <p className="mt-4 dark:text-zhs-muted text-slate-500 leading-relaxed">
                    Our in-house 3D printing lab supports FDM, SLA, SLS, and metal printing — delivering production-grade prototypes and end-use parts with rapid turnaround.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["FDM, SLA, SLS & Metal Printing", "Multi-Material & Full-Color Options", "Tolerances Down to ±0.05mm", "Same-Day & Next-Day Production"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm dark:text-zhs-text text-slate-700">
                        <div className="h-1.5 w-1.5 rounded-full bg-zhs-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary mt-8">
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="flex h-48 w-48 items-center justify-center rounded-3xl border dark:border-zhs-border dark:bg-zhs-dark-2 border-slate-200 bg-slate-50">
                      <Printer className="h-20 w-20 dark:text-zhs-accent/30 text-indigo-300" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2 border-slate-200 bg-white">
                      <Cuboid className="h-7 w-7 dark:text-zhs-cyan text-cyan-500" />
                    </div>
                    <div className="absolute -left-4 -top-4 flex h-14 w-14 items-center justify-center rounded-2xl border dark:border-zhs-border dark:bg-zhs-dark-2 border-slate-200 bg-white">
                      <Rotate3d className="h-6 w-6 dark:text-zhs-emerald text-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <CtaSection
        heading="Ready to Bring Your Vision to Life?"
        subheading="Whether you need a single prototype or a full production run — our 3D studio team is ready to transform your ideas into reality."
      />
    </>
  );
}

import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";

const flowNodes = [
  { label: "Business", x: 50, y: 15, size: "lg" as const },
  { label: "AI", x: 30, y: 38, size: "md" as const, accent: true },
  { label: "Automation", x: 70, y: 38, size: "md" as const, accent: true },
  { label: "Software", x: 20, y: 62, size: "sm" as const },
  { label: "Data", x: 50, y: 62, size: "md" as const, accent: true },
  { label: "Growth", x: 80, y: 62, size: "sm" as const },
];

const connections = [
  { from: 0, to: 1 }, { from: 0, to: 2 },
  { from: 1, to: 3 }, { from: 1, to: 4 },
  { from: 2, to: 4 }, { from: 2, to: 5 },
  { from: 4, to: 3 }, { from: 4, to: 5 },
];

const sizeMap = { lg: "w-20 h-20", md: "w-16 h-16", sm: "w-14 h-14" };

function HeroVisual() {
  return (
    <div className="relative h-[320px] w-full sm:h-[400px] lg:h-[480px]" aria-hidden="true">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 80">
        {connections.map((c, i) => (
          <line
            key={i}
            x1={flowNodes[c.from].x}
            y1={flowNodes[c.from].y}
            x2={flowNodes[c.to].x}
            y2={flowNodes[c.to].y}
            stroke="url(#lineGrad)"
            strokeWidth="0.3"
            strokeDasharray="4 4"
            className="origin-center"
            style={{
              animation: `line-draw 3s ease-out ${i * 0.2}s forwards`,
              strokeDasharray: 200,
              strokeDashoffset: 200,
            }}
          />
        ))}
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
      {flowNodes.map((node, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className={`rounded-xl flex items-center justify-center text-xs font-semibold transition-all ${
              sizeMap[node.size]
            } ${
              node.accent
                ? "dark:bg-zhs-accent/15 bg-indigo-50 border border-zhs-accent/30 dark:text-zhs-accent-2 text-zhs-accent"
                : "dark:bg-zhs-dark-3 bg-slate-100 dark:border-zhs-border border-slate-200 dark:text-zhs-muted text-slate-500"
            }`}
            style={{
              animation: `node-pulse 3s ease-in-out ${i * 0.5}s infinite`,
            }}
          >
            {node.label}
          </div>
        </div>
      ))}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-zhs-accent/5 blur-3xl" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-18">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-zhs-accent/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-zhs-cyan/5 blur-[120px]" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2/60 bg-white/80 px-4 py-1.5 text-xs font-medium dark:text-zhs-muted text-slate-500 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 dark:text-zhs-accent text-zhs-accent" />
                AI &bull; Automation &bull; Technology &bull; Creative
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight dark:text-zhs-white text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Build Smarter.
                <br />
                <span className="gradient-text">Automate Faster.</span>
                <br />
                Grow Better.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed dark:text-zhs-muted text-slate-500">
                ZHS AI Agency builds intelligent AI systems, automation workflows,
                digital products, creative experiences and growth solutions for
                modern businesses.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/ai-automation" className="btn-secondary">
                  Explore Our Solutions
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} direction="right">
            <HeroVisual />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

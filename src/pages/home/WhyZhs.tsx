import { Cpu, Layers, Target, Scale, Users, Handshake } from "lucide-react";
import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

const reasons = [
  { icon: Cpu, title: "AI-First", description: "Every solution starts with AI at its core, not as an afterthought." },
  { icon: Layers, title: "End-to-End", description: "Strategy, design, development, deployment — one team, one vision." },
  { icon: Target, title: "Business-Driven", description: "Technology that serves business outcomes, not the other way around." },
  { icon: Scale, title: "Scalable", description: "Systems built to grow from startup to enterprise without rebuilding." },
  { icon: Users, title: "Human + AI", description: "The best results come from combining human insight with AI capability." },
  { icon: Handshake, title: "Long-Term Partnership", description: "We build relationships, not just projects. Your success is our success." },
];

export default function WhyZhs() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-zhs-dark-2 dark:via-zhs-dark dark:to-zhs-dark-2 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zhs-accent/3 blur-[150px]" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why ZHS"
            heading="Why Businesses Choose ZHS"
            subheading="We combine technical depth with business understanding to deliver systems that actually work."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 80}>
              <div className="group card-premium h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-colors group-hover:bg-zhs-accent/20">
                  <reason.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold dark:text-zhs-white text-slate-900">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed dark:text-zhs-muted text-slate-500">{reason.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

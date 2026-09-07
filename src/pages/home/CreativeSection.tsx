import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

const creativeServices = [
  { name: "Brand Strategy", desc: "Positioning, messaging, market fit" },
  { name: "Logo & Visual Identity", desc: "Marks, systems, guidelines" },
  { name: "Graphic Design", desc: "Marketing, print, digital assets" },
  { name: "UI Design", desc: "Web, app, dashboard interfaces" },
  { name: "Motion Design", desc: "Animation, transitions, video" },
  { name: "Video Editing", desc: "Commercials, product, social" },
  { name: "AI Commercials", desc: "AI-generated visual content" },
  { name: "Product Videos", desc: "Demos, explainers, launches" },
];

export default function CreativeSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-zhs-dark dark:via-zhs-dark-2 dark:to-zhs-dark bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-zhs-violet/5 blur-[100px]" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Creative"
            heading="Technology Gets Attention. Creative Makes People Care."
            subheading="From brand identity to AI-powered content, we create the visual systems that make businesses stand out."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {creativeServices.map((service, i) => (
            <ScrollReveal key={service.name} delay={i * 60}>
              <div className="group relative overflow-hidden rounded-2xl dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2/60 bg-white p-5 transition-all duration-300 hover:border-zhs-accent/20 dark:hover:bg-zhs-dark-3/60 hover:bg-slate-50">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-zhs-accent/5 transition-transform duration-500 group-hover:scale-150" />
                <h3 className="relative text-sm font-semibold dark:text-zhs-white text-slate-900">{service.name}</h3>
                <p className="relative mt-1 text-xs dark:text-zhs-muted text-slate-500">{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-12 text-center">
            <Link to="/creative" className="btn-secondary">
              Explore Creative
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

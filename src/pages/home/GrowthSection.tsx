import { ArrowRight } from "lucide-react";
import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

const funnel = [
  { label: "SEO", color: "bg-zhs-blue" },
  { label: "Content", color: "bg-zhs-violet" },
  { label: "Traffic", color: "bg-zhs-cyan" },
  { label: "Leads", color: "bg-zhs-accent" },
  { label: "Conversion", color: "bg-zhs-emerald" },
  { label: "Revenue", color: "bg-zhs-amber" },
];

const services = [
  "SEO", "AI Search Optimization", "Google Ads", "Meta Ads",
  "Digital Marketing", "Content Strategy", "Lead Generation",
  "Landing Pages", "CRO", "Analytics", "Conversion Tracking",
];

export default function GrowthSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-zhs-dark-2 dark:via-zhs-dark dark:to-zhs-dark-2 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Digital Growth"
            heading="Build A Growth Engine. Not Just A Marketing Campaign."
            subheading="Data-driven strategies that compound over time, turning traffic into revenue."
          />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mx-auto mt-14 max-w-2xl">
            <div className="space-y-3">
              {funnel.map((item, i) => {
                const width = 100 - i * 10;
                return (
                  <div key={item.label} className="flex items-center gap-4" style={{ animationDelay: `${i * 100}ms` }}>
                    <div
                      className="flex items-center rounded-xl dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2/60 bg-white/80 px-4 py-3 transition-all duration-300 hover:border-zhs-accent/20"
                      style={{ width: `${width}%` }}
                    >
                      <div className={`mr-3 h-2 w-2 rounded-full ${item.color}`} />
                      <span className="text-sm font-medium dark:text-zhs-text text-slate-700">{item.label}</span>
                      {i < funnel.length - 1 && (
                        <ArrowRight className="ml-auto h-3.5 w-3.5 dark:text-zhs-muted/50 text-slate-400" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {services.map((s, i) => (
            <ScrollReveal key={s} delay={i * 40}>
              <div className="rounded-lg dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2/50 bg-white px-3 py-2 text-center text-sm font-medium dark:text-zhs-text text-slate-700 transition-all hover:border-zhs-border-light dark:hover:text-zhs-white hover:text-slate-900">
                {s}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

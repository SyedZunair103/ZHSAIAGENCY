import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

const layers = [
  { label: "Frontend", color: "bg-zhs-blue" },
  { label: "Backend", color: "bg-zhs-violet" },
  { label: "Database", color: "bg-zhs-emerald" },
  { label: "APIs", color: "bg-zhs-cyan" },
  { label: "AI Layer", color: "bg-zhs-accent" },
  { label: "Automation", color: "bg-zhs-amber" },
  { label: "Cloud", color: "bg-zhs-rose" },
];

const services = [
  "Web Development", "SaaS", "Web Apps", "Mobile Apps",
  "Custom Software", "APIs", "Backend", "Databases",
  "Dashboards", "E-commerce", "Cloud", "Integrations",
];

export default function TechnologySection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <ScrollReveal>
              <SectionHeading
                eyebrow="Technology"
                heading="Technology Designed Around Your Business."
                subheading="Full-stack engineering from frontend to cloud, built to scale with your business."
                centered={false}
              />
            </ScrollReveal>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {services.map((s, i) => (
                <ScrollReveal key={s} delay={i * 40}>
                  <div className="rounded-lg dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2/50 bg-white px-3 py-2 text-center text-sm font-medium dark:text-zhs-text text-slate-700 transition-all hover:border-zhs-border-light dark:hover:text-zhs-white hover:text-slate-900">
                    {s}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={200} direction="right">
            <div className="relative">
              <div className="space-y-3">
                {layers.map((layer, i) => (
                  <div
                    key={layer.label}
                    className="flex items-center gap-4 rounded-xl dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2/60 bg-white/80 px-5 py-3 transition-all duration-300 hover:border-zhs-border-light"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className={`h-2.5 w-2.5 rounded-full ${layer.color}`} />
                    <span className="text-sm font-medium dark:text-zhs-text text-slate-700">{layer.label}</span>
                    <div className="ml-auto h-px flex-1 bg-gradient-to-r from-zhs-border to-transparent" />
                  </div>
                ))}
              </div>
              <div className="absolute -inset-8 -z-10 rounded-3xl bg-zhs-accent/3 blur-3xl" />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

const pipeline = [
  { step: "Concept", desc: "Idea & research" },
  { step: "3D Model", desc: "Digital sculpting" },
  { step: "Visualization", desc: "Render & light" },
  { step: "Prototype", desc: "Test & refine" },
  { step: "3D Print", desc: "Physical output" },
];

const services = [
  "3D Modeling", "CAD", "Product Design", "Rendering",
  "Visualization", "Animation", "Prototyping", "3D Printing",
];

export default function ThreeDSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="3D Studio"
            heading="Imagine It. Design It. Build It."
            subheading="From concept to physical reality, our 3D studio brings ideas to life with precision and creativity."
          />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
            {pipeline.map((item, i) => (
              <div key={item.step} className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-3">
                <div className="group relative flex h-16 w-16 items-center justify-center rounded-2xl dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2 bg-white transition-all duration-300 hover:border-zhs-cyan/40 hover:glow-sm">
                  <span className="text-xs font-bold text-zhs-cyan">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="sm:text-center">
                  <p className="text-sm font-semibold dark:text-zhs-white text-slate-900">{item.step}</p>
                  <p className="text-xs dark:text-zhs-muted text-slate-500">{item.desc}</p>
                </div>
                {i < pipeline.length - 1 && (
                  <div className="hidden h-px w-8 bg-gradient-to-r from-zhs-border to-transparent sm:block" />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {services.map((s, i) => (
            <ScrollReveal key={s} delay={i * 50}>
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

import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "We learn your business, goals, challenges, and opportunities to define the right strategy.",
  },
  {
    num: "02",
    title: "Design",
    description: "We design the system architecture, user experience, and technical approach before writing code.",
  },
  {
    num: "03",
    title: "Build",
    description: "We develop, test, and refine using agile sprints with regular check-ins and demos.",
  },
  {
    num: "04",
    title: "Launch",
    description: "We deploy, monitor, and ensure everything works perfectly in production from day one.",
  },
  {
    num: "05",
    title: "Optimize",
    description: "We measure performance, gather feedback, and continuously improve the system over time.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Process"
            heading="From Problem To Production."
            subheading="A proven five-step process that turns business challenges into production-ready systems."
          />
        </ScrollReveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 80}>
              <div className="group relative text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2 bg-white transition-all duration-300 group-hover:border-zhs-accent/40 group-hover:glow-sm">
                  <span className="text-sm font-bold text-zhs-accent">{step.num}</span>
                </div>
                <h3 className="text-base font-semibold dark:text-zhs-white text-slate-900">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed dark:text-zhs-muted text-slate-500">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+32px)] top-7 hidden h-px w-[calc(100%-64px)] bg-gradient-to-r from-zhs-border to-transparent lg:block" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

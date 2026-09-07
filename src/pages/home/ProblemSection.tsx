import { AlertTriangle, Link2, Clock, Users } from "lucide-react";
import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

const problems = [
  {
    icon: Clock,
    title: "Too Much Manual Work",
    description: "Your team spends hours on repetitive tasks that should be automated, draining productivity and morale.",
  },
  {
    icon: Link2,
    title: "Disconnected Systems",
    description: "Tools that don't talk to each other. Data trapped in silos. Workflows that break at every handoff.",
  },
  {
    icon: AlertTriangle,
    title: "Slow Growth",
    description: "Processes that can't scale. Bottlenecks that compound. Growth that stalls because operations can't keep up.",
  },
  {
    icon: Users,
    title: "Fragmented Customer Experience",
    description: "Inconsistent touchpoints. Lost leads. Customers falling through the cracks of a broken system.",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32">
      <Container>
        <ScrollReveal>
          <SectionHeading
            heading="Your Business Doesn't Need More Tools."
            subheading="It Needs Better Systems."
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, i) => (
            <ScrollReveal key={problem.title} delay={i * 80}>
              <div className="card-premium group h-full">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent transition-colors group-hover:bg-zhs-accent/20">
                  <problem.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold dark:text-zhs-white text-slate-900">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed dark:text-zhs-muted text-slate-500">{problem.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 text-center">
            <p className="text-2xl font-bold tracking-tight dark:text-zhs-white text-slate-900 sm:text-3xl">
              We Build The System Behind The Business.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

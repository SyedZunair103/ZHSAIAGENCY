import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

const industries = [
  "E-commerce", "SaaS", "Healthcare", "Real Estate",
  "Finance", "Education", "Professional Services",
  "Manufacturing", "Retail", "Technology", "Startups",
];

export default function IndustriesSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-zhs-dark dark:via-zhs-dark-2 dark:to-zhs-dark bg-gradient-to-b from-white via-slate-50 to-white" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Industries"
            heading="Built For Your Industry."
            subheading="We deliver specialized AI and technology solutions across key industries."
          />
        </ScrollReveal>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind} delay={i * 50}>
              <div className="group rounded-xl dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-2/50 bg-white px-4 py-3 text-center text-sm font-medium dark:text-zhs-text text-slate-700 transition-all duration-300 hover:border-zhs-accent/30 hover:bg-zhs-accent/5 dark:hover:text-zhs-white hover:text-slate-900">
                {ind}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

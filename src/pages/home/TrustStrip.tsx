import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";

const capabilities = [
  "AI Engineering",
  "Automation",
  "Software",
  "Creative",
  "3D",
  "Growth",
];

export default function TrustStrip() {
  return (
    <section className="relative border-t border-b dark:border-zhs-border border-slate-200 dark:bg-zhs-dark/50 bg-white/80 py-8">
      <Container>
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="text-sm font-medium tracking-wider dark:text-zhs-muted/70 text-slate-400 uppercase"
              >
                {cap}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

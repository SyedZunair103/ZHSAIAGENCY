import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";

export default function FinalCta() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-zhs-dark dark:via-zhs-dark-2 dark:to-zhs-black bg-gradient-to-b from-white via-slate-50 to-slate-100" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-zhs-accent/5 blur-[120px]" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight dark:text-zhs-white text-slate-900 sm:text-4xl md:text-5xl">
              What&apos;s Your Next Big Idea?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg dark:text-zhs-muted text-slate-500">
              Tell us what you want to build, automate or grow.
              We&apos;ll help you turn the idea into a practical execution plan.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

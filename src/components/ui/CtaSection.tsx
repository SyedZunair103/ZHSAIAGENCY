import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import Container from "./Container";

interface CtaSectionProps {
  heading?: string;
  subheading?: string;
}

export default function CtaSection({
  heading = "Ready to Get Started?",
  subheading = "Let's discuss how we can help you build smarter, automate faster, and grow better.",
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-dark dark:via-zhs-dark-2 dark:to-zhs-black from-slate-50 via-white to-slate-50" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-zhs-accent/5 blur-[120px]" />
      <Container className="relative z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-heading">{heading}</h2>
            <p className="section-subheading mx-auto mt-6 max-w-xl">{subheading}</p>
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

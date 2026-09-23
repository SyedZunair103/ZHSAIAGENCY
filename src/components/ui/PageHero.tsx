import type { ReactNode } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import Container from "./Container";

interface PageHeroProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, heading, subheading, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-8 pt-28 md:pt-36 md:pb-12">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-zhs-accent/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-zhs-cyan/5 blur-[100px]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zhs-accent/30 to-transparent" />
      <Container className="relative z-10">
        <ScrollReveal>
          {eyebrow && <p className="section-label mb-4">{eyebrow}</p>}
          <h1 className="section-heading max-w-4xl">{heading}</h1>
          {subheading && (
            <p className="section-subheading mt-6 max-w-2xl">{subheading}</p>
          )}
          {children}
        </ScrollReveal>
      </Container>
    </section>
  );
}

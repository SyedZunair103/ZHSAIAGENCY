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
    <section className="relative overflow-hidden pb-10 pt-32 md:pt-40 md:pb-14">
      <div className="absolute inset-0 grid-pattern opacity-8" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-zhs-accent/8 blur-[130px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-zhs-cyan/6 blur-[110px]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zhs-accent/35 to-transparent" aria-hidden="true" />
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

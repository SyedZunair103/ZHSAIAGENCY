import { type ReactNode } from "react";
import Container from "../ui/Container";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
  className?: string;
  headingClass?: string;
  children?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  centered = true,
  className = "",
  headingClass = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && <p className="section-label mb-4">{eyebrow}</p>}
      <h2 className={`section-heading ${headingClass}`}>{heading}</h2>
      {subheading && (
        <p className={`section-subheading ${centered ? "mx-auto" : ""} max-w-3xl`}>
          {subheading}
        </p>
      )}
    </div>
  );
}

export function SectionWrapper({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-20 md:py-28 lg:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

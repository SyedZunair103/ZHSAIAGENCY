import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

const caseStudies = [
  { title: "AI Customer Support System", category: "AI Automation", status: "Coming Soon" },
  { title: "Automated Lead Qualification", category: "Automation", status: "Coming Soon" },
  { title: "SaaS Product Development", category: "Technology", status: "Coming Soon" },
  { title: "3D Product Visualization", category: "3D Studio", status: "Coming Soon" },
  { title: "Brand & Growth System", category: "Creative + Growth", status: "Coming Soon" },
];

export default function CaseStudiesPreview() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Case Studies"
            heading="What We Build."
            subheading="Real projects showcasing our capabilities across AI, technology, and creative."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.title} delay={i * 60}>
              <div className="group card-premium h-full">
                <div className="flex h-32 items-center justify-center rounded-xl border border-dashed dark:border-zhs-border border-slate-200 dark:bg-zhs-dark-3/50 bg-slate-50">
                  <span className="text-xs dark:text-zhs-muted/60 text-slate-400">{cs.status}</span>
                </div>
                <div className="mt-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zhs-accent/80">
                    {cs.category}
                  </span>
                  <h3 className="mt-1 text-base font-semibold dark:text-zhs-white text-slate-900">{cs.title}</h3>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs dark:text-zhs-muted text-slate-500 transition-colors group-hover:text-zhs-accent">
                  <span>View Details</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12 text-center">
            <Link to="/case-studies" className="btn-secondary">
              View All Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";
import { solutionsData, solutionDetails } from "../config/site";

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const solution = solutionsData.find((s) => s.slug === slug);
  const detail = slug ? solutionDetails[slug] : undefined;

  if (!solution) {
    return (
      <>
        <Seo title="Solution Not Found | ZHS AI Agency" description="The requested solution could not be found." path={`/solutions/${slug}`} />
        <PageHero eyebrow="Solution Not Found" heading="Solution Not Found." subheading="The solution you're looking for doesn't exist or has been moved." />
        <Container className="py-20">
          <div className="text-center">
            <p className="dark:text-zhs-muted text-slate-500 mb-6">Explore all ZHS solutions instead.</p>
            <Link to="/solutions" className="btn-primary">
              View All Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <Seo
        title={`${solution.title} | ZHS AI Agency`}
        description={solution.description}
        path={`/solutions/${solution.slug}`}
      />

      <PageHero
        eyebrow="Solution"
        heading={solution.title}
        subheading={solution.description}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/free-ai-audit" className="btn-primary">
            Get Free AI Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn-secondary">
            Talk to Our Team
          </Link>
        </div>
      </PageHero>

      {detail && (
        <>
          <SectionWrapper id="challenge" className="dark:bg-zhs-dark-2 bg-slate-50">
            <Container>
              <ScrollReveal>
                <div className="mx-auto max-w-3xl text-center">
                  <p className="section-label mb-4">The Business Problem</p>
                  <h2 className="section-heading">Why This Matters.</h2>
                  <p className="section-subheading mx-auto mt-6">{detail.challenge}</p>
                </div>
              </ScrollReveal>
            </Container>
          </SectionWrapper>

          <SectionWrapper id="approach" className="dark:bg-zhs-black bg-white">
            <Container>
              <ScrollReveal>
                <div className="text-center mb-14">
                  <p className="section-label mb-4">How ZHS Solves It</p>
                  <h2 className="section-heading">Our Approach.</h2>
                </div>
              </ScrollReveal>
              <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
                {detail.approach.map((step, i) => (
                  <ScrollReveal key={step} delay={i * 80}>
                    <div className="card-premium flex h-full items-start gap-3 p-6">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zhs-accent/10 text-xs font-bold text-zhs-accent">
                        {i + 1}
                      </span>
                      <span className="dark:text-zhs-text text-slate-700 text-sm leading-relaxed">{step}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </Container>
          </SectionWrapper>

          <SectionWrapper id="outcomes" className="dark:bg-zhs-dark bg-slate-50">
            <Container>
              <ScrollReveal>
                <div className="text-center mb-14">
                  <p className="section-label mb-4">Business Outcomes</p>
                  <h2 className="section-heading">What Changes.</h2>
                  <p className="section-subheading mx-auto mt-4 max-w-2xl">
                    Outcome-focused by design. We measure what changed — not just what we built.
                  </p>
                </div>
              </ScrollReveal>
              <div className="mx-auto flex max-w-3xl flex-col gap-3">
                {detail.outcomes.map((outcome, i) => (
                  <ScrollReveal key={outcome} delay={i * 80}>
                    <div className="card-premium flex items-center gap-3 p-5">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-zhs-emerald" />
                      <span className="dark:text-zhs-text text-slate-700 text-sm">{outcome}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal delay={300}>
                <div className="mt-10 text-center">
                  <Link to={detail.pillar.path} className="btn-secondary">
                    Explore {detail.pillar.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </Container>
          </SectionWrapper>
        </>
      )}

      <CtaSection
        heading="Ready to Find Out Where AI Can Improve Your Business?"
        subheading="Tell us about this challenge in your business — we'll help you identify the right approach."
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}

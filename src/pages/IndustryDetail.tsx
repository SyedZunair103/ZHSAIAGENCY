import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";
import { industriesData } from "../config/site";

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const industry = industriesData.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <>
        <Seo title="Industry Not Found | ZHS AI Agency" description="The requested industry could not be found." path={`/industries/${slug}`} />
        <PageHero eyebrow="Industry Not Found" heading="Industry Not Found." subheading="The industry you're looking for doesn't exist or hasn't been published yet." />
        <Container className="py-20">
          <div className="text-center">
            <p className="dark:text-zhs-muted text-slate-500 mb-6">We couldn't find the industry page you're looking for.</p>
            <Link to="/industries" className="btn-primary">
              View All Industries
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
        title={`${industry.title} | ZHS AI Agency`}
        description={industry.description}
        path={`/industries/${industry.slug}`}
      />

      <PageHero
        eyebrow="Industries"
        heading={industry.title}
        subheading={industry.description}
      />

      <SectionWrapper id="challenges" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          <ScrollReveal>
            <h2 className="section-heading mb-8">Industry Challenges</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {industry.challenges.map((challenge, i) => (
                <ScrollReveal key={challenge} delay={i * 80}>
                  <div className="card-premium flex items-start gap-3 p-6">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zhs-rose/10 text-xs font-bold text-zhs-rose">
                      {i + 1}
                    </span>
                    <span className="dark:text-zhs-text text-slate-700 text-sm">{challenge}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="solutions" className="dark:bg-zhs-dark bg-slate-50">
        <Container>
          <ScrollReveal>
            <h2 className="section-heading mb-8">How ZHS Can Help</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {industry.solutions.map((solution, i) => (
                <ScrollReveal key={solution} delay={i * 80}>
                  <div className="card-premium flex items-start gap-3 p-6">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zhs-accent/10 text-xs font-bold text-zhs-accent">
                      {i + 1}
                    </span>
                    <span className="dark:text-zhs-text text-slate-700 text-sm">{solution}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="services" className="dark:bg-zhs-black bg-white">
        <Container>
          <ScrollReveal>
            <h2 className="section-heading mb-8">Relevant ZHS Services</h2>
            <div className="flex flex-wrap gap-3">
              {industry.services.map((service) => (
                <Link
                  key={service}
                  to="/solutions"
                  className="rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 dark:border-zhs-border dark:text-zhs-muted dark:hover:text-zhs-white dark:hover:border-zhs-border-light border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                >
                  {service}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="outcomes" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          <ScrollReveal>
            <h2 className="section-heading mb-8">Expected Business Outcomes</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {industry.outcomes.map((outcome, i) => (
                <ScrollReveal key={outcome} delay={i * 80}>
                  <div className="card-premium flex items-start gap-3 p-6">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zhs-emerald/10 text-xs font-bold text-zhs-emerald">
                      {i + 1}
                    </span>
                    <span className="dark:text-zhs-text text-slate-700 text-sm">{outcome}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      <CtaSection
        heading="Ready to Transform Your Business?"
        subheading={`Let's discuss how ZHS can help ${industry.title.toLowerCase()} businesses automate, grow, and scale.`}
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}
import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Wrench, Target } from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";
import { useCaseStudies, type CaseStudy } from "../hooks/useCaseStudies";

function toArray(val: string[] | unknown): string[] {
  if (Array.isArray(val)) return val as string[];
  if (typeof val === "string") {
    try {
      const parsed = JSON.parse(val);
      if (Array.isArray(parsed)) return parsed;
    } catch { /* not JSON */ }
  }
  return [];
}

export default function WorksDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data: caseStudies, isLoading } = useCaseStudies();

  const published = useMemo(
    () => caseStudies.filter((c) => c.is_published),
    [caseStudies]
  );
  const work = useMemo(
    () => published.find((c) => c.slug === slug) ?? null,
    [published, slug]
  );
  const related = useMemo(
    () =>
      work
        ? published
            .filter((c) => c.slug !== work.slug)
            .sort((a, b) => {
              const aSame = a.category === work.category ? 0 : 1;
              const bSame = b.category === work.category ? 0 : 1;
              return aSame - bSame || a.display_order - b.display_order;
            })
            .slice(0, 3)
        : [],
    [published, work]
  );

  if (isLoading) {
    return (
      <div className="py-20">
        <Container>
          <div className="h-8 w-48 animate-pulse rounded bg-slate-200 dark:bg-zhs-dark-3" />
        </Container>
      </div>
    );
  }

  if (!work) {
    return (
      <>
        <Seo title="Work Not Found | ZHS AI Agency" description="The requested work could not be found." path={`/works/${slug}`} />
        <PageHero eyebrow="Work Not Found" heading="Project Not Found." subheading="The work you're looking for doesn't exist or hasn't been published yet." />
        <Container className="py-20">
          <div className="text-center">
            <p className="dark:text-zhs-muted text-slate-500 mb-6">We couldn't find the project you're looking for.</p>
            <Link to="/works" className="btn-primary">
              View All Works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </>
    );
  }

  const capabilities = toArray(work.capabilities);
  const techStack = toArray(work.tech_stack);
  const overview = work.business_application || work.subtitle;

  return (
    <>
      <Seo
        title={`${work.title} | ZHS AI Agency`}
        description={work.subtitle}
        path={`/works/${work.slug}`}
      />

      <PageHero
        eyebrow="Works"
        heading={work.title}
        subheading={work.subtitle}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-zhs-accent/10 px-3 py-1 text-xs font-semibold text-zhs-accent">
            {work.category}
          </span>
          <span className="rounded-full border dark:border-zhs-border border-slate-200 px-3 py-1 text-xs font-medium dark:text-zhs-muted text-slate-500">
            Case Study
          </span>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/free-ai-audit" className="btn-primary">
            Get Free AI Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      {/* 1. Overview */}
      <SectionWrapper id="overview" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          <ScrollReveal>
            <p className="section-label mb-4">Overview</p>
            <h2 className="section-heading mb-6">The Project at a Glance.</h2>
            <p className="dark:text-zhs-muted text-slate-500 text-lg leading-relaxed max-w-3xl">
              {overview}
            </p>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* 2. Business Challenge */}
      <SectionWrapper id="challenge" className="dark:bg-zhs-black bg-white">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <p className="section-label mb-4">Business Challenge</p>
              <h2 className="section-heading mb-6">What Was Costing the Business.</h2>
              <p className="dark:text-zhs-muted text-slate-500 text-lg leading-relaxed">
                {work.challenge}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      {/* 3. What We Changed + 4. Solution */}
      <SectionWrapper id="changed" className="dark:bg-zhs-dark bg-slate-50">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="card-premium h-full p-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold dark:text-zhs-white text-slate-900 mb-3">What We Changed</h3>
                <p className="dark:text-zhs-muted text-slate-500 leading-relaxed">
                  {work.solution}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="card-premium h-full p-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-zhs-emerald/10 text-zhs-emerald">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold dark:text-zhs-white text-slate-900 mb-3">Solution</h3>
                <p className="dark:text-zhs-muted text-slate-500 leading-relaxed mb-4">
                  The system, process, and technology implemented to address the challenge:
                </p>
                {capabilities.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {capabilities.map((cap) => (
                      <span key={cap} className="rounded-full border px-3 py-1.5 text-xs dark:border-zhs-border dark:text-zhs-muted border-slate-200 text-slate-600">
                        {cap}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. Implementation */}
      <SectionWrapper id="implementation" className="dark:bg-zhs-black bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Implementation</p>
              <h2 className="section-heading">How We Delivered.</h2>
              <p className="section-subheading mx-auto mt-4 max-w-2xl">
                Every ZHS project follows our process — discover, audit, strategize, build, launch, optimize — with human oversight at each step.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {["Discover", "Audit", "Strategize", "Build", "Launch", "Optimize"].map((step, i) => (
              <ScrollReveal key={step} delay={i * 60}>
                <div className="card-premium text-center p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zhs-accent/10 text-sm font-bold text-zhs-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-sm font-bold dark:text-zhs-white text-slate-900">{step}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. Business Outcome + 7. Measured Impact */}
      <SectionWrapper id="outcome" className="dark:bg-zhs-dark-2 bg-slate-50">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="section-label mb-4">Business Outcome</p>
              <h2 className="section-heading">We Measure What Changed — Not Just What We Built.</h2>
              <p className="section-subheading mx-auto mt-4 max-w-2xl">
                The focus is always on the business outcome, not just the technical delivery.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-3xl space-y-4">
            <ScrollReveal delay={100}>
              <div className="card-premium p-7">
                <div className="mb-3 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-zhs-emerald" />
                  <h3 className="font-bold dark:text-zhs-white text-slate-900">Outcome</h3>
                </div>
                <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">
                  {work.subtitle}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="card-premium p-7">
                <h3 className="font-bold dark:text-zhs-white text-slate-900 mb-3">Measured Impact</h3>
                <p className="dark:text-zhs-muted text-slate-500 text-sm leading-relaxed">
                  We report verified metrics when they are available for a project. When verified data is not published, we keep the focus on qualitative outcomes rather than unverified numbers.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Revenue Growth", "Cost & Efficiency", "Customer Experience", "Sales Performance", "Marketing Performance", "Operational Efficiency"].map((cat) => (
                    <span key={cat} className="rounded-full bg-zhs-accent/10 px-3 py-1 text-[11px] font-semibold text-zhs-accent">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </SectionWrapper>

      {/* 8. Technologies / Capabilities */}
      {(techStack.length > 0 || capabilities.length > 0) && (
        <SectionWrapper id="technologies" className="dark:bg-zhs-black bg-white">
          <Container>
            <ScrollReveal>
              <div className="text-center mb-10">
                <p className="section-label mb-4">Technologies & Capabilities</p>
                <h2 className="section-heading">What Powered the Work.</h2>
              </div>
            </ScrollReveal>
            <div className="mx-auto max-w-3xl space-y-6">
              {techStack.length > 0 && (
                <ScrollReveal>
                  <div className="flex flex-wrap justify-center gap-2">
                    {techStack.map((tech) => (
                      <span key={tech} className="rounded-full bg-zhs-accent/10 px-4 py-2 text-sm font-medium text-zhs-accent">
                        {tech}
                      </span>
                    ))}
                  </div>
                </ScrollReveal>
              )}
              {capabilities.length > 0 && (
                <ScrollReveal delay={100}>
                  <div className="flex flex-wrap justify-center gap-2">
                    {capabilities.map((cap) => (
                      <span key={cap} className="rounded-full border px-4 py-2 text-sm dark:border-zhs-border dark:text-zhs-muted border-slate-200 text-slate-600">
                        {cap}
                      </span>
                    ))}
                  </div>
                </ScrollReveal>
              )}
            </div>
          </Container>
        </SectionWrapper>
      )}

      {/* 9. Related Work */}
      {related.length > 0 && (
        <SectionWrapper id="related" className="dark:bg-zhs-dark bg-slate-50">
          <Container>
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="section-label mb-4">Related Work</p>
                <h2 className="section-heading">Explore More Projects.</h2>
              </div>
            </ScrollReveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r: CaseStudy, i) => (
                <ScrollReveal key={r.slug} delay={i * 80}>
                  <Link to={`/works/${r.slug}`} className="group block h-full">
                    <div className="card-premium h-full p-6 transition-all duration-300 group-hover:-translate-y-1">
                      <span className="rounded-full bg-zhs-accent/10 px-2.5 py-1 text-[11px] font-semibold text-zhs-accent">
                        {r.category}
                      </span>
                      <h3 className="mt-3 font-bold dark:text-zhs-white text-slate-900 group-hover:text-zhs-accent transition-colors">
                        {r.title}
                      </h3>
                      <p className="mt-2 dark:text-zhs-muted text-slate-500 text-sm leading-relaxed line-clamp-2">
                        {r.subtitle}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-zhs-accent transition-all duration-300 group-hover:gap-2">
                        View Work
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </SectionWrapper>
      )}

      {/* 10. CTA */}
      <CtaSection
        heading="Ready to Find Out Where AI Can Improve Your Business?"
        subheading="Let's discuss your challenges and build the right solution."
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}

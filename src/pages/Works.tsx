import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Filter, Layers } from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";
import { useCaseStudies, type CaseStudy } from "../hooks/useCaseStudies";
import {
  WORK_FILTERS,
  matchesFilter,
  categoryBadgeClass,
  categoryCoverStyle,
} from "../lib/worksCategories";

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

export default function Works() {
  const { data: caseStudies, isLoading } = useCaseStudies();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const published = useMemo(
    () => caseStudies.filter((w) => w.is_published),
    [caseStudies]
  );

  const filteredWorks = useMemo(
    () => published.filter((w) => matchesFilter(selectedCategory, w.category)),
    [published, selectedCategory]
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: published.length };
    for (const w of published) {
      for (const filter of WORK_FILTERS) {
        if (filter !== "All" && matchesFilter(filter, w.category)) {
          map[filter] = (map[filter] ?? 0) + 1;
        }
      }
    }
    return map;
  }, [published]);

  const visibleFilters = useMemo(
    () => WORK_FILTERS.filter((f) => f === "All" || (counts[f] ?? 0) > 0 || f === selectedCategory),
    [counts, selectedCategory]
  );

  return (
    <>
      <Seo
        title="Works | ZHS AI Agency"
        description="Explore selected ZHS projects across AI automation, technology, mobile apps, web development, digital growth, creative work, and 3D solutions."
        path="/works"
      />

      <PageHero
        eyebrow="Works"
        heading="Work That Solves Real Business Problems."
        subheading="Explore selected ZHS projects across AI automation, technology, mobile apps, web development, digital growth, creative work, and 3D solutions."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/free-ai-audit" className="btn-primary">
            Get Free AI Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <SectionWrapper id="filters" className="dark:bg-zhs-dark-2 bg-slate-50 !py-10">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex shrink-0 items-center gap-2">
                <Filter className="h-4 w-4 dark:text-zhs-muted text-slate-500" />
                <span className="text-sm dark:text-zhs-muted text-slate-500">
                  Filter by category
                  {!isLoading && (
                    <span className="ml-2 text-zhs-accent">
                      {filteredWorks.length} {filteredWorks.length === 1 ? "project" : "projects"}
                    </span>
                  )}
                </span>
              </div>
              <div
                className="flex flex-1 flex-wrap gap-2 sm:justify-end"
                role="group"
                aria-label="Filter works by category"
              >
                {visibleFilters.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    aria-pressed={selectedCategory === cat}
                    className={`min-h-10 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zhs-accent ${
                      selectedCategory === cat
                        ? "bg-zhs-accent text-white shadow-lg shadow-zhs-accent/20"
                        : "dark:border-zhs-border dark:bg-zhs-dark-2 dark:text-zhs-muted dark:hover:text-zhs-white border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                    {counts[cat] !== undefined && counts[cat] > 0 && (
                      <span
                        className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                          selectedCategory === cat
                            ? "bg-white/20 text-white"
                            : "dark:bg-zhs-dark-3 dark:text-zhs-muted bg-slate-100 text-slate-500"
                        }`}
                      >
                        {counts[cat]}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="works" className="dark:bg-zhs-black bg-white">
        <Container>
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="card-premium h-96 animate-pulse bg-slate-200 dark:bg-zhs-dark-3" />
                </ScrollReveal>
              ))}
            </div>
          ) : filteredWorks.length === 0 ? (
            <ScrollReveal>
              <div className="card-premium mx-auto max-w-xl py-16 text-center">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zhs-accent/10 text-zhs-accent">
                  <Layers className="h-5 w-5" />
                </div>
                <p className="dark:text-zhs-muted text-slate-500 text-lg">
                  {published.length === 0
                    ? "New work is on its way. Explore our case studies to see how we approach real business problems."
                    : selectedCategory !== "All"
                      ? `No published projects in ${selectedCategory} yet. Try another category or browse everything.`
                      : "No projects found in this category."}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <button onClick={() => setSelectedCategory("All")} className="btn-secondary">
                    Show All Work
                  </button>
                  <Link to="/case-studies" className="btn-secondary">
                    View Case Studies
                  </Link>
                  <Link to="/free-ai-audit" className="btn-primary">
                    Get Free AI Audit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWorks.map((work: CaseStudy, i) => {
                const techTags = toArray(work.tech_stack).slice(0, 3);
                const cover = categoryCoverStyle(work.category);
                return (
                  <ScrollReveal key={work.slug} delay={i * 80}>
                    <Link to={`/works/${work.slug}`} className="group block h-full">
                      <article className="card-premium group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1">
                        <div
                          className="relative flex h-48 items-center justify-center overflow-hidden"
                          style={cover}
                        >
                          <div
                            className="absolute inset-0 opacity-30"
                            style={{
                              backgroundImage:
                                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 45%)",
                            }}
                          />
                          <div
                            className="absolute inset-0 opacity-20 transition-transform duration-500 group-hover:scale-105"
                            style={{
                              backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                              backgroundSize: "28px 28px",
                            }}
                          />
                          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                            <span className="text-2xl font-bold text-white">
                              {work.title.charAt(0)}
                            </span>
                          </div>
                          <span className="absolute bottom-3 left-3 rounded-full bg-black/25 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                            {work.category}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <div className="mb-3 flex flex-wrap items-center gap-2">
                            <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${categoryBadgeClass(work.category)}`}>
                              {work.category}
                            </span>
                          </div>
                          <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold group-hover:text-zhs-accent transition-colors">
                            {work.title}
                          </h3>
                          {work.challenge && (
                            <p className="mt-3 text-xs font-semibold uppercase tracking-wider dark:text-zhs-accent-2 text-zhs-accent">
                              Challenge
                            </p>
                          )}
                          {work.challenge && (
                            <p className="mt-1 dark:text-zhs-muted text-slate-500 text-sm leading-relaxed line-clamp-2">
                              {work.challenge}
                            </p>
                          )}
                          {work.solution && (
                            <>
                              <p className="mt-3 text-xs font-semibold uppercase tracking-wider dark:text-zhs-emerald text-zhs-emerald">
                                What We Changed
                              </p>
                              <p className="mt-1 dark:text-zhs-muted text-slate-500 text-sm leading-relaxed line-clamp-2 flex-1">
                                {work.solution}
                              </p>
                            </>
                          )}
                          {techTags.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {techTags.map((tech) => (
                                <span key={tech} className="rounded-full bg-zhs-accent/10 px-2 py-0.5 text-[10px] font-medium text-zhs-accent">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-zhs-accent transition-all duration-300 group-hover:gap-2">
                            View Work
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </Container>
      </SectionWrapper>

      <CtaSection
        heading="Ready to Find Out Where AI Can Improve Your Business?"
        subheading="We measure what changed — not just what we built. Let's discuss your challenges and build the right solution."
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}

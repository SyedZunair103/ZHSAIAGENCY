import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import { SectionWrapper } from "../components/ui/SectionHeading";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";
import { useCaseStudies, type CaseStudy } from "../hooks/useCaseStudies";

const categoryFilters = ["All", "AI & Automation", "Web Development", "Mobile Apps", "Technology", "Digital Growth", "Creative", "3D Studio"];

const categoryColors: Record<string, string> = {
  "AI & Automation": "bg-zhs-accent/10 text-zhs-accent",
  "AI Automation": "bg-zhs-accent/10 text-zhs-accent",
  Technology: "bg-zhs-blue/10 text-zhs-blue",
  Creative: "bg-zhs-violet/10 text-zhs-violet",
  "3D Studio": "bg-zhs-cyan/10 text-zhs-cyan",
  "Digital Growth": "bg-zhs-emerald/10 text-zhs-emerald",
  "Mobile Apps": "bg-zhs-rose/10 text-zhs-rose",
  "Mobile App Development": "bg-zhs-rose/10 text-zhs-rose",
  "Web Development": "bg-zhs-amber/10 text-zhs-amber",
};

function matchesFilter(filter: string, category: string): boolean {
  if (filter === "All") return true;
  if (filter === "AI & Automation") {
    return ["AI & Automation", "AI Automation", "Automation"].includes(category);
  }
  if (filter === "Mobile Apps") {
    return ["Mobile Apps", "Mobile App Development"].includes(category);
  }
  if (filter === "Web Development") {
    return ["Web Development", "Web"].includes(category);
  }
  return category === filter;
}

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
                <span className="text-sm dark:text-zhs-muted text-slate-500">Filter by category</span>
              </div>
              <div
                className="flex flex-1 flex-wrap gap-2 sm:justify-end"
                role="group"
                aria-label="Filter works by category"
              >
                {categoryFilters.map((cat) => (
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
              <div className="py-16 text-center">
                <p className="dark:text-zhs-muted text-slate-500 text-lg">
                  {published.length === 0
                    ? "New work is on its way. In the meantime, explore our case studies."
                    : "No projects found in this category."}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <button onClick={() => setSelectedCategory("All")} className="btn-secondary">
                    Show All Work
                  </button>
                  <Link to="/case-studies" className="btn-secondary">
                    View Case Studies
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWorks.map((work: CaseStudy, i) => {
                const techTags = toArray(work.tech_stack).slice(0, 3);
                return (
                  <ScrollReveal key={work.slug} delay={i * 80}>
                    <Link to={`/works/${work.slug}`} className="group block h-full">
                      <article className="card-premium group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1">
                        <div className="flex h-44 items-center justify-center overflow-hidden bg-slate-100 dark:bg-zhs-dark-3">
                          <span className="text-6xl font-bold dark:text-zhs-accent/20 text-slate-300 group-hover:text-zhs-accent/30 transition-colors">
                            {work.title.charAt(0)}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <div className="mb-3 flex flex-wrap items-center gap-2">
                            <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${categoryColors[work.category] ?? "bg-zhs-accent/10 text-zhs-accent"}`}>
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

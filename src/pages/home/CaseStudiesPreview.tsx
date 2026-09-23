import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "../../components/animations/ScrollReveal";
import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import { supabase } from "../../lib/supabase";
import { categoryBadgeClass, categoryCoverStyle } from "../../lib/worksCategories";

interface DbCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  category: string;
}

const fallbackCaseStudies = [
  { title: "AI Customer Support System", category: "AI Automation", status: "Coming Soon", slug: "" },
  { title: "Automated Lead Qualification", category: "Automation", status: "Coming Soon", slug: "" },
  { title: "SaaS Product Development", category: "Technology", status: "Coming Soon", slug: "" },
  { title: "3D Product Visualization", category: "3D Studio", status: "Coming Soon", slug: "" },
  { title: "Brand & Growth System", category: "Creative + Growth", status: "Coming Soon", slug: "" },
];

export default function CaseStudiesPreview() {
  const [caseStudies, setCaseStudies] = useState(fallbackCaseStudies);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      const { data, error } = await supabase
        .from("case_studies")
        .select("id, title, subtitle, slug, category")
        .eq("is_published", true)
        .order("display_order", { ascending: true })
        .limit(6);

      if (error || !data || data.length === 0) {
        setCaseStudies(fallbackCaseStudies);
      } else {
        const mapped = data.map((cs: DbCaseStudy) => ({
          title: cs.title,
          category: cs.category,
          status: "View Details",
          slug: cs.slug,
        }));
        setCaseStudies(mapped);
      }
      setIsLoading(false);
    };

    fetchCaseStudies();
  }, []);

  return (
    <section className="relative py-20 md:py-28 lg:py-32">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Works"
            heading="Work That Solves Real Business Problems."
            subheading="Selected projects across AI automation, technology, mobile apps, creative, and growth."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(isLoading ? fallbackCaseStudies : caseStudies).map((cs, i) => {
            const cover = categoryCoverStyle(cs.category);
            const inner = (
              <>
                <div
                  className="relative flex h-36 items-center justify-center overflow-hidden rounded-xl"
                  style={cover}
                >
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 45%)",
                    }}
                  />
                  <span className="relative z-10 rounded-full bg-black/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {cs.status}
                  </span>
                </div>
                <div className="mt-4">
                  <span className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold ${categoryBadgeClass(cs.category)}`}>
                    {cs.category}
                  </span>
                  <h3 className="mt-2 text-base font-semibold dark:text-zhs-white text-slate-900">{cs.title}</h3>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs dark:text-zhs-muted text-slate-500 transition-colors group-hover:text-zhs-accent">
                  <span>View Work</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </>
            );
            return (
              <ScrollReveal key={cs.title} delay={i * 60}>
                {cs.slug ? (
                  <Link to={`/works/${cs.slug}`} className="group card-premium block h-full transition-all duration-300 group-hover:-translate-y-1">
                    {inner}
                  </Link>
                ) : (
                  <div className="group card-premium h-full">{inner}</div>
                )}
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12 text-center">
            <Link to="/works" className="btn-secondary">
              View All Works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

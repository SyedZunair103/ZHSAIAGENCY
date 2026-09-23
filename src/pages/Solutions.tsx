import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bot, Code2, Palette, Box, TrendingUp, ArrowRight } from "lucide-react";
import ScrollReveal from "../components/animations/ScrollReveal";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import PageHero from "../components/ui/PageHero";
import CtaSection from "../components/ui/CtaSection";
import Seo from "../components/ui/Seo";
import { supabase } from "../lib/supabase";
import { getIcon } from "../lib/icons";

interface DbService {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  description: string | null;
  icon: string | null;
  display_order: number;
  is_published: boolean;
}

const colorMap: Record<string, { color: string; hoverColor: string }> = {
  "AI Automation": { color: "bg-zhs-accent/10 text-zhs-accent", hoverColor: "group-hover:bg-zhs-accent/20" },
  Technology: { color: "bg-zhs-blue/10 text-zhs-blue", hoverColor: "group-hover:bg-zhs-blue/20" },
  Creative: { color: "bg-zhs-violet/10 text-zhs-violet", hoverColor: "group-hover:bg-zhs-violet/20" },
  "3D Studio": { color: "bg-zhs-cyan/10 text-zhs-cyan", hoverColor: "group-hover:bg-zhs-cyan/20" },
  "Digital Growth": { color: "bg-zhs-emerald/10 text-zhs-emerald", hoverColor: "group-hover:bg-zhs-emerald/20" },
};

const fallbackSolutions = [
  {
    icon: Bot,
    title: "AI Automation",
    path: "/ai-automation",
    description:
      "Intelligent AI agents, chatbots, voice systems, and workflow automation that eliminate manual processes and scale your operations without adding headcount.",
    color: "bg-zhs-accent/10 text-zhs-accent",
    hoverColor: "group-hover:bg-zhs-accent/20",
    tag: "Most Popular",
  },
  {
    icon: Code2,
    title: "Technology",
    path: "/technology",
    description:
      "Custom web applications, SaaS platforms, APIs, and full-stack solutions engineered for performance, scalability, and long-term reliability.",
    color: "bg-zhs-blue/10 text-zhs-blue",
    hoverColor: "group-hover:bg-zhs-blue/20",
    tag: null,
  },
  {
    icon: Palette,
    title: "Creative",
    path: "/creative",
    description:
      "Brand identity, UI/UX design, motion graphics, and creative campaigns that capture attention and communicate your vision with clarity.",
    color: "bg-zhs-violet/10 text-zhs-violet",
    hoverColor: "group-hover:bg-zhs-violet/20",
    tag: null,
  },
  {
    icon: Box,
    title: "3D Studio",
    path: "/3d-studio",
    description:
      "Photorealistic 3D renders, product visualization, architectural walkthroughs, and immersive interactive experiences that bring ideas to life.",
    color: "bg-zhs-cyan/10 text-zhs-cyan",
    hoverColor: "group-hover:bg-zhs-cyan/20",
    tag: "New",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth",
    path: "/digital-growth",
    description:
      "Data-driven marketing, SEO, paid campaigns, conversion optimization, and growth strategies designed to deliver measurable business outcomes.",
    color: "bg-zhs-emerald/10 text-zhs-emerald",
    hoverColor: "group-hover:bg-zhs-emerald/20",
    tag: null,
  },
];

const pathMap: Record<string, string> = {
  "ai-automation": "/ai-automation",
  technology: "/technology",
  creative: "/creative",
  "3d-studio": "/3d-studio",
  "digital-growth": "/digital-growth",
  "mobile-app-development": "/services/mobile-app-development",
};

export default function Solutions() {
  const [solutions, setSolutions] = useState(fallbackSolutions);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from("services")
        .select("id, title, subtitle, slug, description, icon, display_order, is_published")
        .eq("is_published", true)
        .order("display_order", { ascending: true });

      if (error || !data || data.length === 0) {
        setSolutions(fallbackSolutions);
      } else {
        const mapped = data.map((s: DbService, i: number) => {
          const Icon = getIcon(s.icon);
          const colors = colorMap[s.title] ?? {
            color: "bg-zhs-accent/10 text-zhs-accent",
            hoverColor: "group-hover:bg-zhs-accent/20",
          };
          const fallback = fallbackSolutions[i] ?? fallbackSolutions[0];
          return {
            icon: Icon,
            title: s.title,
            path: pathMap[s.slug] ?? `/solutions`,
            description: s.description ?? s.subtitle,
            color: colors.color,
            hoverColor: colors.hoverColor,
            tag: fallback?.tag ?? null,
          };
        });
        setSolutions(mapped);
      }
      setIsLoading(false);
    };

    fetchServices();
  }, []);

  return (
    <>
      <Seo
        title="Solutions | ZHS AI Agency"
        description="Explore the full suite of solutions from ZHS AI Agency — AI automation, technology, creative, 3D studio, and digital growth services built to scale your business."
        path="/solutions"
      />

      <PageHero
        eyebrow="Solutions"
        heading="Everything Your Business Needs to Build, Automate and Grow."
        subheading="Five integrated service pillars, one unified agency. We combine AI, technology, creative, and strategy into solutions that move the needle."
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-zhs-dark dark:via-zhs-dark-2 dark:to-zhs-black from-slate-50 via-white to-slate-50" />
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-zhs-accent/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-60 w-60 rounded-full bg-zhs-cyan/5 blur-[100px]" />

        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Pillars"
              heading="Built Around Your Goals."
              subheading="Each solution pillar is a complete capability — together, they form a growth engine for your business."
            />
          </ScrollReveal>

          {!isLoading ? (
            <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution, i) => {
                const Icon = solution.icon;
                return (
                  <ScrollReveal key={solution.title} delay={i * 80}>
                    <Link to={solution.path} className="group block h-full">
                      <div className="card-premium relative flex h-full flex-col p-8 transition-all duration-300 group-hover:-translate-y-1">
                        {solution.tag && (
                          <span className="absolute right-4 top-4 rounded-full bg-zhs-accent/10 px-3 py-1 text-[11px] font-semibold text-zhs-accent">
                            {solution.tag}
                          </span>
                        )}

                        <div
                          className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${solution.color} ${solution.hoverColor}`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>

                        <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold">{solution.title}</h3>
                        <p className="dark:text-zhs-muted text-slate-500 mt-3 flex-1 text-sm leading-relaxed">
                          {solution.description}
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zhs-accent transition-all duration-300 group-hover:gap-3">
                          Explore
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          ) : (
            <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {fallbackSolutions.map((solution, i) => {
                const Icon = solution.icon;
                return (
                  <ScrollReveal key={solution.path} delay={i * 80}>
                    <Link to={solution.path} className="group block h-full">
                      <div className="card-premium relative flex h-full flex-col p-8 transition-all duration-300 group-hover:-translate-y-1">
                        {solution.tag && (
                          <span className="absolute right-4 top-4 rounded-full bg-zhs-accent/10 px-3 py-1 text-[11px] font-semibold text-zhs-accent">
                            {solution.tag}
                          </span>
                        )}

                        <div
                          className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${solution.color} ${solution.hoverColor}`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>

                        <h3 className="dark:text-zhs-white text-slate-900 text-lg font-bold">{solution.title}</h3>
                        <p className="dark:text-zhs-muted text-slate-500 mt-3 flex-1 text-sm leading-relaxed">
                          {solution.description}
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zhs-accent transition-all duration-300 group-hover:gap-3">
                          Explore
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          )}

          <ScrollReveal delay={500}>
            <div className="mx-auto mt-16 max-w-2xl rounded-2xl dark:border-zhs-border dark:bg-zhs-dark-2/60 border-slate-200 bg-white p-8 text-center backdrop-blur-sm">
              <p className="dark:text-zhs-text text-slate-700 text-sm leading-relaxed">
                Not sure where to start?{" "}
                <Link to="/contact" className="font-semibold text-zhs-accent hover:underline">
                  Talk to our team
                </Link>{" "}
                and we'll help you identify the right solution for your business challenges.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <CtaSection
        heading="Let's Build Something Exceptional."
        subheading="Whether you need a single solution or a full digital transformation, we're ready to help you scale."
        primaryLabel="Get Free AI Audit"
        primaryTo="/free-ai-audit"
      />
    </>
  );
}

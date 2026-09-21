import { useState, useEffect } from "react";
import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import ScrollReveal from "../components/animations/ScrollReveal";
import CtaSection from "../components/ui/CtaSection";
import { supabase } from "../lib/supabase";
import type { BlogPost } from "../hooks/useBlogPosts";

const fallbackCategories = [
  { name: "AI Agents", color: "from-zhs-accent to-zhs-accent-2" },
  { name: "Automation", color: "from-zhs-cyan to-blue-500" },
  { name: "Software", color: "from-zhs-emerald to-teal-500" },
  { name: "Digital Growth", color: "from-zhs-amber to-orange-500" },
  { name: "Creative Technology", color: "from-zhs-violet to-purple-500" },
  { name: "3D Technology", color: "from-zhs-rose to-pink-500" },
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (data && data.length > 0) {
        setPosts(data as BlogPost[]);
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Seo
        title="Blog | ZHS AI Agency"
        description="Practical insights on AI agents, automation, software development, and digital growth from ZHS AI Agency."
        path="/blog"
      />

      <PageHero
        eyebrow="Blog"
        heading="Insights & Knowledge"
        subheading="Practical insights, implementation guides, and strategic perspectives on building with AI, automation, and modern technology."
      />

      {isLoading ? (
        <section className="relative py-20 md:py-28">
          <Container>
            <div className="flex items-center justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-2 dark:border-zhs-border border-slate-200 border-t-zhs-accent" />
            </div>
          </Container>
        </section>
      ) : posts.length > 0 ? (
        <section className="relative py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-4xl space-y-8">
              {posts.map((post, i) => {
                const publishDate = post.published_at
                  ? new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : null;

                return (
                  <ScrollReveal key={post.id} delay={i * 80}>
                    <Link to={`/blog/${post.slug}`} className="block">
                      <article className="card-premium group p-6 transition-all hover:dark:border-zhs-accent/30 hover:border-zhs-accent/20">
                        {publishDate && (
                          <div className="mb-3 flex items-center gap-1.5 text-xs dark:text-zhs-muted text-slate-500">
                            <Clock className="h-3.5 w-3.5" />
                            <time dateTime={post.published_at ?? undefined}>{publishDate}</time>
                          </div>
                        )}
                        <h2 className="mb-2 text-xl font-bold dark:text-zhs-white text-slate-900 group-hover:text-zhs-accent transition-colors">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="mb-4 line-clamp-2 dark:text-zhs-muted text-slate-500">
                            {post.excerpt}
                          </p>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-zhs-accent">
                          Read more
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </article>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </Container>
        </section>
      ) : (
        <>
          <section className="relative py-20 md:py-28">
            <Container>
              <ScrollReveal>
                <div className="mx-auto max-w-3xl text-center">
                  <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl dark:bg-zhs-dark-2 bg-slate-100 dark:border-zhs-border border-slate-200">
                    <BookOpen className="h-10 w-10 dark:text-zhs-accent-2 text-zhs-accent" />
                  </div>
                  <h2 className="section-heading mb-6">Insights Coming Soon</h2>
                  <p className="section-subheading mb-8">
                    We're preparing a library of practical insights and implementation guides to help you
                    understand how AI agents, automation, and modern software can transform your business.
                    From step-by-step automation tutorials to strategic deep dives on digital growth, our
                    content is designed to give you actionable knowledge you can apply immediately.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-6 dark:text-zhs-muted text-slate-500">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 dark:text-zhs-accent text-zhs-accent" />
                      <span className="text-sm">Published regularly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 dark:text-zhs-cyan text-zhs-cyan" />
                      <span className="text-sm">Actionable content</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </Container>
          </section>

          <section className="relative py-20 md:py-28 dark:bg-zhs-dark bg-slate-50">
            <Container>
              <ScrollReveal>
                <h2 className="section-heading text-center mb-4">Topics We Cover</h2>
                <p className="section-subheading text-center mx-auto max-w-2xl mb-12">
                  Our upcoming articles will explore these core areas of expertise.
                </p>
              </ScrollReveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {fallbackCategories.map((category, i) => (
                  <ScrollReveal key={category.name} delay={i * 80}>
                    <div className="card-premium group flex items-center gap-4 p-5">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} text-white`}
                      >
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold dark:text-zhs-white text-slate-900">
                          {category.name}
                        </h3>
                        <p className="text-sm dark:text-zhs-muted text-slate-500">
                          Expert insights & guides
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      <section className="relative py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-heading mb-6">Stay in the Loop</h2>
              <p className="section-subheading mb-10">
                Want to be notified when we publish new content? Reach out to our team and we'll
                keep you updated on our latest insights and resources.
              </p>
              <Link to="/contact" className="btn-primary">
                Talk to Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <CtaSection
        heading="Have a Question?"
        subheading="Our team is ready to help you navigate AI, automation, and digital growth strategies."
      />
    </>
  );
}

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { supabase } from "../lib/supabase";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import ScrollReveal from "../components/animations/ScrollReveal";
import CtaSection from "../components/ui/CtaSection";
import type { BlogPost } from "../hooks/useBlogPosts";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      setIsLoading(false);
      return;
    }

    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .single();

      if (error || !data) {
        setNotFound(true);
      } else {
        setPost(data as BlogPost);
      }
      setIsLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <>
        <Seo title="Loading... | ZHS AI Agency" description="" />
        <PageHero
          eyebrow="Blog"
          heading="Loading..."
          subheading=""
        />
        <section className="relative py-20 md:py-28">
          <Container>
            <div className="flex items-center justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-2 dark:border-zhs-border border-slate-200 border-t-zhs-accent" />
            </div>
          </Container>
        </section>
      </>
    );
  }

  if (notFound || !post) {
    return (
      <>
        <Seo title="Post Not Found | ZHS AI Agency" description="The blog post you're looking for doesn't exist." />
        <PageHero
          eyebrow="Blog"
          heading="Post Not Found"
          subheading="The blog post you're looking for doesn't exist or has been removed."
        />
        <section className="relative py-20 md:py-28">
          <Container>
            <div className="text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-zhs-accent hover:text-zhs-accent-3 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </div>
          </Container>
        </section>
      </>
    );
  }

  const metaTitle = post.meta_title || `${post.title} | ZHS AI Agency`;
  const metaDesc = post.meta_description || post.excerpt || post.title;
  const publishDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <>
      <Seo
        title={metaTitle}
        description={metaDesc}
        path={`/blog/${post.slug}`}
      />

      <PageHero
        eyebrow="Blog"
        heading={post.title}
        subheading={post.excerpt || ""}
      />

      <section className="relative py-20 md:py-28">
        <Container>
          <ScrollReveal>
            <article className="mx-auto max-w-3xl">
              {publishDate && (
                <div className="mb-8 flex items-center gap-2 text-sm dark:text-zhs-muted text-slate-500">
                  <Clock className="h-4 w-4" />
                  <time dateTime={post.published_at ?? undefined}>{publishDate}</time>
                </div>
              )}

              <div className="prose-premium dark:text-zhs-text text-slate-700 whitespace-pre-wrap leading-relaxed">
                {post.content}
              </div>

              <div className="mt-12 border-t dark:border-zhs-border border-slate-200 pt-8">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm text-zhs-accent hover:text-zhs-accent-3 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </div>
            </article>
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

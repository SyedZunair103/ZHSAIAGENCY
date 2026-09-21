import { useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabase";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  meta_title: string | null;
  meta_description: string | null;
  status: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

type BlogPostInsert = Omit<BlogPost, "id" | "created_at" | "updated_at">;
type BlogPostUpdate = Partial<BlogPostInsert>;

export function useBlogPosts() {
  const [data, setData] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const { data: rows, error: err } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (err) {
      setError(err.message);
      setIsLoading(false);
      return;
    }

    setData((rows as BlogPost[]) ?? []);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const create = useCallback(
    async (post: BlogPostInsert): Promise<BlogPost | null> => {
      const { data: row, error: err } = await supabase
        .from("blog_posts")
        .insert(post as never)
        .select()
        .single();

      if (err) throw new Error(err.message);
      await fetchAll();
      return row as BlogPost;
    },
    [fetchAll]
  );

  const update = useCallback(
    async (id: string, updates: BlogPostUpdate): Promise<BlogPost | null> => {
      const { data: row, error: err } = await supabase
        .from("blog_posts")
        .update(updates as never)
        .eq("id", id)
        .select()
        .single();

      if (err) throw new Error(err.message);
      await fetchAll();
      return row as BlogPost;
    },
    [fetchAll]
  );

  const remove = useCallback(
    async (id: string): Promise<void> => {
      const { error: err } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", id);

      if (err) throw new Error(err.message);
      await fetchAll();
    },
    [fetchAll]
  );

  const publish = useCallback(
    async (id: string): Promise<BlogPost | null> => {
      return update(id, {
        status: "published",
        published_at: new Date().toISOString(),
      });
    },
    [update]
  );

  const unpublish = useCallback(
    async (id: string): Promise<BlogPost | null> => {
      return update(id, {
        status: "draft",
        published_at: null,
      });
    },
    [update]
  );

  return {
    data,
    isLoading,
    error,
    create,
    update,
    remove,
    publish,
    unpublish,
    refetch: fetchAll,
  };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

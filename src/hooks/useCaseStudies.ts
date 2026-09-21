import { useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabase";

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  category: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  tech_stack: string[];
  business_application: string | null;
  display_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

type CaseStudyInsert = Omit<CaseStudy, "id" | "created_at" | "updated_at">;
type CaseStudyUpdate = Partial<CaseStudyInsert>;

export function useCaseStudies() {
  const [data, setData] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const { data: rows, error: err } = await supabase
      .from("case_studies")
      .select("*")
      .order("display_order", { ascending: true });

    if (err) {
      setError(err.message);
      setIsLoading(false);
      return;
    }

    setData((rows as CaseStudy[]) ?? []);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const create = useCallback(
    async (item: CaseStudyInsert): Promise<CaseStudy | null> => {
      const { data: row, error: err } = await supabase
        .from("case_studies")
        .insert(item as never)
        .select()
        .single();

      if (err) throw new Error(err.message);
      await fetchAll();
      return row as CaseStudy;
    },
    [fetchAll]
  );

  const update = useCallback(
    async (id: string, updates: CaseStudyUpdate): Promise<CaseStudy | null> => {
      const { data: row, error: err } = await supabase
        .from("case_studies")
        .update(updates as never)
        .eq("id", id)
        .select()
        .single();

      if (err) throw new Error(err.message);
      await fetchAll();
      return row as CaseStudy;
    },
    [fetchAll]
  );

  const remove = useCallback(
    async (id: string): Promise<void> => {
      const { error: err } = await supabase
        .from("case_studies")
        .delete()
        .eq("id", id);

      if (err) throw new Error(err.message);
      await fetchAll();
    },
    [fetchAll]
  );

  return { data, isLoading, error, create, update, remove, refetch: fetchAll };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

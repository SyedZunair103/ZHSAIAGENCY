import { useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabase";

export interface Faq {
  id: string;
  question: string;
  answer: string;
  display_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

type FaqInsert = Omit<Faq, "id" | "created_at" | "updated_at">;
type FaqUpdate = Partial<FaqInsert>;

export function useFaqs() {
  const [data, setData] = useState<Faq[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const { data: rows, error: err } = await supabase
      .from("faqs")
      .select("*")
      .order("display_order", { ascending: true });

    if (err) {
      setError(err.message);
      setIsLoading(false);
      return;
    }

    setData((rows as Faq[]) ?? []);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const create = useCallback(
    async (item: FaqInsert): Promise<Faq | null> => {
      const { data: row, error: err } = await supabase
        .from("faqs")
        .insert(item as never)
        .select()
        .single();

      if (err) throw new Error(err.message);
      await fetchAll();
      return row as Faq;
    },
    [fetchAll]
  );

  const update = useCallback(
    async (id: string, updates: FaqUpdate): Promise<Faq | null> => {
      const { data: row, error: err } = await supabase
        .from("faqs")
        .update(updates as never)
        .eq("id", id)
        .select()
        .single();

      if (err) throw new Error(err.message);
      await fetchAll();
      return row as Faq;
    },
    [fetchAll]
  );

  const remove = useCallback(
    async (id: string): Promise<void> => {
      const { error: err } = await supabase
        .from("faqs")
        .delete()
        .eq("id", id);

      if (err) throw new Error(err.message);
      await fetchAll();
    },
    [fetchAll]
  );

  return { data, isLoading, error, create, update, remove, refetch: fetchAll };
}

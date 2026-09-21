import { useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabase";

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  description: string | null;
  icon: string | null;
  features: Array<{ title: string; description: string }>;
  display_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

type ServiceInsert = Omit<Service, "id" | "created_at" | "updated_at">;
type ServiceUpdate = Partial<ServiceInsert>;

export function useServices() {
  const [data, setData] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const { data: rows, error: err } = await supabase
      .from("services")
      .select("*")
      .order("display_order", { ascending: true });

    if (err) {
      setError(err.message);
      setIsLoading(false);
      return;
    }

    setData((rows as Service[]) ?? []);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const create = useCallback(
    async (service: ServiceInsert): Promise<Service | null> => {
      const { data: row, error: err } = await supabase
        .from("services")
        .insert(service as never)
        .select()
        .single();

      if (err) {
        throw new Error(err.message);
      }

      await fetchServices();
      return row as Service;
    },
    [fetchServices]
  );

  const update = useCallback(
    async (id: string, updates: ServiceUpdate): Promise<Service | null> => {
      const { data: row, error: err } = await supabase
        .from("services")
        .update(updates as never)
        .eq("id", id)
        .select()
        .single();

      if (err) {
        throw new Error(err.message);
      }

      await fetchServices();
      return row as Service;
    },
    [fetchServices]
  );

  const remove = useCallback(
    async (id: string): Promise<void> => {
      const { error: err } = await supabase
        .from("services")
        .delete()
        .eq("id", id);

      if (err) {
        throw new Error(err.message);
      }

      await fetchServices();
    },
    [fetchServices]
  );

  return { data, isLoading, error, create, update, remove, refetch: fetchServices };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

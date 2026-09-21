import { useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabase";

export interface Lead {
  id: string;
  full_name: string;
  email: string;
  company: string | null;
  phone: string | null;
  country: string;
  service: string;
  budget: string | null;
  description: string;
  status: string;
  source: string;
  created_at: string;
  updated_at: string;
}

type LeadUpdate = Partial<Omit<Lead, "id" | "created_at" | "updated_at">>;

export const LEAD_STATUSES = ["new", "contacted", "qualified", "closed"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export function useLeads() {
  const [data, setData] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const { data: rows, error: err } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (err) {
      setError(err.message);
      setIsLoading(false);
      return;
    }

    setData((rows as Lead[]) ?? []);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const update = useCallback(
    async (id: string, updates: LeadUpdate): Promise<Lead | null> => {
      const { data: row, error: err } = await supabase
        .from("leads")
        .update(updates as never)
        .eq("id", id)
        .select()
        .single();

      if (err) throw new Error(err.message);
      await fetchAll();
      return row as Lead;
    },
    [fetchAll]
  );

  const remove = useCallback(
    async (id: string): Promise<void> => {
      const { error: err } = await supabase
        .from("leads")
        .delete()
        .eq("id", id);

      if (err) throw new Error(err.message);
      await fetchAll();
    },
    [fetchAll]
  );

  return { data, isLoading, error, update, remove, refetch: fetchAll };
}

export async function submitLead(lead: {
  full_name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  country: string;
  service: string;
  budget?: string | null;
  description: string;
}): Promise<void> {
  const { error } = await supabase.from("leads").insert({
    full_name: lead.full_name,
    email: lead.email,
    company: lead.company || null,
    phone: lead.phone || null,
    country: lead.country,
    service: lead.service,
    budget: lead.budget || null,
    description: lead.description,
    source: "contact_form",
  } as never);

  if (error) throw new Error(error.message);
}

import { useState, useEffect, useCallback } from "react";
import { supabase } from "../lib/supabase";

export interface SiteSetting {
  key: string;
  value: string;
  description: string | null;
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const { data: rows, error: err } = await supabase
      .from("site_settings")
      .select("key, value, description");

    if (err) {
      setError(err.message);
      setIsLoading(false);
      return;
    }

    const map: Record<string, string> = {};
    if (rows) {
      for (const row of rows as { key: string; value: unknown; description: string | null }[]) {
        const val = row.value;
        map[row.key] = typeof val === "string" ? val : JSON.stringify(val);
      }
    }
    setSettings(map);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const upsert = useCallback(
    async (key: string, value: string, description?: string): Promise<void> => {
      const { error: err } = await supabase.from("site_settings").upsert(
        {
          key,
          value: value,
          description: description ?? null,
        } as never,
        { onConflict: "key" }
      );

      if (err) throw new Error(err.message);
      await fetchAll();
    },
    [fetchAll]
  );

  const get = useCallback(
    (key: string, fallback?: string): string => {
      return settings[key] ?? fallback ?? "";
    },
    [settings]
  );

  return { settings, isLoading, error, upsert, get, refetch: fetchAll };
}

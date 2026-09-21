import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { supabase } from "../lib/supabase";

interface SiteSettingsContextValue {
  settings: Record<string, string>;
  isLoading: boolean;
  get: (key: string, fallback?: string) => string;
}

const SiteSettingsContext = createContext<SiteSettingsContextValue>({
  settings: {},
  isLoading: true,
  get: (_key, fallback) => fallback ?? "",
});

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchSettings = useCallback(async () => {
    const { data: rows } = await supabase
      .from("site_settings")
      .select("key, value");

    if (rows) {
      const map: Record<string, string> = {};
      for (const row of rows as { key: string; value: unknown }[]) {
        const val = row.value;
        map[row.key] = typeof val === "string" ? val : JSON.stringify(val);
      }
      setSettings(map);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  const get = useCallback(
    (key: string, fallback?: string): string => {
      return settings[key] ?? fallback ?? "";
    },
    [settings]
  );

  return (
    <SiteSettingsContext.Provider value={{ settings, isLoading, get }}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettingsContext() {
  return useContext(SiteSettingsContext);
}

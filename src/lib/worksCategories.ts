import type { CSSProperties } from "react";

export const WORK_FILTERS = [
  "All",
  "AI & Automation",
  "Web Development",
  "Mobile Apps",
  "Technology",
  "Digital Growth",
  "Creative",
  "3D Studio",
] as const;

export type WorkFilter = (typeof WORK_FILTERS)[number];

const ALIAS_MAP: Record<string, string[]> = {
  "AI & Automation": [
    "ai & automation",
    "ai automation",
    "automation",
    "ai",
    "ai agents",
    "ai agent",
    "ai automation & agents",
  ],
  "Web Development": [
    "web development",
    "web",
    "website development",
    "websites",
    "web design",
    "frontend",
    "full stack",
  ],
  "Mobile Apps": [
    "mobile apps",
    "mobile app development",
    "mobile app",
    "mobile applications",
    "app development",
    "apps",
  ],
  Technology: ["technology", "tech", "software", "custom software", "saas"],
  "Digital Growth": [
    "digital growth",
    "growth",
    "digital marketing",
    "marketing",
    "seo",
  ],
  Creative: ["creative", "design", "branding", "graphic design", "content"],
  "3D Studio": ["3d studio", "3d", "3d design", "3d visualization", "3d printing"],
};

export function normalizeCategory(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function matchesFilter(filter: string, category: string): boolean {
  if (filter === "All") return true;
  const cat = normalizeCategory(category);
  if (!cat) return false;
  if (cat === normalizeCategory(filter)) return true;
  const aliases = ALIAS_MAP[filter] ?? [];
  return aliases.includes(cat);
}

export function categoryBadgeClass(category: string): string {
  const cat = normalizeCategory(category);
  if (ALIAS_MAP["AI & Automation"].includes(cat)) return "bg-zhs-accent/10 text-zhs-accent";
  if (ALIAS_MAP["Web Development"].includes(cat)) return "bg-zhs-amber/10 text-zhs-amber";
  if (ALIAS_MAP["Mobile Apps"].includes(cat)) return "bg-zhs-rose/10 text-zhs-rose";
  if (ALIAS_MAP.Technology.includes(cat)) return "bg-zhs-blue/10 text-zhs-blue";
  if (ALIAS_MAP["Digital Growth"].includes(cat)) return "bg-zhs-emerald/10 text-zhs-emerald";
  if (ALIAS_MAP.Creative.includes(cat)) return "bg-zhs-violet/10 text-zhs-violet";
  if (ALIAS_MAP["3D Studio"].includes(cat)) return "bg-zhs-cyan/10 text-zhs-cyan";
  return "bg-zhs-accent/10 text-zhs-accent";
}

export function categoryCoverStyle(category: string): CSSProperties {
  const cat = normalizeCategory(category);
  if (ALIAS_MAP["AI & Automation"].includes(cat)) {
    return { background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 55%, #06b6d4 100%)" };
  }
  if (ALIAS_MAP["Web Development"].includes(cat)) {
    return { background: "linear-gradient(135deg, #f59e0b 0%, #f43f5e 100%)" };
  }
  if (ALIAS_MAP["Mobile Apps"].includes(cat)) {
    return { background: "linear-gradient(135deg, #f43f5e 0%, #8b5cf6 100%)" };
  }
  if (ALIAS_MAP.Technology.includes(cat)) {
    return { background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)" };
  }
  if (ALIAS_MAP["Digital Growth"].includes(cat)) {
    return { background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)" };
  }
  if (ALIAS_MAP.Creative.includes(cat)) {
    return { background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)" };
  }
  if (ALIAS_MAP["3D Studio"].includes(cat)) {
    return { background: "linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)" };
  }
  return { background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)" };
}

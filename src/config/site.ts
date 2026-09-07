import type { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  name: "ZHS AI Agency",
  tagline: "Build Smarter. Automate Faster. Grow Better.",
  description:
    "ZHS AI Agency builds intelligent AI systems, automation workflows, digital products, creative experiences and growth solutions for modern businesses.",
  email: "zhsaiagency@gmail.com",
  siteUrl: import.meta.env.VITE_SITE_URL || "",
  navLinks: [
    { label: "Solutions", path: "/solutions" },
    { label: "Technology", path: "/technology" },
    { label: "Creative", path: "/creative" },
    { label: "3D Studio", path: "/3d-studio" },
    { label: "Growth", path: "/digital-growth" },
    { label: "Company", path: "/about" },
  ],
  services: [
    { title: "AI Automation", description: "Intelligent workflow automation powered by artificial intelligence.", path: "/ai-automation", icon: "Bot" },
    { title: "Technology", description: "Custom technology solutions built for scale and performance.", path: "/technology", icon: "Code2" },
    { title: "Creative", description: "Creative design and branding that stands out in the market.", path: "/creative", icon: "Palette" },
    { title: "3D Studio", description: "Immersive 3D experiences and visualization solutions.", path: "/3d-studio", icon: "Box" },
    { title: "Digital Growth", description: "Data-driven strategies for sustainable digital growth.", path: "/digital-growth", icon: "TrendingUp" },
  ],
  socialLinks: {},
};

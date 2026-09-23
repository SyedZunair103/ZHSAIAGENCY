export interface NavLink {
  label: string;
  path: string;
}

export interface NavGroup {
  label: string;
  path?: string;
  items: NavItem[];
}

export interface NavItem {
  label: string;
  path: string;
  items?: NavItem[];
}

export interface ServiceCategory {
  label: string;
  services: Service[];
}

export interface Service {
  title: string;
  description: string;
  path: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  email: string;
  siteUrl: string;
  navGroups: NavGroup[];
  services: Service[];
  socialLinks: Record<string, string>;
}

export interface Industry {
  slug: string;
  title: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  services: string[];
  outcomes: string[];
}

export interface SolutionItem {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

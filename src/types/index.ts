export interface NavLink {
  label: string;
  path: string;
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
  navLinks: NavLink[];
  services: Service[];
  socialLinks: Record<string, string>;
}

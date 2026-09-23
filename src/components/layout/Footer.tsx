import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { useSiteSettingsContext } from "../../context/SiteSettingsContext";
import Container from "../ui/Container";
import Logo from "../brand/Logo";

const footerNav = {
  solutions: [
    { label: "AI Automation", path: "/ai-automation" },
    { label: "Technology", path: "/technology" },
    { label: "Mobile Apps", path: "/services/mobile-app-development" },
    { label: "Digital Growth", path: "/digital-growth" },
    { label: "Creative", path: "/creative" },
    { label: "3D Studio", path: "/3d-studio" },
    { label: "All Solutions", path: "/solutions" },
  ],
  company: [
    { label: "About ZHS", path: "/about-us" },
    { label: "AI-First Company", path: "/about-us/ai-first-company" },
    { label: "Why ZHS", path: "/about-us/why-zhs" },
    { label: "Our Process", path: "/about-us/process" },
    { label: "Our Team", path: "/about-us/team" },
    { label: "Industries", path: "/industries" },
    { label: "Works", path: "/works" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ],
  legal: [
    { label: "Free AI Audit", path: "/free-ai-audit" },
    { label: "FAQs", path: "/faqs" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
  ],
};

export default function Footer() {
  const { get } = useSiteSettingsContext();
  const siteName = get("site_name", "ZHS AI Agency");
  const siteEmail = get("contact_email", "zhsaiagency@gmail.com");
  const siteDescription = get("description", "ZHS AI Agency builds intelligent AI systems, automation workflows, digital products, creative experiences and growth solutions for modern businesses.");

  return (
    <footer className="relative border-t dark:border-zhs-border dark:bg-zhs-black border-slate-200 bg-slate-50">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group" aria-label="ZHS AI Agency Home">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed dark:text-zhs-muted text-slate-500">
              {siteDescription}
            </p>
            <p className="mt-3 text-xs dark:text-zhs-muted/60 text-slate-400">
              AI &bull; Automation &bull; Technology &bull; Creative &bull; Growth
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider dark:text-zhs-white text-slate-900">Solutions</h3>
            <ul className="mt-4 space-y-2.5">
              {footerNav.solutions.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm dark:text-zhs-muted dark:hover:text-zhs-white text-slate-500 hover:text-slate-900 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider dark:text-zhs-white text-slate-900">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {footerNav.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm dark:text-zhs-muted dark:hover:text-zhs-white text-slate-500 hover:text-slate-900 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider dark:text-zhs-white text-slate-900">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {footerNav.legal.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm dark:text-zhs-muted dark:hover:text-zhs-white text-slate-500 hover:text-slate-900 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <a href={`mailto:${siteEmail}`} className="inline-flex items-center gap-2 text-sm dark:text-zhs-muted dark:hover:text-zhs-white text-slate-500 hover:text-slate-900 transition-colors">
                <Mail className="h-4 w-4" />
                {siteEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t dark:border-zhs-border border-slate-200 py-6 text-center text-xs dark:text-zhs-muted/50 text-slate-400">
          &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

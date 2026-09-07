import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { siteConfig } from "../../config/site";
import Container from "../ui/Container";
import Logo from "../brand/Logo";

const footerNav = {
  solutions: [
    { label: "AI Automation", path: "/ai-automation" },
    { label: "Technology", path: "/technology" },
    { label: "Creative", path: "/creative" },
    { label: "3D Studio", path: "/3d-studio" },
    { label: "Digital Growth", path: "/digital-growth" },
  ],
  company: [
    { label: "About", path: "/about" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
    { label: "FAQs", path: "/faqs" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t dark:border-zhs-border dark:bg-zhs-black border-slate-200 bg-slate-50">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group" aria-label="ZHS AI Agency Home">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed dark:text-zhs-muted text-slate-500">
              {siteConfig.description}
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
            <h3 className="text-xs font-semibold uppercase tracking-wider dark:text-zhs-white text-slate-900">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              {footerNav.legal.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm dark:text-zhs-muted dark:hover:text-zhs-white text-slate-500 hover:text-slate-900 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-sm dark:text-zhs-muted dark:hover:text-zhs-white text-slate-500 hover:text-slate-900 transition-colors">
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t dark:border-zhs-border border-slate-200 py-6 text-center text-xs dark:text-zhs-muted/50 text-slate-400">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "../../config/site";
import Container from "../ui/Container";
import Logo from "../brand/Logo";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-lg" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <Container>
          <div className="flex h-18 items-center justify-between lg:h-20">
            <Link to="/" className="flex shrink-0 items-center gap-2 group" aria-label="ZHS AI Agency Home">
              <Logo tagline={false} />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? "dark:text-zhs-white dark:bg-white/5 text-slate-900 bg-slate-100"
                      : "dark:text-zhs-muted dark:hover:text-zhs-white dark:hover:bg-white/5 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <ThemeToggle />
              <Link to="/contact" className="btn-primary text-sm">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                className="inline-flex items-center justify-center rounded-lg p-2 dark:text-zhs-muted dark:hover:text-zhs-white dark:hover:bg-white/5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </Container>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div
        className={`fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto lg:hidden transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="glass-strong min-h-full p-6">
          <div className="flex flex-col gap-2">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? "dark:bg-zhs-accent/10 dark:text-zhs-white bg-indigo-50 text-indigo-700"
                    : "dark:text-zhs-muted dark:hover:bg-white/5 dark:text-zhs-white text-slate-600 hover:bg-slate-100 text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 border-t dark:border-zhs-border border-slate-200 pt-6">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { siteConfig } from "../../config/site";
import type { NavGroup, NavItem } from "../../types";
import Container from "../ui/Container";
import Logo from "../brand/Logo";
import ThemeToggle from "../ui/ThemeToggle";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openMobileKeys, setOpenMobileKeys] = useState<string[]>([]);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    setOpenGroup(null);
    setIsOpen(false);
    setOpenMobileKeys([]);
  }, [location.pathname]);

  useEffect(() => {
    if (!openGroup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenGroup(null);
        buttonRefs.current[openGroup]?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openGroup]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const isActive = (path: string) => location.pathname === path;
  const isGroupActive = (g: NavGroup) =>
    (g.path && isActive(g.path)) ||
    (g.items ?? []).some(
      (it) =>
        (it.path && location.pathname === it.path) ||
        (it.items ?? []).some((sub) => location.pathname === sub.path)
    );

  const toggleGroup = useCallback((label: string) => {
    setOpenGroup((prev) => (prev === label ? null : label));
  }, []);

  const toggleMobileKey = useCallback((key: string) => {
    setOpenMobileKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  }, []);

  const renderDesktopItems = (group: NavGroup) => {
    const items = group.items ?? [];
    const hasNested = items.some((i) => i.items && i.items.length > 0);
    const menuId = `nav-menu-${slug(group.label)}`;
    return (
      <div key={group.label} className="relative">
        <button
          ref={(el) => { buttonRefs.current[group.label] = el; }}
          onClick={() => toggleGroup(group.label)}
          onMouseEnter={() => setOpenGroup(group.label)}
          id={`nav-btn-${slug(group.label)}`}
          className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zhs-accent ${
            isGroupActive(group) || openGroup === group.label
              ? "dark:text-zhs-white dark:bg-white/5 text-slate-900 bg-slate-100"
              : "dark:text-zhs-muted dark:hover:text-zhs-white dark:hover:bg-white/5 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
          aria-expanded={openGroup === group.label}
          aria-haspopup="true"
          aria-controls={openGroup === group.label ? menuId : undefined}
        >
          {group.label}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openGroup === group.label ? "rotate-180" : ""}`} />
        </button>

        {openGroup === group.label && (
          <div
            id={menuId}
            role="menu"
            aria-labelledby={`nav-btn-${slug(group.label)}`}
            onMouseEnter={() => setOpenGroup(group.label)}
            className={`absolute top-full z-50 mt-1 rounded-2xl border p-6 shadow-xl backdrop-blur-xl dark:border-zhs-border dark:bg-zhs-dark-2/95 border-slate-200 bg-white ${
              hasNested
                ? "left-0 w-[min(760px,calc(100vw-2rem))]"
                : "left-1/2 w-[min(480px,calc(100vw-2rem))] -translate-x-1/2"
            }`}
          >
            <div className={hasNested ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-1"}>
              {items.map((item) =>
                item.items && item.items.length > 0 ? (
                  <div key={item.label}>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider dark:text-zhs-accent-2 text-zhs-accent">
                      {item.label}
                    </h4>
                    <ul className="space-y-1">
                      {item.items.map((sub: NavItem) => (
                        <li key={sub.label}>
                          <Link
                            to={sub.path}
                            role="menuitem"
                            className={`block rounded-lg px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zhs-accent dark:hover:text-zhs-white dark:hover:bg-white/5 ${
                              isActive(sub.path)
                                ? "dark:text-zhs-white text-slate-900 bg-slate-100 dark:bg-white/5"
                                : "dark:text-zhs-muted text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                            }`}
                            onClick={() => setOpenGroup(null)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    role="menuitem"
                    className={`block rounded-lg px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zhs-accent dark:hover:text-zhs-white dark:hover:bg-white/5 ${
                      isActive(item.path)
                        ? "dark:text-zhs-white text-slate-900 bg-slate-100 dark:bg-white/5"
                        : "dark:text-zhs-muted text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                    onClick={() => setOpenGroup(null)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderMobileGroup = (group: NavGroup) => {
    const items = group.items ?? [];
    const groupKey = `g:${group.label}`;
    const groupOpen = openMobileKeys.includes(groupKey);
    if (items.length === 0) {
      return (
        <Link
          key={group.label}
          to={group.path ?? "/"}
          onClick={() => setIsOpen(false)}
          className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zhs-accent ${
            isActive(group.path ?? "")
              ? "dark:bg-zhs-accent/10 dark:text-zhs-white bg-indigo-50 text-indigo-700"
              : "dark:text-zhs-muted dark:hover:bg-white/5 dark:hover:text-zhs-white text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          {group.label}
        </Link>
      );
    }
    return (
      <div key={group.label}>
        <button
          onClick={() => toggleMobileKey(groupKey)}
          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zhs-accent dark:text-zhs-muted dark:hover:text-zhs-white dark:hover:bg-white/5 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          aria-expanded={groupOpen}
          aria-controls={`m-${slug(group.label)}`}
        >
          <span>{group.label}</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${groupOpen ? "rotate-180" : ""}`} />
        </button>
        {groupOpen && (
          <div id={`m-${slug(group.label)}`} className="mt-1 space-y-1 border-t pb-2 pl-2 dark:border-zhs-border border-slate-200">
            {group.path && (
              <Link
                to={group.path}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-zhs-accent transition-colors"
              >
                View all {group.label.toLowerCase()} →
              </Link>
            )}
            {items.map((item) => {
              if (item.items && item.items.length > 0) {
                const subKey = `${groupKey}:${item.label}`;
                const subOpen = openMobileKeys.includes(subKey);
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => toggleMobileKey(subKey)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zhs-accent dark:text-zhs-white dark:hover:bg-white/5 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      aria-expanded={subOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${subOpen ? "rotate-180" : ""}`} />
                    </button>
                    {subOpen && (
                      <div className="ml-3 flex flex-col gap-0.5 border-l pl-2 dark:border-zhs-border border-slate-200">
                        {item.items.map((sub: NavItem) => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className={`rounded-lg px-4 py-2.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zhs-accent dark:hover:text-zhs-white dark:hover:bg-white/5 ${
                              isActive(sub.path)
                                ? "dark:text-zhs-white text-slate-900 bg-slate-100 dark:bg-white/5"
                                : "dark:text-zhs-muted text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-4 py-2.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zhs-accent dark:hover:text-zhs-white dark:hover:bg-white/5 ${
                    isActive(item.path)
                      ? "dark:text-zhs-white text-slate-900 bg-slate-100 dark:bg-white/5"
                      : "dark:text-zhs-muted text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isOpen
            ? "glass-strong"
            : "bg-transparent border-b border-transparent"
        }`}
        aria-label="Main navigation"
      >
        <Container>
          <div className="flex h-20 items-center justify-between lg:h-[88px]">
            <Link to="/" className="flex shrink-0 items-center gap-2 group" aria-label="ZHS AI Agency Home">
              <Logo tagline={false} />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {siteConfig.navGroups.map((group) =>
                group.items && group.items.length > 0
                  ? renderDesktopItems(group)
                  : (
                    <Link
                      key={group.label}
                      to={group.path ?? "/"}
                      className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zhs-accent ${
                        isActive(group.path ?? "")
                          ? "dark:text-zhs-white dark:bg-white/5 text-slate-900 bg-slate-100"
                          : "dark:text-zhs-muted dark:hover:text-zhs-white dark:hover:bg-white/5 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      {group.label}
                    </Link>
                  )
              )}
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <ThemeToggle />
              <Link to="/free-ai-audit" className="btn-primary text-sm">
                Get Free AI Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                className="inline-flex items-center justify-center rounded-lg p-2 dark:text-zhs-muted dark:hover:text-zhs-white dark:hover:bg-white/5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zhs-accent"
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
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
        id="mobile-menu"
        className={`fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto overscroll-contain lg:hidden transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="glass-strong min-h-full p-4 pb-10">
          <div className="flex flex-col gap-1">
            {siteConfig.navGroups.map((group) => renderMobileGroup(group))}
          </div>

          <div className="mt-6 border-t dark:border-zhs-border border-slate-200 pt-6">
            <Link
              to="/free-ai-audit"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Get Free AI Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

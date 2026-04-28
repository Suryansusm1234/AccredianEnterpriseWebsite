"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import { NAV_LINKS, SITE_COPY } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(
    NAV_LINKS.find((l) => l.active)?.href ?? NAV_LINKS[0]?.href ?? ""
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveLink(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    NAV_LINKS.forEach((link) => {
      const id = link.href.replace("#", "");
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  const isActive = (href: string) =>
    href === activeLink ||
    (href === "#" && !activeLink.startsWith("#"));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-20 border-b border-transparent bg-white/90 backdrop-blur ${
        isScrolled ? "border-outline-variant/60 shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link
          aria-label={SITE_COPY.brand}
          className="text-2xl font-black tracking-tighter text-primary"
          href="#hero"
        >
          {SITE_COPY.brand}
        </Link>

        <nav
          aria-label={SITE_COPY.navbar.primaryNavLabel}
          className="hidden items-center gap-8 md:flex"
        >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "border-primary text-primary"
                    : "border-transparent text-on-surface-variant hover:text-primary"
                }`}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button aria-label={SITE_COPY.loginLabel} variant="ghost">
            {SITE_COPY.loginLabel}
          </Button>
          <Link aria-label={SITE_COPY.enquireLabel} href="/enquire">
            <Button>
              {SITE_COPY.enquireLabel}
            </Button>
          </Link>
        </div>

        <button
          aria-controls="mobile-nav"
          aria-expanded={isOpen}
          aria-label={
            isOpen ? SITE_COPY.navbar.closeMenuLabel : SITE_COPY.navbar.openMenuLabel
          }
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant text-on-surface md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span className="material-symbols-outlined">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {isOpen ? (
        <div
          className="border-t border-outline-variant bg-white px-6 py-4 shadow-lg md:hidden"
          id="mobile-nav"
        >
          <nav
            aria-label={SITE_COPY.navbar.mobileNavLabel}
            className="flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                className={`text-sm font-medium ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-on-surface"
                }`}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-3">
              <Button
                aria-label={SITE_COPY.loginLabel}
                className="flex-1"
                variant="ghost"
              >
                {SITE_COPY.loginLabel}
              </Button>
              <Button aria-label={SITE_COPY.enquireLabel} className="flex-1">
                {SITE_COPY.enquireLabel}
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

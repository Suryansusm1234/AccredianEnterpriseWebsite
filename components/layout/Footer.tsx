import Link from "next/link";

import Button from "@/components/ui/Button";
import { SITE_COPY } from "@/lib/data";

const solutionLinks = [
  "Enterprise Learning",
  "Leadership Tracks",
  "AI Upskilling",
  "Custom Cohorts",
];

const companyLinks = [
  "About Accredian",
  "Case Studies",
  "Resources",
  "Contact Us",
];

const socialIcons = ["public", "alternate_email", "smart_display"];

export default function Footer() {
  return (
    <footer className="bg-on-surface text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-5">
          <div className="text-2xl font-black tracking-tighter text-white">
            {SITE_COPY.brand}
          </div>
          <p className="max-w-sm text-sm text-white/75">
            {SITE_COPY.footer.tagline}
          </p>
          <div className="flex gap-3">
            {socialIcons.map((icon) => (
              <span
                key={icon}
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {icon}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            {SITE_COPY.footer.solutionsHeading}
          </h3>
          <div className="space-y-3 text-sm text-white/80">
            {solutionLinks.map((item) => (
              <Link
                key={item}
                aria-label={item}
                className="block transition-colors hover:text-white"
                href="#solutions"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            {SITE_COPY.footer.companyHeading}
          </h3>
          <div className="space-y-3 text-sm text-white/80">
            {companyLinks.map((item) => (
              <Link
                key={item}
                aria-label={item}
                className="block transition-colors hover:text-white"
                href="#about"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-primary-container p-6 text-white">
          <h3 className="text-2xl font-semibold">{SITE_COPY.footer.ctaTitle}</h3>
          <p className="mt-3 text-sm text-white/85">
            {SITE_COPY.footer.ctaDescription}
          </p>
          <Link aria-label={SITE_COPY.enquireLabel} href="/enquire">
            <Button
              aria-label={SITE_COPY.enquireLabel}
              className="mt-6 bg-white text-primary hover:bg-white/90"
            >
              {SITE_COPY.enquireLabel}
            </Button>
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>{SITE_COPY.footer.copyright}</p>
          <div className="flex gap-6">
            <Link aria-label={SITE_COPY.footer.contactSupport} href="#resources">
              {SITE_COPY.footer.contactSupport}
            </Link>
            <Link aria-label={SITE_COPY.footer.career} href="#about">
              {SITE_COPY.footer.career}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

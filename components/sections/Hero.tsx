import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import { SITE_COPY } from "@/lib/data";

export default function Hero() {
  const checklist = SITE_COPY.hero.checklist;

  return (
    <section className="overflow-hidden bg-surface-container-lowest py-20" id="hero">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-label-sm tracking-[0.2em] text-primary">
            {SITE_COPY.hero.eyebrow}
          </div>
          <div className="space-y-5">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-on-surface md:text-headline-xl">
              {SITE_COPY.hero.title}
            </h1>
            <p className="max-w-xl text-body-lg text-on-surface-variant">
              {SITE_COPY.hero.description}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link aria-label={SITE_COPY.hero.primaryCta} href="/enquire">
              <Button aria-label={SITE_COPY.hero.primaryCta}>
                {SITE_COPY.hero.primaryCta}
              </Button>
            </Link>
            <Link aria-label={SITE_COPY.hero.secondaryCta} href="#programs">
              <Button className="w-full sm:w-auto" variant="ghost">
                {SITE_COPY.hero.secondaryCta}
              </Button>
            </Link>
          </div>
          <ul className="space-y-3">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-body-md text-on-surface"
              >
                <span className="material-symbols-outlined icon-filled text-primary">
                  check_circle
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-container-high">
          <Image
            src="/images/corporate-big-hero-v4.webp"
            alt="Corporate training program"
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

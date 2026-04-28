import { SITE_COPY, SKILL_GROUPS } from "@/lib/data";

export default function SkillEnhancement() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] bg-primary-container px-8 py-10 text-white lg:px-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 className="max-w-xl text-headline-lg">{SITE_COPY.skills.title}</h2>
              <p className="mt-4 max-w-2xl text-body-lg text-white/85">
                {SITE_COPY.skills.description}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.title}
                  className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{group.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

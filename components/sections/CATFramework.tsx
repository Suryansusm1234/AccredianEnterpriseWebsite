import { CAT_STEPS, SITE_COPY } from "@/lib/data";

export default function CATFramework() {
  return (
    <section className="bg-surface-container-low py-20 overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-headline-lg text-on-surface">{SITE_COPY.cat.title}</h2>
          <p className="mt-4 max-w-2xl text-body-lg text-on-surface-variant">
            {SITE_COPY.cat.description}
          </p>
          <div className="mt-8 space-y-4">
            {CAT_STEPS.map((step) => (
              <div
                key={step.letter}
                className="flex gap-4 rounded-3xl border border-outline-variant bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {step.letter}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-on-surface">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-body-md text-on-surface-variant">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative flex h-64 w-64 sm:h-80 sm:w-80 lg:h-[360px] lg:w-[360px] items-center justify-center rounded-full border-2 border-dashed border-primary/30 bg-white">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-xl sm:h-20 sm:w-20 sm:text-base lg:h-28 lg:w-28 lg:text-lg">
              {SITE_COPY.cat.impact}
            </div>
            <div className="absolute left-3 top-6 rounded-xl bg-accent px-3 py-2 text-xs text-white shadow-lg sm:px-4 sm:py-3 sm:text-sm lg:left-10 lg:top-12 lg:rounded-2xl lg:px-5 lg:py-4">
              C
            </div>
            <div className="absolute right-3 top-8 rounded-xl bg-primary-container px-3 py-2 text-xs text-white shadow-lg sm:px-4 sm:py-3 sm:text-sm lg:right-10 lg:top-16 lg:rounded-2xl lg:px-5 lg:py-4">
              A
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-xl bg-on-surface px-3 py-2 text-xs text-white shadow-lg sm:px-4 sm:py-3 sm:text-sm lg:bottom-12 lg:rounded-2xl lg:px-5 lg:py-4">
              T
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

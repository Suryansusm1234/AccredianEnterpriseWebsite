import { DELIVERY_STEPS, SITE_COPY } from "@/lib/data";

export default function DeliverySteps() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-headline-lg text-on-surface">
            {SITE_COPY.delivery.titlePrefix}{" "}
            <span className="text-accent">{SITE_COPY.delivery.titleAccent}</span>{" "}
            {SITE_COPY.delivery.titleSuffix}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {DELIVERY_STEPS.map((step) => (
            <article
              key={step.number}
              className="relative overflow-hidden rounded-3xl bg-[#f0f4ff] p-8 shadow-sm"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-accent" />
              <div className="absolute inset-y-0 right-0 w-1 bg-accent" />
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {step.number}
              </div>
              <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  {step.icon}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-on-surface">
                {step.title}
              </h3>
              <p className="mt-3 text-body-md text-on-surface-variant">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

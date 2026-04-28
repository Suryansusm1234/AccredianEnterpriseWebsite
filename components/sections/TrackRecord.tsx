import { SITE_COPY, STATS } from "@/lib/data";

export default function TrackRecord() {
  return (
    <section className="bg-surface-container-low py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-label-sm tracking-widest text-primary">
            {SITE_COPY.trackRecord.label}
          </p>
          <h2 className="mt-3 text-headline-lg text-on-surface">
            {SITE_COPY.trackRecord.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STATS.map((item) => (
            <div key={item.label} className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-4xl font-bold text-primary">{item.value}</div>
              <p className="mt-2 text-body-md text-on-surface-variant">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

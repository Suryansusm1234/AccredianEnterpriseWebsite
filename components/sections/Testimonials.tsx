import { SITE_COPY, TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-surface-container-low py-20" id="resources">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-headline-lg text-on-surface">
            {SITE_COPY.testimonials.title}
          </h2>
          <p className="mt-4 text-body-lg text-on-surface-variant">
            {SITE_COPY.testimonials.description}
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-6 lg:flex-row">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={`${testimonial.company}`}
              className="flex-1 rounded-3xl border border-white/20 bg-white/60 p-8 shadow-lg backdrop-blur"
            >
              <div className="flex items-center gap-4">
                <div>
                  
                  <p className="text-sm font-semibold text-primary">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="mt-6 italic text-on-surface-variant">
                “{testimonial.quote}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

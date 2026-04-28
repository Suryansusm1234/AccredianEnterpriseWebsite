import Image from "next/image";

import { COURSE_SEGMENTS, SITE_COPY } from "@/lib/data";

export default function CourseSegmentation() {
  return (
    <section className="py-20" id="programs">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-headline-lg text-on-surface">
            {SITE_COPY.segmentation.title}
          </h2>
          <p className="mt-4 text-body-lg text-on-surface-variant">
            {SITE_COPY.segmentation.description}
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {COURSE_SEGMENTS.map((segment) => (
            <article
              key={segment.title}
              className="group overflow-hidden rounded-3xl border border-outline-variant bg-white shadow-sm"
            >
              <div className="overflow-hidden">
                <Image
                  alt={segment.imageAlt}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  height={720}
                  src={segment.imageSrc}
                  width={960}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-on-surface">
                  {segment.title}
                </h3>
                <p className="mt-3 text-body-md text-on-surface-variant">
                  {segment.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

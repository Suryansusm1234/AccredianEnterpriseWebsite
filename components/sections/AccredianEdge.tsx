import { EDGE_STEPS, SITE_COPY } from "@/lib/data";
import Image from "next/image";

export default function AccredianEdge() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-headline-lg text-on-surface">{SITE_COPY.edge.title}</h2>
          <p className="mt-4 text-body-lg text-on-surface-variant">
            {SITE_COPY.edge.description}
          </p>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5 lg:flex-nowrap">
          <Image src={"/accredian-edge-usp-v3.svg"} alt="Accredian Edge" width={1000} height={1000} className="hidden lg:flex w-full h-full object-cover" />
          <Image src={"/accredian-edge-usp-mobile.svg"} alt="Accredian Edge" width={1000} height={1000} className="flex lg:hidden w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

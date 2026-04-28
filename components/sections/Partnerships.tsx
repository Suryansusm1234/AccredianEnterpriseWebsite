import { PARTNERS, SITE_COPY } from "@/lib/data";
import Image from "next/image";

export default function Partnerships() {
  return (
    <section className="py-12" id="solutions">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-on-surface-variant">
          {SITE_COPY.partnerships.title}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 bg-white p-6 sm:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center"
            >
              <Image src={partner.url} alt={`${partner.name}`} width={100} height={100}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { DOMAIN_CARDS, SITE_COPY } from "@/lib/data";

export default function DomainExpertise() {
  const [lastCard] = DOMAIN_CARDS.slice(-1);

  return (
    <section className="bg-surface-container-low py-20" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl text-center md:mx-auto">
          <h2 className="text-headline-lg text-on-surface">
            {SITE_COPY.domain.titlePrefix}{" "}
            <span className="text-accent">{SITE_COPY.domain.titleAccent}</span>
          </h2>
          <p className="mt-4 text-body-lg text-on-surface-variant">
            {SITE_COPY.domain.description}
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {DOMAIN_CARDS.slice(0, 6).map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-outline-variant bg-white p-8 shadow-sm"
            >
              <span className="material-symbols-outlined text-5xl text-accent">
                {card.icon}
              </span>
              <h3 className="mt-4 text-xl font-bold text-on-surface">
                {card.title}
              </h3>
            </div>
          ))}
          <div className="md:col-span-3 md:flex md:justify-center">
            <div className="rounded-3xl border border-outline-variant bg-white p-8 shadow-sm md:w-[calc(33.333%-1rem)]">
              <span className="material-symbols-outlined text-5xl text-accent">
                {lastCard.icon}
              </span>
              <h3 className="mt-4 text-xl font-bold text-on-surface">
                {lastCard.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

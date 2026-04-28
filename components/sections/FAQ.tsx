"use client";

import { useState } from "react";

import { FAQS, FAQ_TABS, SITE_COPY } from "@/lib/data";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState(FAQ_TABS[0]);
  const [openQuestion, setOpenQuestion] = useState(FAQS[0]?.question ?? "");
  const [tabvalue, settabvalue] = useState()

  return (
    <section className="py-20" id="faq">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-headline-lg text-on-surface">{SITE_COPY.faq.title}</h2>
          <p className="mt-4 text-body-lg text-on-surface-variant">
            {SITE_COPY.faq.description}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
          {FAQ_TABS.map((tab) => {
            const isActive = tab === activeTab;

            return (
              <button
                key={tab}
                aria-label={tab}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:px-5 sm:py-3 sm:text-sm ${
                  isActive
                    ? "bg-primary text-white"
                    : "border border-outline-variant bg-white text-on-surface hover:bg-surface-container-low"
                }`}
                onClick={() =>{ setActiveTab(tab)}}
                type="button"
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="mt-8 space-y-4">
          {FAQS.map((item) => {
            const isOpen = item.question === openQuestion;
            if(activeTab === item.tab){

            return (
             
              <div
                key={`${activeTab}-${item.question}`}
                className="rounded-3xl border border-outline-variant bg-white px-6 py-5 shadow-sm"
              >
                <button
                  aria-expanded={isOpen}
                  aria-label={item.question}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenQuestion(isOpen ? "" : item.question)}
                  type="button"
                >
                  <span className="text-lg font-semibold text-on-surface">
                    {item.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen ? (
                  <p className="mt-4 pr-10 text-body-md text-on-surface-variant">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            )};
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import type { FaqItem } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

/** One answer open at a time (the first one to start with); the open question turns maroon */
export const FaqAccordion = ({ items }: { items: FaqItem[] }) => {
  const [open, setOpen] = useState(items[0]?.id ?? "");

  return (
    <ul className="mt-8 grid gap-[0.94rem] lg:mt-[2.4rem]">
      {items.map((item, index) => {
        const isOpen = open === item.id;
        return (
          <li
            key={item.id}
            data-reveal
            data-reveal-delay={index * 80}
            className={`overflow-hidden rounded-[0.66rem] border-[0.1rem] transition-colors duration-300 ${
              isOpen ? "border-[var(--color-primary)] bg-[var(--color-bg-faq-open)]" : "border-[var(--color-border-strong)] bg-[var(--color-bg-faq)]"
            }`}
          >
            <h3>
              <button
                type="button"
                id={`faq-question-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                onClick={() => setOpen(isOpen ? "" : item.id)}
                className={`flex min-h-[4rem] w-full items-center justify-between gap-4 px-5 py-3 text-left font-heading text-[1.15rem] font-bold leading-snug transition-colors duration-300 sm:text-[1.35rem] lg:px-[1.6rem] lg:text-[1.55rem] ${
                  isOpen ? "bg-[var(--color-primary)] text-[var(--color-white)]" : "text-[var(--color-heading)] hover:text-[var(--color-primary)]"
                }`}
              >
                {item.question}
                <Icon name={isOpen ? "LuMinus" : "LuPlus"} className={`size-[1.7rem] shrink-0 ${isOpen ? "" : "text-[var(--color-primary)]"}`} strokeWidth={2.6} />
              </button>
            </h3>
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              className={`grid transition-[grid-template-rows] duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="px-5 pb-[1.3rem] pt-[0.85rem] font-heading text-[1.02rem] leading-[1.6] text-[var(--color-text)] sm:text-[1.1rem] lg:px-[2.34rem] lg:text-[1.17rem] lg:leading-[1.73rem]">{item.answer}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

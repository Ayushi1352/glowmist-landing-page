"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { TestimonialItem, TestimonialsData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { fill } from "@/components/ui/text";

const AUTOPLAY_MS = 6000;

const arrowClass =
  "grid size-12 place-items-center rounded-full bg-[var(--color-bg-arrow)] text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] lg:size-[3.75rem]";

/** Quote, name, role and stars of one client */
const Quote = ({ item, ratingLabel, className }: { item: TestimonialItem; ratingLabel: string; className: string }) => (
  <blockquote className={className}>
    <p className="mx-auto max-w-[56.5rem] font-heading text-[1.2rem] leading-[1.45] text-[var(--color-heading)] sm:text-[1.45rem] lg:text-[2.08rem] lg:leading-[2.3rem]">{item.quote}</p>
    <footer className="mt-5 lg:mt-[1.125rem]">
      <span className="block font-heading text-[1.6rem] font-bold leading-[1.2] text-[var(--color-primary)] lg:text-[2.08rem]">{item.name}</span>
      <span className="mt-[0.15rem] block font-heading text-[1.15rem] text-[var(--color-text)] lg:text-[1.5rem]">{item.role}</span>
      <span className="mt-[0.7rem] flex justify-center gap-[0.4rem] text-[var(--color-star)]" role="img" aria-label={fill(ratingLabel, { stars: item.stars })}>
        {Array.from({ length: item.stars }, (_, n) => (
          <Icon key={n} name="FaStar" className="size-[1.5rem]" />
        ))}
      </span>
    </footer>
  </blockquote>
);

/** One client at a time: their photo large in the middle with the clients before and after beside it; moves on by itself */
export const TestimonialSlider = ({ data }: { data: TestimonialsData }) => {
  const { items } = data;
  const [index, setIndex] = useState(Math.min(data.startIndex, items.length - 1));
  const [paused, setPaused] = useState(false);
  const count = items.length;
  const at = (step: number) => (index + step + count) % count;
  const go = (step: number) => setIndex((current) => (current + step + count) % count);

  useEffect(() => {
    if (paused || count < 2) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % count), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, count]);

  const side = (step: number) => {
    const item = items[at(step)];
    return (
      <button
        type="button"
        onClick={() => go(step)}
        aria-label={fill(data.showLabel, { name: item.name })}
        className="relative size-[4.5rem] shrink-0 overflow-hidden rounded-full border-[0.2rem] border-[var(--color-white)] opacity-90 shadow-[0_0.6rem_1.2rem_-0.6rem_var(--color-shadow-card)] transition-[opacity,transform] duration-300 hover:scale-105 hover:opacity-100 sm:size-[5.5rem] lg:size-[6.84rem]"
      >
        <Image src={item.image} alt="" fill sizes="110px" className="object-cover" />
      </button>
    );
  };

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="text-center">
      {/* client photos */}
      <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6 lg:mt-[1.5rem] lg:gap-[1.97rem]">
        {count > 1 && side(-1)}
        <span key={items[index].id} className="relative size-[7rem] shrink-0 rounded-full border-[0.25rem] border-[var(--color-primary)] p-[0.25rem] transition-[opacity,transform] duration-500 starting:scale-90 starting:opacity-0 sm:size-[8rem] lg:size-[9.66rem] lg:border-[0.28rem] lg:p-[0.28rem]">
          <span className="relative block size-full overflow-hidden rounded-full">
            <Image src={items[index].image} alt={items[index].name} fill sizes="150px" className="object-cover" />
          </span>
        </span>
        {count > 2 && side(1)}
      </div>

      {/* quote mark between two lines */}
      <div aria-hidden="true" className="mt-6 flex items-center justify-center gap-[1.9rem] text-[var(--color-primary)] lg:mt-[1.36rem]">
        <span className="h-[0.14rem] w-[5.3rem] bg-current" />
        <Icon name="RiDoubleQuotesL" className="size-[3.4rem]" />
        <span className="h-[0.14rem] w-[5.3rem] bg-current" />
      </div>

      <div className="relative mt-3 lg:mt-[0.3rem]">
        <div className="grid" aria-live="polite">
          {/* every quote takes up the same cell unseen, so the block keeps the height of the longest one */}
          {items.map((item) => (
            <Quote key={item.id} item={item} ratingLabel={data.ratingLabel} className="invisible col-start-1 row-start-1" />
          ))}
          <Quote
            key={index}
            item={items[index]}
            ratingLabel={data.ratingLabel}
            className="col-start-1 row-start-1 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-5 starting:opacity-0"
          />
        </div>
      </div>

      {/* arrows: beside the quote on desktop, under it on phones and tablets */}
      <div className="mt-8 flex items-center justify-center gap-5 lg:mt-[2.77rem]">
        <button type="button" aria-label={data.previousLabel} onClick={() => go(-1)} className={`${arrowClass} lg:absolute lg:left-[5.86rem] lg:top-[30.47rem] lg:-translate-y-1/2`}>
          <Icon name="LuChevronLeft" className="size-6 lg:size-[1.8rem]" strokeWidth={2.4} />
        </button>
        <div className="flex gap-[1.1rem]">
          {items.map((item, n) => (
            <button
              key={item.id}
              type="button"
              aria-label={fill(data.showLabel, { name: item.name })}
              aria-current={n === index}
              onClick={() => setIndex(n)}
              className={`size-[1.03rem] rounded-full transition-colors duration-300 ${n === index ? "bg-[var(--color-primary)]" : "bg-[var(--color-bg-dot)] hover:bg-[var(--color-border-strong)]"}`}
            />
          ))}
        </div>
        <button type="button" aria-label={data.nextLabel} onClick={() => go(1)} className={`${arrowClass} lg:absolute lg:right-[5.86rem] lg:top-[30.47rem] lg:-translate-y-1/2`}>
          <Icon name="LuChevronRight" className="size-6 lg:size-[1.8rem]" strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
};

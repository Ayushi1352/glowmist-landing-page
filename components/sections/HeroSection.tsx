import Image from "next/image";
import type { HeroData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { buttonArrow, buttonClass } from "@/components/ui/buttonStyles";
import { CornerLeafArt, LeafSprigArt, PetalsArt } from "@/components/ui/LineArt";
import { DesignFrame } from "@/components/ui/DesignFrame";
import { sectionSpace } from "@/components/ui/sectionSpace";

/** Plays once on load (CSS @starting-style), so the hero never waits for JavaScript */
const enter = "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-6 starting:opacity-0";

/*
  From 1024px up every piece sits where the 1920px design has it (1 design pixel = 0.046875rem, measured from
  the top of the section below the header). Below the header it gets the same space as every other section
  (DesignFrame trims the design's own gaps). Phones and tablets stack the text above the photo.
*/
export const HeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative isolate overflow-hidden bg-[var(--color-bg-hero)] pt-[4.5rem] sm:pt-[5.5rem] lg:pt-[9.375rem]">
      {/* petals touch the left edge of the page on every screen */}
      <PetalsArt className="pointer-events-none absolute left-0 top-[4.5rem] -z-10 h-auto w-[6.5rem] opacity-80 drop-shadow-[0_0.5rem_0.6rem_var(--color-shadow-card)] sm:top-[5.5rem] sm:w-[8rem] lg:top-[13.15rem] lg:w-[12.9rem] lg:opacity-100" />
      <div className={`relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-0 ${sectionSpace}`}>
        {/* decorations */}
        <LeafSprigArt className="pointer-events-none absolute left-[49.45rem] top-[-0.92rem] -z-10 hidden h-auto w-[10.55rem] text-[var(--color-leaf-line)] lg:block" />
        <CornerLeafArt className="pointer-events-none absolute -right-2 bottom-2 z-10 h-auto w-[7.5rem] text-[var(--color-leaf-line)] lg:left-[77.58rem] lg:right-auto lg:top-[37.75rem] lg:w-[11.95rem]" />

        {/* the content runs from the top of the main photo (4.45rem) to the foot of the arch photo (47.02rem) */}
        <DesignFrame height={42.57} offset={4.45}>
        {/* text */}
        <div className={`relative text-center lg:static lg:text-left ${enter}`}>
          <p className="mx-auto flex w-fit items-center gap-[1.4rem] font-sans text-[0.8rem] font-normal uppercase tracking-[0.12em] text-[var(--color-heading)] sm:text-base lg:absolute lg:left-[16.31rem] lg:top-[7.85rem] lg:text-[1.25rem] lg:tracking-[0.14em]">
            {data.label}
            <span aria-hidden="true" className="hidden h-[0.1rem] w-[7.7rem] bg-gradient-to-r from-[var(--color-nav)] to-transparent lg:block" />
          </p>
          {/* on phones the size follows the screen width so "Bliss, Embrace" always stays on one line (at most 3.4rem) */}
          <h1 className="mt-5 font-display text-[length:min(3.4rem,calc((100vw-2rem)/6.6))] font-semibold leading-[1.03] text-[var(--color-heading)] sm:text-[5rem] lg:absolute lg:left-[14.3rem] lg:top-[10.6rem] lg:mt-0 lg:whitespace-nowrap lg:text-[6.8rem] lg:font-medium">
            <span className="block lg:ml-[0.7rem]">{data.titleTop}</span>
            <span className="block font-medium italic tracking-[-0.03em] text-[var(--color-primary)] lg:text-[6.5rem]">{data.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text)] sm:text-lg lg:absolute lg:left-[20.53rem] lg:top-[29.5rem] lg:mx-0 lg:mt-0 lg:w-[31.5rem] lg:max-w-none lg:text-[1.25rem] lg:leading-[1.78rem]">
            {data.description}
          </p>
          <a
            href={data.buttonUrl}
            className={`${buttonClass} mt-8 h-14 px-8 font-heading text-lg font-bold lg:absolute lg:left-[20.86rem] lg:top-[37.73rem] lg:mt-0 lg:h-[3.75rem] lg:w-[14.9rem] lg:px-0 lg:text-[1.53rem]`}
          >
            {data.buttonText}
            <Icon name="LuArrowRight" className={buttonArrow} strokeWidth={2.2} />
          </a>
        </div>

        {/* photos: on phones and tablets the main photo with the arch photo over its corner (it hangs 1.5rem below, kept clear by mb-6) */}
        <div className={`relative mx-auto mb-6 mt-12 max-w-md sm:max-w-lg lg:static lg:mb-0 lg:mt-0 lg:max-w-none ${enter} delay-150`}>
          <div className="relative ml-auto aspect-[655/865] w-[86%] overflow-hidden rounded-[1.6rem] border-[0.3rem] border-[var(--color-white)] lg:absolute lg:left-[55.78rem] lg:top-[4.45rem] lg:ml-0 lg:h-[40.55rem] lg:w-[30.7rem] lg:rounded-[2.06rem] lg:border-[0.375rem]">
            <Image src={data.image} alt={data.imageAlt} fill preload quality={90} sizes="(min-width: 1024px) 491px, 86vw" className="object-cover" />
          </div>
          <div className="absolute bottom-[-1.5rem] left-0 aspect-[340/468] w-[38%] overflow-hidden rounded-b-[0.25rem] rounded-t-full border-[0.3rem] border-[var(--color-white)] lg:bottom-auto lg:left-[1.03rem] lg:top-[25.08rem] lg:h-[21.94rem] lg:w-[15.94rem] lg:border-[0.33rem]">
            <Image src={data.secondImage} alt={data.secondImageAlt} fill sizes="(min-width: 1024px) 255px, 38vw" className="object-cover" />
          </div>
        </div>
        </DesignFrame>
      </div>
    </section>
  );
};

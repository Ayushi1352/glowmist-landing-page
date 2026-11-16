import Image from "next/image";
import type { HeroData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { buttonArrow, buttonClass } from "@/components/ui/SectionHeading";

/** Plays once on load (CSS @starting-style), so the hero never waits for JavaScript */
const enter = "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-6 starting:opacity-0";

/*
  From 1024px up every piece sits where the 1920px design has it (1 design pixel = 0.046875rem, measured from
  the top of the section below the header). Phones and tablets stack the text above the photo.
*/
export const HeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative isolate overflow-hidden bg-[var(--color-bg-hero)] pt-[4.5rem] sm:pt-[5.5rem] lg:pt-[9.375rem]">
      <div className="relative mx-auto max-w-[90rem] px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:h-[59.3rem] lg:p-0">
        {/* decorations */}
        <Image
          src={data.petalsImage}
          alt=""
          width={275}
          height={250}
          sizes="(min-width: 1024px) 206px, 110px"
          className="pointer-events-none absolute -left-2 top-0 -z-10 w-[6.5rem] opacity-80 sm:w-[8rem] lg:left-0 lg:top-[4.22rem] lg:w-[12.9rem] lg:opacity-100"
        />
        <Image
          src={data.leafImage}
          alt=""
          width={225}
          height={255}
          sizes="169px"
          className="pointer-events-none absolute left-[49.45rem] top-[-0.47rem] -z-10 hidden w-[10.55rem] lg:block"
        />
        <Image
          src={data.cornerLeafImage}
          alt=""
          width={255}
          height={235}
          sizes="(min-width: 1024px) 191px, 120px"
          className="pointer-events-none absolute -right-2 bottom-2 z-10 w-[7.5rem] lg:left-[77.58rem] lg:right-auto lg:top-[38.2rem] lg:w-[11.95rem]"
        />

        {/* text */}
        <div className={`relative text-center lg:static lg:text-left ${enter}`}>
          <p className="inline-flex items-center gap-[1.4rem] font-sans text-[0.8rem] font-medium uppercase tracking-[0.12em] text-[var(--color-heading)] sm:text-base lg:absolute lg:left-[16.31rem] lg:top-[7.85rem] lg:text-[1.2rem] lg:tracking-[0.1em]">
            {data.label}
            <span aria-hidden="true" className="hidden h-[0.1rem] w-[7.7rem] bg-gradient-to-r from-[var(--color-nav)] to-transparent lg:block" />
          </p>
          <h1 className="mt-5 font-display text-[3.4rem] font-semibold leading-[1.03] text-[var(--color-heading)] sm:text-[5rem] lg:absolute lg:left-[14.3rem] lg:top-[10.6rem] lg:mt-0 lg:whitespace-nowrap lg:text-[6.94rem]">
            <span className="block lg:ml-[0.7rem]">{data.titleTop}</span>
            <span className="block italic text-[var(--color-primary)]">{data.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text)] sm:text-lg lg:absolute lg:left-[20.53rem] lg:top-[29.5rem] lg:mx-0 lg:mt-0 lg:w-[31rem] lg:max-w-none lg:text-[1.17rem] lg:leading-[1.78rem]">
            {data.description}
          </p>
          <a
            href={data.buttonUrl}
            className={`${buttonClass} mt-8 h-14 px-8 font-heading text-lg font-bold lg:absolute lg:left-[20.86rem] lg:top-[37.73rem] lg:mt-0 lg:h-[3.75rem] lg:w-[14.9rem] lg:px-0 lg:text-[1.4rem]`}
          >
            {data.buttonText}
            <Icon name="LuArrowRight" className={buttonArrow} strokeWidth={2.2} />
          </a>
        </div>

        {/* photos: on phones and tablets the main photo with the arch photo over its corner */}
        <div className={`relative mx-auto mt-12 max-w-md sm:max-w-lg lg:static lg:mt-0 lg:max-w-none ${enter} delay-150`}>
          <div className="relative ml-auto aspect-[655/865] w-[86%] overflow-hidden rounded-[1.6rem] border-[0.3rem] border-[var(--color-white)] shadow-[0_1.5rem_3rem_-1.5rem_var(--color-shadow-card)] lg:absolute lg:left-[55.78rem] lg:top-[4.45rem] lg:ml-0 lg:h-[40.55rem] lg:w-[30.7rem] lg:rounded-[2.06rem] lg:border-[0.375rem]">
            <Image src={data.image} alt={data.imageAlt} fill preload quality={90} sizes="(min-width: 1024px) 491px, 86vw" className="object-cover" />
          </div>
          <div className="absolute bottom-[-1.5rem] left-0 aspect-[340/468] w-[38%] overflow-hidden rounded-b-[0.25rem] rounded-t-full border-[0.3rem] border-[var(--color-white)] shadow-[0_1rem_2rem_-1rem_var(--color-shadow-card)] lg:bottom-auto lg:left-[1.03rem] lg:top-[25.08rem] lg:h-[21.94rem] lg:w-[15.94rem] lg:border-[0.33rem]">
            <Image src={data.secondImage} alt={data.secondImageAlt} fill sizes="(min-width: 1024px) 255px, 38vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

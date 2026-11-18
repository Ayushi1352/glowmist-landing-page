import Image from "next/image";
import type { AboutData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { DesignFrame } from "@/components/ui/DesignFrame";
import { sectionSpace } from "@/components/ui/sectionSpace";

/** Photo collage on the left, text with the mission and vision cards on the right (sizes from the 1920px design) */
export const AboutSection = ({ data }: { data?: AboutData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-[4.5rem] bg-[var(--color-bg-alt)] lg:scroll-mt-[5.75rem]">
      <div className={`relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-0 ${sectionSpace}`}>
        {/* the content runs from the top of the arch photo (1.07rem; the thin arc above it fades out) to its foot (46.54rem) */}
        <DesignFrame height={45.47} offset={1.07}>
        <div className="grid gap-10 lg:block">
        {/* collage (positions in % of the 912 × 994 design box): an arch photo, a thin maroon arc over its top-left, a framed photo over its bottom-right */}
        <div data-reveal className="relative mx-auto -mt-[min(2.18%,0.74rem)] aspect-[912/994] w-full max-w-[34rem] lg:absolute lg:ml-[1.875rem] lg:mt-[0.14rem] lg:w-[42.75rem] lg:max-w-none">
          <svg aria-hidden="true" viewBox="0 0 912 994" fill="none" className="pointer-events-none absolute inset-0 size-full text-[var(--color-primary-light)]">
            <defs>
              <linearGradient id="about-arc" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="currentColor" stopOpacity="0" />
                <stop offset="0.35" stopColor="currentColor" stopOpacity="0.85" />
                <stop offset="0.75" stopColor="currentColor" stopOpacity="0.85" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M3 345A440 335 0 0 1 395 6" stroke="url(#about-arc)" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
          <div className="absolute left-[1.1%] top-[2%] h-[97.6%] w-[93.75%] overflow-hidden [border-radius:50%_50%_7%_7%/33%_33%_6%_6%]">
            <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 641px, (min-width: 640px) 510px, 86vw" className="object-cover object-[40%_50%]" />
          </div>
          <div className="absolute left-[60.1%] top-[51.1%] h-[37.9%] w-[39.1%] overflow-hidden rounded-[1.1rem] border-[0.3rem] border-[var(--color-white)] bg-[var(--color-white)] shadow-[0_1rem_2rem_-1rem_var(--color-shadow-card)] lg:border-[0.33rem]">
            <Image src={data.secondImage} alt={data.secondImageAlt} fill quality={90} sizes="(min-width: 1024px) 268px, (min-width: 640px) 213px, 36vw" className="object-cover" />
          </div>
        </div>

        <div className="lg:ml-[45.47rem] lg:w-[39.84rem] lg:pt-[4.69rem]">
          <div data-reveal>
            <p className="inline-flex h-[2.58rem] items-center gap-[0.6rem] rounded-full bg-[var(--color-bg-chip)] px-[1rem] font-sans text-[1.05rem] font-medium text-[var(--color-heading)] lg:text-[1.22rem]">
              <span aria-hidden="true" className="size-[0.47rem] rounded-full bg-[var(--color-primary-light)]" />
              {data.label}
            </p>
            {/* two lines on every screen; on phones the size follows the screen width so "relaxation begins here" (9.8em wide) always fits */}
            <h2 className="mt-[1.125rem] font-display text-[length:min(2.4rem,calc((100vw-2rem)/10.3))] font-normal leading-[1.03] text-[var(--color-heading)] sm:text-[3rem] lg:ml-[0.84rem] lg:text-[3.66rem]">
              {data.titleTop}{" "}
              <span className="block font-semibold italic text-[var(--color-primary)]">{data.titleAccent}</span>
            </h2>
            <p className="mt-6 max-w-[33rem] text-base leading-relaxed text-[var(--color-text)] sm:text-lg lg:ml-[0.84rem] lg:mt-[3rem] lg:text-[1.38rem] lg:leading-[1.78rem]">{data.description}</p>
          </div>

          <ul className="mt-8 grid gap-[1.5rem] lg:ml-[1.55rem] lg:mt-[2.16rem] lg:w-[39.84rem]">
            {data.features.map((feature, index) => (
              <li
                key={feature.id}
                data-reveal
                data-reveal-delay={index * 120}
                className="flex items-center gap-4 rounded-[1.875rem] bg-gradient-to-r from-[var(--color-bg-card)] to-[var(--color-bg-chip)] p-4 sm:gap-0 sm:p-0 sm:py-[1.4rem] sm:pl-[2.2rem] lg:min-h-[8.2rem]"
              >
                <span className="grid size-16 shrink-0 place-items-center rounded-[1.31rem] bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary)] text-[var(--color-white)] shadow-[0_0.6rem_1.2rem_-0.6rem_var(--color-shadow-strong)] sm:size-[5.72rem]">
                  <Icon name={feature.icon} className="size-9 sm:size-[3rem]" strokeWidth={1.6} />
                </span>
                <span aria-hidden="true" className="mx-[1.85rem] hidden h-[4.45rem] w-[0.1rem] shrink-0 bg-[var(--color-divider)] sm:block" />
                <span className="pr-4 sm:pr-[1.2rem]">
                  <span className="block font-sans text-[1.35rem] font-extrabold leading-tight text-[var(--color-heading)] lg:text-[1.9rem]">{feature.title}</span>
                  <span className="mt-[0.2rem] block font-sans text-[0.95rem] leading-[1.5] text-[var(--color-text)] lg:text-[1.2rem] lg:leading-[1.53rem]">{feature.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        </div>
        </DesignFrame>
      </div>
    </section>
  );
};

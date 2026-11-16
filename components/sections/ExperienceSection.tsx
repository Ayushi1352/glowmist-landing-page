import Image from "next/image";
import type { ExperienceData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { Ornament, titleClass } from "@/components/ui/SectionHeading";

/** Big photo with a play button and a maroon corner line on the left, title, text and four numbers on the right */
export const ExperienceSection = ({ data }: { data?: ExperienceData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-[4.5rem] bg-[var(--color-bg-main)] lg:scroll-mt-[5.75rem]">
      <div className="relative mx-auto grid max-w-[90rem] gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:flex lg:items-start lg:gap-0 lg:px-0 lg:pb-[3.98rem] lg:pt-[3.66rem]">
        {/* the maroon line that wraps the top-left corner of the photo */}
        <svg
          aria-hidden="true"
          viewBox="0 0 364 597"
          fill="none"
          className="pointer-events-none absolute left-[2.25rem] top-[2.58rem] hidden h-[27.98rem] w-[17.06rem] text-[var(--color-primary)] lg:block"
        >
          <defs>
            <linearGradient id="experience-line" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="currentColor" stopOpacity="0" />
              <stop offset="0.25" stopColor="currentColor" />
              <stop offset="0.8" stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path d="M3 597V70Q3 3 70 3H364" stroke="url(#experience-line)" strokeWidth="5" strokeLinecap="round" />
        </svg>

        <div data-reveal className="relative aspect-[870/857] w-full overflow-hidden rounded-[1.75rem] lg:ml-[3.52rem] lg:w-[40.78rem] lg:shrink-0 lg:rounded-[2.34rem]">
          <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 653px, 92vw" className="object-cover" />
          <a
            href={data.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={data.playLabel}
            className="group absolute left-[48.9%] top-[52.4%] grid size-[4.5rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--color-white-35)] sm:size-[6.8rem]"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-white-35)] [animation-duration:2.4s] motion-reduce:hidden" aria-hidden="true" />
            <span className="relative grid size-[3.2rem] place-items-center rounded-full border-[0.2rem] border-[var(--color-white)] bg-[var(--color-primary)] text-[var(--color-white)] transition-transform duration-300 group-hover:scale-110 sm:size-[4.875rem] sm:border-[0.23rem]">
              <Icon name="FaPlay" className="ml-[0.2rem] size-[1.1rem] sm:size-[1.6rem]" />
            </span>
          </a>
        </div>

        <div className="lg:ml-[2.8rem] lg:w-[39.8rem] lg:pt-[4.3rem]">
          <div data-reveal className="text-center text-[var(--color-primary)] lg:text-left">
            <div className="inline-flex flex-col items-center">
              <Ornament />
              <h2 className={`mt-[0.45rem] text-[2.3rem] sm:text-[2.8rem] lg:whitespace-nowrap lg:text-[3rem] ${titleClass}`}>
                <span className="not-italic text-[var(--color-heading)]">{data.titleTop}</span> {data.titleAccent}
              </h2>
            </div>
            <p className="mx-auto mt-4 max-w-[36.5rem] text-base leading-relaxed text-[var(--color-text)] sm:text-lg lg:mx-0 lg:mt-[1.4rem] lg:text-[1.22rem] lg:leading-[2.11rem]">
              {data.description}
            </p>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:-ml-[1.17rem] lg:mt-[1.27rem] lg:w-[41.9rem] lg:gap-x-[2.11rem] lg:gap-y-[1.4rem]">
            {data.stats.map((stat, index) => (
              <li
                key={stat.id}
                data-reveal
                data-reveal-delay={index * 100}
                className="flex items-center rounded-[1.4rem] bg-gradient-to-r from-[var(--color-bg-card)] to-[var(--color-bg-card-light)] py-4 pl-4 lg:h-[7.03rem] lg:py-0 lg:pl-[1.22rem]"
              >
                <span className="grid size-16 shrink-0 place-items-center rounded-full bg-[var(--color-bg-icon)] text-[var(--color-primary)] lg:size-[4.6rem]">
                  <Icon name={stat.icon} className="size-8 lg:size-[2.35rem]" strokeWidth={1.6} />
                </span>
                <span aria-hidden="true" className="mx-4 h-14 w-[0.1rem] shrink-0 bg-[var(--color-divider)] lg:ml-[1.125rem] lg:mr-[1.5rem] lg:h-[4.2rem]" />
                <span>
                  <span className="block font-heading text-[2.1rem] font-bold leading-none text-[var(--color-primary)] lg:text-[2.72rem]">{stat.value}</span>
                  <span className="mt-[0.35rem] block font-sans text-base text-[var(--color-text)] lg:text-[1.125rem]">{stat.label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

import Image from "next/image";
import type { PackagesData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonArrow, buttonClass } from "@/components/ui/buttonStyles";
import { sectionSpace } from "@/components/ui/sectionSpace";

/**
 * Three package cards with a curved price area. A card turns maroon with a gold outline only while it is hovered
 * (like the service cards); the featured one carries the "Most Popular" badge.
 */
export const PackagesSection = ({ data }: { data?: PackagesData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative isolate scroll-mt-[4.5rem] overflow-hidden bg-[var(--color-bg-main)] lg:scroll-mt-[5.75rem]">
      {/* soft pink waves behind the bottom of the cards */}
      <svg aria-hidden="true" viewBox="0 0 1920 270" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 -z-10 h-[12.66rem] w-full">
        <path d="M0 0C180 40 330 190 560 240C760 284 1000 270 1920 270V270H0Z" fill="var(--color-bg-wave)" opacity="0.55" />
        <path d="M1920 60C1700 70 1560 210 1330 250C1180 276 1000 270 0 270H1920Z" fill="var(--color-bg-wave)" opacity="0.75" />
        <path d="M0 110C220 130 330 230 480 270H0Z" fill="var(--color-bg-wave)" />
      </svg>

      <div className={`mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-0 ${sectionSpace}`}>
        <SectionHeading titleTop={data.titleTop} titleAccent={data.titleAccent} description={data.description} descriptionClass="font-sans text-[var(--color-text)] lg:!text-[1.2rem]" />

        <ul className="mx-auto mt-14 grid max-w-[28rem] gap-12 md:max-w-none md:grid-cols-2 lg:mt-[3.6rem] lg:w-[77.7rem] lg:grid-cols-3 lg:gap-[1.875rem]">
          {data.packages.map((item, index) => {
            const featured = item.featured;
            return (
              <li
                key={item.id}
                data-reveal
                data-reveal-delay={index * 120}
                className="group relative isolate flex flex-col rounded-[1.69rem] border-[0.14rem] border-[var(--color-white)] bg-gradient-to-b from-[var(--color-bg-card-light)] to-[var(--color-white)] text-center text-[var(--color-heading)] shadow-[0_1.2rem_2.4rem_-1.4rem_var(--color-shadow-card)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-[var(--color-gold)] hover:shadow-[0_1.4rem_2.4rem_-1.2rem_var(--color-shadow-strong)] md:last:col-span-2 md:last:mx-auto md:last:w-[calc(50%-1.5rem)] lg:last:col-span-1 lg:last:mx-0 lg:last:w-auto"
              >
                {/* the maroon fill fades in on hover (a gradient cannot transition, so it is its own layer) */}
                <span aria-hidden="true" className="absolute inset-0 -z-10 rounded-[1.55rem] bg-gradient-to-b from-[var(--color-primary-light)] via-[var(--color-primary)] to-[var(--color-primary-dark)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {featured && (
                  <span className="absolute left-1/2 top-0 z-10 inline-flex h-[2.34rem] w-[11.25rem] -translate-x-1/2 -translate-y-[60%] items-center justify-center gap-[0.5rem] rounded-full border-[0.1rem] border-[var(--color-pink-light)] bg-gradient-to-b from-[var(--color-primary-light)] to-[var(--color-primary)] font-sans text-[1.05rem] font-semibold text-[var(--color-white)] lg:text-[1.15rem]">
                    <Icon name={data.badgeIcon} className="size-[1.15rem]" />
                    {data.badgeText}
                  </span>
                )}
                <div className="relative aspect-[526/284] rounded-t-[1.55rem]">
                  {/* the photo's foot curves down in the middle, like the design (the card colour shows at the sides, also on hover) */}
                  <div className="absolute inset-0 overflow-hidden rounded-t-[1.55rem] [clip-path:ellipse(120%_100%_at_50%_0%)]">
                    <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1024px) 400px, (min-width: 768px) 46vw, 92vw" className="object-cover" />
                  </div>
                  <span className="absolute bottom-0 left-1/2 grid aspect-square w-[16.8%] -translate-x-1/2 translate-y-[36%] place-items-center rounded-full border-[0.19rem] border-[var(--color-white)] bg-[var(--color-primary)] text-[var(--color-white)]">
                    <Icon name={data.packageIcon} className="size-1/2" />
                  </span>
                </div>

                {/* the top padding leaves clear space under the round lotus icon, which hangs over the photo */}
                <div className="flex-1 px-6 pt-[2.9rem] lg:px-[2.2rem] lg:pt-[2.6rem]">
                  <h3 className="font-heading text-[1.85rem] font-bold leading-[1.2] lg:text-[2.06rem]">
                    <span className="text-[var(--color-primary)] transition-colors duration-500 group-hover:text-[var(--color-white)]">{item.nameAccent}</span>{" "}
                    <span className="transition-colors duration-500 group-hover:text-[var(--color-white)]">{item.name}</span>
                  </h3>
                  <p className="mx-auto mt-[0.66rem] max-w-[17.54rem] font-sans text-[0.98rem] leading-[1.45rem] text-[var(--color-text)] transition-colors duration-500 group-hover:text-[var(--color-white)] lg:text-[1.08rem]">{item.description}</p>
                  <p className="mt-[1.4rem] flex items-center justify-center font-sans text-[0.98rem] font-medium transition-colors duration-500 group-hover:text-[var(--color-white)] lg:mt-[1.25rem] lg:text-[1.03rem]">
                    <span className="inline-flex items-center gap-[0.6rem]">
                      <Icon name={data.durationIcon} className="size-[1.4rem] text-[var(--color-primary)] transition-colors duration-500 group-hover:text-[var(--color-white)]" strokeWidth={2} />
                      {item.duration}
                    </span>
                    <span aria-hidden="true" className="mx-[1.3rem] h-[1.7rem] w-[0.1rem] bg-[var(--color-border-strong)] transition-colors duration-500 group-hover:bg-[var(--color-white-40)]" />
                    <span className="inline-flex items-center gap-[0.6rem]">
                      <Icon name={data.treatmentsIcon} className="size-[1.4rem] text-[var(--color-primary)] transition-colors duration-500 group-hover:text-[var(--color-white)]" />
                      {item.treatments}
                    </span>
                  </p>
                </div>

                {/* the curved price area at the foot of the card */}
                <div className="mt-[1.3rem] bg-gradient-to-b from-[var(--color-bg-curve)] to-[var(--color-bg-faq-open)] pb-[1.4rem] pt-[0.9rem] [border-radius:50%_50%_1.55rem_1.55rem/3rem_3rem_1.55rem_1.55rem] lg:mt-[0.6rem]">
                  <p className="font-heading text-[2.06rem] font-bold leading-[1.2] text-[var(--color-primary-dark)]">{item.price}</p>
                  <a href={data.buttonUrl} className={`${buttonClass} mt-[0.6rem] h-[2.81rem] w-[11.25rem] font-sans text-[1.15rem] font-semibold lg:text-[1.22rem]`}>
                    {data.buttonText}
                    <Icon name="LuArrowRight" className={buttonArrow} strokeWidth={2.2} />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

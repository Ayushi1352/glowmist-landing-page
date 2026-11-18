import Image from "next/image";
import type { ServicesData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeafBranchArt } from "@/components/ui/LineArt";
import { sectionSpace } from "@/components/ui/sectionSpace";

/** Four service cards; every second card sits higher with a taller photo. A card turns maroon only while it is hovered. */
export const ServicesSection = ({ data }: { data?: ServicesData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative isolate scroll-mt-[4.5rem] overflow-hidden bg-[var(--color-bg-soft)] lg:scroll-mt-[5.75rem]">
      <LeafBranchArt className="pointer-events-none absolute right-0 top-[4.45rem] -z-10 hidden h-auto w-[13.6rem] text-[var(--color-leaf-line)] md:block" />
      <div className={`relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-[3.52rem] ${sectionSpace}`}>
        <SectionHeading titleTop={data.titleTop} titleAccent={data.titleAccent} description={data.description} sideLines sizeClass="lg:text-[4.41rem]" descriptionClass="font-heading text-[var(--color-heading)] lg:!text-[1.37rem]" />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-[2.1rem] lg:grid-cols-4 lg:gap-[1.97rem]">
          {data.services.map((service, index) => {
            const raised = index % 2 === 1;
            return (
              <li
                key={service.id}
                data-reveal
                data-reveal-delay={index * 100}
                className={`group relative isolate flex flex-col overflow-hidden rounded-[1.31rem] bg-gradient-to-b from-[var(--color-bg-card)] to-[var(--color-bg-card-light)] text-[var(--color-heading)] shadow-[0_1rem_2rem_-1.4rem_var(--color-shadow-card)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_1.4rem_2.2rem_-1.2rem_var(--color-shadow-strong)] ${
                  raised ? "" : "lg:mb-[1.55rem] lg:mt-[3.05rem]"
                }`}
              >
                {/* the maroon fill fades in on hover (a gradient cannot transition, so it is its own layer) */}
                <span aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary-dark)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className={`relative [container-type:inline-size] ${raised ? "aspect-[420/418] lg:aspect-auto lg:h-[19.9rem]" : "aspect-[413/370] lg:aspect-auto lg:h-[17.4rem]"}`}>
                  <div className="absolute inset-0 overflow-hidden">
                    <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 310px, (min-width: 640px) 46vw, 92vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  {/* the big upright name over the right edge of the photo, sized to the card (55px on a 414px card in the design) */}
                  <span aria-hidden="true" className="pointer-events-none absolute bottom-[8%] right-[3%] rotate-180 whitespace-nowrap font-heading text-[13.3cqw] leading-none text-[var(--color-white)] [text-shadow:0_0.15rem_0.6rem_var(--color-shadow-label)] [writing-mode:vertical-rl]">
                    {service.imageLabel}
                  </span>
                  <span className="absolute bottom-0 left-[8.7%] grid aspect-square w-[21.4%] translate-y-[47%] place-items-center rounded-full border-[0.16rem] border-[var(--color-bg-card)] bg-[var(--color-primary)] text-[var(--color-white)] transition-colors duration-500 group-hover:border-[var(--color-white)]">
                    <Icon name={service.icon} className="size-1/2" strokeWidth={1.8} />
                  </span>
                </div>
                {/* the top padding leaves clear space under the round icon, which hangs half over the photo */}
                <div className="flex-1 pb-8 pl-[2rem] pr-[1.3rem] pt-[3.4rem] lg:pb-[1.6rem]">
                  <h3 className="font-heading text-[1.6rem] font-bold leading-tight text-[var(--color-primary-dark)] transition-colors duration-500 group-hover:text-[var(--color-white)] lg:text-[1.875rem]">{service.title}</h3>
                  <p className="mt-[0.4rem] font-heading text-[1.1rem] leading-[1.45] text-[var(--color-heading)] transition-colors duration-500 group-hover:text-[var(--color-white)] lg:text-[1.25rem] lg:leading-[1.75rem]">{service.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

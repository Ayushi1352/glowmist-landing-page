import Image from "next/image";
import type { ServicesData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Four service cards; every second card sits higher with a taller photo, the featured one is maroon (as in the design) */
export const ServicesSection = ({ data }: { data?: ServicesData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative isolate scroll-mt-[4.5rem] overflow-hidden bg-[var(--color-bg-soft)] lg:scroll-mt-[5.75rem]">
      <Image
        src={data.leafImage}
        alt=""
        width={290}
        height={290}
        sizes="218px"
        className="pointer-events-none absolute right-0 top-[4.45rem] -z-10 hidden w-[13.6rem] md:block lg:left-[76.17rem] lg:right-auto"
      />
      <div className="relative mx-auto max-w-[90rem] px-4 py-14 sm:px-6 sm:py-16 lg:px-[3.52rem] lg:pb-[2.9rem] lg:pt-[3.98rem]">
        <SectionHeading titleTop={data.titleTop} titleAccent={data.titleAccent} description={data.description} sideLines />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-[2.1rem] lg:grid-cols-4 lg:gap-[1.97rem]">
          {data.services.map((service, index) => {
            const raised = index % 2 === 1;
            const featured = service.featured;
            return (
              <li
                key={service.id}
                data-reveal
                data-reveal-delay={index * 100}
                className={`group flex flex-col overflow-hidden rounded-[1.31rem] transition-transform duration-500 hover:-translate-y-1.5 ${
                  raised ? "" : "lg:mb-[1.55rem] lg:mt-[3.05rem]"
                } ${
                  featured
                    ? "bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary-dark)] text-[var(--color-white)] shadow-[0_1.4rem_2.2rem_-1.2rem_var(--color-shadow-strong)]"
                    : "bg-gradient-to-b from-[var(--color-bg-card)] to-[var(--color-bg-card-light)] text-[var(--color-heading)] shadow-[0_1rem_2rem_-1.4rem_var(--color-shadow-card)]"
                }`}
              >
                <div className={`relative h-[17rem] sm:h-[18rem] ${raised ? "lg:h-[19.9rem]" : "lg:h-[17.4rem]"}`}>
                  <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 310px, (min-width: 640px) 46vw, 92vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                  <span
                    className={`absolute bottom-0 left-[1.875rem] grid size-[3.75rem] translate-y-[45%] place-items-center rounded-full border-[0.16rem] bg-[var(--color-primary)] text-[var(--color-white)] ${
                      featured ? "border-[var(--color-white)]" : "border-[var(--color-bg-card)]"
                    }`}
                  >
                    <Icon name={service.icon} className="size-[1.9rem]" strokeWidth={1.8} />
                  </span>
                </div>
                <div className="flex-1 px-[2rem] pb-8 pt-[2.6rem] lg:pb-[1.6rem]">
                  <h3 className={`font-heading text-[1.6rem] font-bold leading-tight lg:text-[1.875rem] ${featured ? "" : "text-[var(--color-primary-dark)]"}`}>{service.title}</h3>
                  <p className={`mt-[0.4rem] font-heading text-[1.1rem] leading-[1.45] lg:text-[1.22rem] ${featured ? "" : "text-[var(--color-heading)]"}`}>{service.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

import Image from "next/image";
import type { FaqData } from "@/types/templates.types";
import { Ornament, titleClass } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

/** Photo on a pink backing card on the left; title and the question list on the right */
export const FaqSection = ({ data }: { data?: FaqData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative isolate scroll-mt-[4.5rem] overflow-hidden bg-[var(--color-bg-alt)] lg:scroll-mt-[5.75rem]">
      <Image
        src={data.leafImage.src}
        alt=""
        width={data.leafImage.width}
        height={data.leafImage.height}
        sizes="150px"
        className="pointer-events-none absolute -right-8 top-[1.4rem] -z-10 hidden w-[9.4rem] opacity-90 md:block"
      />
      <div className="relative mx-auto grid max-w-[90rem] gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:block lg:h-[48.5rem] lg:p-0">
        <div data-reveal className="relative mx-auto w-full max-w-[28.5rem] pl-4 pt-4 lg:absolute lg:left-[2.58rem] lg:top-[5.06rem] lg:max-w-none lg:p-0">
          <span aria-hidden="true" className="absolute left-0 top-0 h-[85%] w-1/2 rounded-[1.875rem] bg-[var(--color-bg-backing)] lg:h-[37.36rem] lg:w-[14.77rem]" />
          <div className="relative aspect-[608/820] overflow-hidden rounded-[1.875rem] lg:ml-[2.11rem] lg:mt-[1.27rem] lg:h-[38.44rem] lg:w-[28.5rem]">
            <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 456px, 92vw" className="object-cover" />
          </div>
        </div>

        <div className="lg:ml-[35.72rem] lg:w-[50.9rem] lg:pt-[1.64rem]">
          <div data-reveal className="text-center lg:pl-[1.31rem] lg:text-left">
            <div className="inline-flex flex-col items-center text-[var(--color-primary)]">
              <Ornament lineClass="bg-[var(--color-nav)]" />
              <h2 className={`mt-[0.2rem] text-[2.2rem] sm:text-[3rem] lg:whitespace-nowrap lg:text-[3.66rem] ${titleClass}`}>
                <span className="text-[var(--color-heading)]">{data.titleTop}</span> {data.titleAccent}
              </h2>
            </div>
            <p className="mt-3 font-sans text-base text-[var(--color-text)] sm:text-lg lg:mt-[0.6rem] lg:text-[1.23rem]">{data.description}</p>
          </div>
          <FaqAccordion items={data.items} />
        </div>
      </div>
    </section>
  );
};

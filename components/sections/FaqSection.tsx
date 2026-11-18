import Image from "next/image";
import type { FaqData } from "@/types/templates.types";
import { Ornament, ornamentGap, titleClass } from "@/components/ui/SectionHeading";
import { DesignFrame } from "@/components/ui/DesignFrame";
import { sectionSpace } from "@/components/ui/sectionSpace";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { LeafBranchArt } from "@/components/ui/LineArt";

/** Photo on a pink backing card on the left; title and the question list on the right */
export const FaqSection = ({ data }: { data?: FaqData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative isolate scroll-mt-[4.5rem] overflow-hidden bg-[var(--color-bg-alt)] lg:scroll-mt-[5.75rem]">
      <LeafBranchArt className="pointer-events-none absolute -right-8 top-[3.76rem] -z-10 hidden h-auto w-[9.4rem] text-[var(--color-leaf-line)] opacity-90 md:block" />
      <div className={`relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-0 ${sectionSpace}`}>
        {/* the content runs from the ornament (1.64rem) to the foot of the photo (44.77rem) */}
        <DesignFrame height={43.13} offset={1.64}>
        <div className="grid gap-10 lg:block">
        <div data-reveal className="relative mx-auto w-full max-w-[28.5rem] pl-4 pt-4 lg:absolute lg:left-[2.58rem] lg:top-[5.06rem] lg:w-auto lg:max-w-none lg:p-0">
          <span aria-hidden="true" className="absolute left-0 top-0 h-[85%] w-1/2 rounded-[1.875rem] bg-[var(--color-bg-backing)] lg:h-[37.36rem] lg:w-[14.77rem]" />
          <div className="relative aspect-[608/820] overflow-hidden rounded-[1.875rem] lg:ml-[2.11rem] lg:mt-[1.27rem] lg:h-[38.44rem] lg:w-[28.5rem]">
            <Image src={data.image} alt={data.imageAlt} fill quality={90} sizes="(min-width: 1024px) 456px, 92vw" className="object-cover" />
          </div>
        </div>

        <div className="lg:ml-[35.72rem] lg:w-[50.9rem] lg:pt-[1.64rem]">
          <div data-reveal className="text-center lg:pl-[1.31rem] lg:text-left">
            <div className="inline-flex flex-col items-center text-[var(--color-primary)]">
              <Ornament lineClass="bg-[var(--color-nav)]" />
              <h2 className={`${ornamentGap} text-[length:min(2.2rem,calc((100vw-2rem)/8.4))] sm:text-[3rem] lg:whitespace-nowrap lg:text-[3.66rem] ${titleClass}`}>
                <span className="text-[var(--color-heading)]">{data.titleTop}</span> {data.titleAccent}
              </h2>
            </div>
            <p className="mt-3 font-sans text-base text-[var(--color-text)] sm:text-lg lg:mt-[0.6rem] lg:text-[1.23rem]">{data.description}</p>
          </div>
          <FaqAccordion items={data.items} />
        </div>
        </div>
        </DesignFrame>
      </div>
    </section>
  );
};

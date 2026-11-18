import Image from "next/image";
import type { TestimonialsData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { sectionSpace } from "@/components/ui/sectionSpace";

/** Centred heading, then the testimonial slider between the flower and spa decorations (from 1024px up; both photos sit on the same blush pink as the section) */
export const TestimonialsSection = ({ data }: { data?: TestimonialsData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative isolate scroll-mt-[4.5rem] overflow-hidden bg-[var(--color-bg-hero)] lg:scroll-mt-[5.75rem]">
      <Image
        src={data.flowersImage.src}
        alt=""
        width={data.flowersImage.width}
        height={data.flowersImage.height}
        sizes="(min-width: 1024px) 270px, 140px"
        className="pointer-events-none absolute left-0 top-[2.65rem] -z-10 hidden w-[16.9rem] lg:block"
      />
      <Image
        src={data.decorImage.src}
        alt=""
        width={data.decorImage.width}
        height={data.decorImage.height}
        sizes="(min-width: 1024px) 416px, 200px"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 hidden w-[26rem] [mask-image:linear-gradient(to_bottom,transparent,black_12%)] lg:block"
      />

      <div className={`relative mx-auto max-w-[90rem] px-4 sm:px-6 ${sectionSpace}`}>
        <SectionHeading titleTop={data.titleTop} titleAccent={data.titleAccent} description={data.description} ornamentLineClass="bg-[var(--color-nav)]" descriptionClass="font-heading text-[var(--color-heading)] lg:!text-[1.45rem]" />
        <TestimonialSlider data={data} />
      </div>
    </section>
  );
};

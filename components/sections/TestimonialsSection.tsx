import Image from "next/image";
import type { TestimonialsData } from "@/types/templates.types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";

/** Centred heading, then the testimonial slider between the flower and spa decorations */
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
        className="pointer-events-none absolute left-0 top-2 -z-10 w-[7.5rem] sm:w-[10rem] lg:top-[3.5rem] lg:w-[16.9rem]"
      />
      <Image
        src={data.decorImage.src}
        alt=""
        width={data.decorImage.width}
        height={data.decorImage.height}
        sizes="(min-width: 1024px) 416px, 200px"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 w-[11rem] opacity-90 sm:w-[15rem] lg:bottom-auto lg:top-[34.45rem] lg:w-[26rem] lg:opacity-100"
      />

      <div className="relative mx-auto max-w-[90rem] px-4 pb-44 pt-14 sm:px-6 sm:pb-52 sm:pt-16 lg:pb-[7rem] lg:pt-[3.75rem]">
        <SectionHeading titleTop={data.titleTop} titleAccent={data.titleAccent} description={data.description} ornamentLineClass="bg-[var(--color-nav)]" descriptionClass="font-heading text-[var(--color-heading)] lg:!text-[1.45rem]" />
        <TestimonialSlider data={data} />
      </div>
    </section>
  );
};

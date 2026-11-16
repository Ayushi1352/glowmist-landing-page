/*
  Sizes on this page are taken from the 1920px design: 1 design pixel = 0.046875rem
  (at 1440px the root font is 16px, so the whole 1920px design shows at 75%).
*/

type OrnamentProps = {
  /** colour of the two hairlines beside the lotus */
  lineClass?: string;
  className?: string;
};

/** The lotus from the logo between two short lines, above every section title */
export const Ornament = ({ lineClass = "bg-[var(--color-primary)]", className = "" }: OrnamentProps) => (
  <span aria-hidden="true" className={`flex items-center justify-center gap-[1.0rem] ${className}`}>
    <span className={`h-[0.14rem] w-[3.25rem] rounded-full sm:w-[4.4rem] ${lineClass}`} />
    <span className="lotus-mark block h-[2.6rem] w-[3.9rem] sm:h-[3.375rem] sm:w-[5rem]" />
    <span className={`h-[0.14rem] w-[3.25rem] rounded-full sm:w-[4.4rem] ${lineClass}`} />
  </span>
);

/** Bold italic serif title; the accent words in the brand colour */
export const titleClass = "font-heading font-bold italic leading-[1.1] tracking-[-0.01em]";

type HeadingProps = {
  titleTop: string;
  titleAccent: string;
  description?: string;
  /** the long hairlines beside the title (Our Services) */
  sideLines?: boolean;
  /** brown ornament lines (Testimonials) */
  ornamentLineClass?: string;
  accentClass?: string;
  topClass?: string;
  descriptionClass?: string;
  className?: string;
};

/** Centred section intro: lotus ornament, title, one line of text */
export const SectionHeading = ({
  titleTop,
  titleAccent,
  description,
  sideLines = false,
  ornamentLineClass,
  accentClass = "text-[var(--color-primary)]",
  topClass = "text-[var(--color-heading)]",
  descriptionClass = "font-heading text-[var(--color-heading)]",
  className = "",
}: HeadingProps) => (
  <div data-reveal className={`text-center text-[var(--color-primary)] ${className}`}>
    <Ornament lineClass={ornamentLineClass} />
    <h2 className={`mt-[0.6rem] flex items-center justify-center gap-[1.65rem] text-[2.5rem] sm:text-[3.4rem] lg:text-[4.41rem] ${titleClass}`}>
      {sideLines && <span aria-hidden="true" className="h-[0.1rem] w-[6.4rem] bg-[var(--color-divider)] max-md:hidden" />}
      <span>
        <span className={topClass}>{titleTop}</span> <span className={accentClass}>{titleAccent}</span>
      </span>
      {sideLines && <span aria-hidden="true" className="h-[0.1rem] w-[6.4rem] bg-[var(--color-divider)] max-md:hidden" />}
    </h2>
    {description && <p className={`mx-auto mt-[0.5rem] max-w-[60rem] text-[1.0625rem] leading-snug sm:text-[1.3125rem] ${descriptionClass}`}>{description}</p>}
  </div>
);

/** Arrow button look shared by the header, hero and package buttons */
export const buttonClass =
  "group inline-flex items-center justify-center gap-[0.6rem] rounded-full bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary-dark)] text-[var(--color-white)] shadow-[0_0.5rem_1.25rem_-0.5rem_var(--color-shadow-strong)] transition-[filter,transform] duration-300 hover:-translate-y-0.5 hover:brightness-110";
export const buttonArrow = "size-[1.15em] transition-transform duration-300 group-hover:translate-x-1";

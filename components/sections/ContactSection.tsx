import Image from "next/image";
import type { CompanyData, ContactData, ContactFormData } from "@/types/templates.types";
import { ContactForm } from "@/components/sections/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { Ornament, ornamentGap, titleClass } from "@/components/ui/SectionHeading";
import { sectionSpace } from "@/components/ui/sectionSpace";

/** Spa photo background; white title in the middle, contact details on the left and the message form on the right */
type Props = {
  data?: ContactData;
  form?: ContactFormData;
  company: CompanyData;
  /** choices of the form’s service list (built in app/page.tsx from the Services and Packages sections) */
  serviceOptions: string[];
};

export const ContactSection = ({ data, form, company, serviceOptions }: Props) => {
  if (!data) return null;

  return (
    <section id={data.id} className="relative isolate scroll-mt-[4.5rem] overflow-hidden bg-[var(--color-bg-dark)] lg:scroll-mt-[5.75rem]">
      {/*
        Background: a calm rose-brown gradient, with the spa photo only on the left edge, fading out before the
        contact details (so the details and the form always sit on a clean colour).
      */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-b from-[var(--color-contact-tint-top)] via-[var(--color-contact-tint-mid)] to-[var(--color-contact-tint-bottom)]" />
      <div aria-hidden="true" className="absolute inset-y-0 left-0 -z-20 w-[55%] opacity-60 [mask-image:linear-gradient(to_right,black_40%,transparent)] sm:w-[40%] lg:w-[27rem] lg:opacity-100 lg:[mask-image:linear-gradient(to_right,black_55%,transparent)]">
        <Image src={data.backgroundImage} alt="" fill sizes="(min-width: 1024px) 432px, 55vw" className="object-cover object-[35%_70%]" />
      </div>
      {/* a light shade on phones and tablets, where the text runs over the bright towels */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[var(--color-contact-shade)] lg:hidden" />

      <div className={`mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-0 ${sectionSpace}`}>
        <div data-reveal className="text-center text-[var(--color-white)]">
          <Ornament lineClass="bg-[var(--color-white)]" />
          <h2 className={`${ornamentGap} text-[2.8rem] sm:text-[3.6rem] lg:text-[5.2rem] ${titleClass}`}>
            {data.titleTop} <span className="text-[var(--color-pink-light)]">{data.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-[0.5rem] max-w-[40rem] font-heading text-[1.1rem] leading-[1.5] sm:text-[1.2rem] lg:max-w-none lg:text-[1.55rem] lg:leading-[1.9rem]">
            {data.descriptionLines.map((line) => (
              <span key={line} className="lg:block">
                {line}{" "}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:mt-[1.4rem] lg:flex lg:items-start lg:gap-0">
          <ul data-reveal className="mx-auto grid w-full max-w-[26rem] lg:ml-[27.1rem] lg:mr-0 lg:mt-[2.1rem] lg:w-[20rem] lg:max-w-none">
            {company.contactItems.map((item, index) => {
              const external = item.url.startsWith("http");
              return (
                <li key={item.id} className={index > 0 ? "relative pt-[1.1rem] before:absolute before:left-[5.3rem] before:right-0 before:top-0 before:h-[0.1rem] before:bg-[var(--color-white-40)]" : ""}>
                  <a
                    href={item.url}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-[1.4rem] pb-[1.1rem] text-[var(--color-white)]"
                  >
                    <span className="grid size-[3.94rem] shrink-0 place-items-center rounded-full bg-[var(--color-bg-chip)] text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-105">
                      <Icon name={item.icon} className="size-[1.75rem]" strokeWidth={1.9} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-heading text-[1.3rem] font-bold leading-tight transition-colors group-hover:text-[var(--color-pink-light)] lg:text-[1.5rem]">{item.title}</span>
                      <span className={`mt-[0.2rem] block break-words font-sans text-[1.1rem] leading-[1.6rem] group-hover:underline group-hover:underline-offset-4 ${item.lines.length > 1 ? "lg:text-[1.13rem] lg:leading-[1.45rem]" : "lg:text-[1.45rem]"}`}>
                        {item.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div
            data-reveal
            className="mx-auto w-full max-w-[38.2rem] rounded-[1.6rem] border-[0.14rem] border-[var(--color-glass-border)] bg-[var(--color-glass)] px-5 pb-7 pt-6 shadow-[0_0_2.5rem_-0.5rem_var(--color-shadow-glow)] backdrop-blur-md sm:px-[2.25rem] lg:ml-auto lg:mr-[3.05rem] lg:w-[38.2rem] lg:rounded-[2.06rem] lg:pb-[1.8rem] lg:pt-[1.4rem]"
          >
            <h3 className="text-center font-heading text-[2rem] font-bold leading-[1.2] text-[var(--color-primary)] lg:text-[2.44rem]">{data.formTitle}</h3>
            <ContactForm data={form} serviceOptions={serviceOptions} />
          </div>
        </div>
      </div>
    </section>
  );
};

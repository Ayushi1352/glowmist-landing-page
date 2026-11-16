import Image from "next/image";
import type { CompanyData, FooterData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

const heading = "font-heading text-[1.6rem] font-bold leading-tight text-[var(--color-white)] lg:text-[1.78rem]";
const underline = "mt-[0.45rem] block h-[0.19rem] w-[3.75rem] rounded-full bg-[var(--color-pink)]";
const divider = "hidden w-[0.1rem] shrink-0 bg-[var(--color-pink)] opacity-70 lg:mt-[4rem] lg:block lg:h-[14.3rem]";

// Logo, text and social links; quick links; contact details; opening hours; then the copyright line.
export const Footer = async ({ data, company }: { data?: FooterData; company: CompanyData }) => {
  if (!data) return null;
  const copyright = data.copyrightText.replace("{year}", String(await currentYear()));

  return (
    <footer className="relative isolate overflow-hidden bg-[var(--color-bg-dark)] text-[var(--color-white)]">
      <Image src={data.lilyImage} alt="" width={160} height={460} sizes="120px" className="pointer-events-none absolute left-0 top-[2.67rem] -z-10 w-[5rem] opacity-60 lg:w-[7.5rem] lg:opacity-100" />
      <Image
        src={data.decorImage}
        alt=""
        width={540}
        height={200}
        sizes="(min-width: 1024px) 405px, 260px"
        className="pointer-events-none absolute right-0 top-[26rem] -z-10 hidden w-[25.3rem] lg:top-[18.4rem] lg:block"
      />

      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-0">
        <div className="grid gap-10 pb-10 pt-12 sm:grid-cols-2 lg:flex lg:h-[28.1rem] lg:gap-0 lg:pb-0 lg:pt-[2.67rem]">
          {/* brand */}
          <div className="lg:ml-[7.83rem] lg:w-[18.2rem]">
            <Image src={company.logoLight} alt={company.logoAlt} width={company.logoWidth} height={company.logoHeight} sizes="221px" className="h-auto w-[12rem] lg:ml-[1.3rem] lg:w-[13.83rem]" />
            <p className="mt-5 font-sans text-[1.02rem] leading-[1.7] text-[var(--color-white-85)] lg:mt-[2.4rem] lg:text-[1.125rem] lg:leading-[1.83rem] lg:tracking-[-0.015em]">{data.description}</p>
            <ul aria-label={data.socialLabel} className="mt-6 flex gap-[0.8rem] lg:ml-[0.23rem] lg:mt-[1.6rem]">
              {data.socialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid size-[2.625rem] place-items-center rounded-full border-[0.1rem] border-[var(--color-pink)] transition-colors duration-300 hover:bg-[var(--color-pink)]"
                  >
                    <Icon name={social.icon} className="size-[1.1rem]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <span aria-hidden="true" className={`${divider} lg:ml-[1.7rem]`} />

          {/* quick links */}
          <nav aria-label={data.quickLinksTitle} className="lg:ml-[1.73rem] lg:mt-[2.8rem] lg:w-[12.25rem]">
            <h2 className={heading}>{data.quickLinksTitle}</h2>
            <span aria-hidden="true" className={underline} />
            <ul className="mt-5 grid gap-3 lg:mt-[1.1rem] lg:gap-0">
              {data.quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.url} className="group inline-flex items-center gap-[0.9rem] font-sans text-[1.05rem] text-[var(--color-white-85)] transition-colors hover:text-[var(--color-pink)] lg:ml-[0.84rem] lg:h-[2.3rem] lg:text-[1.125rem]">
                    <Icon name="LuChevronRight" className="size-[1.05rem] text-[var(--color-pink)] transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <span aria-hidden="true" className={divider} />

          {/* contact details */}
          <div className="lg:ml-[2.67rem] lg:mt-[2.8rem] lg:w-[18.3rem]">
            <h2 className={heading}>{data.contactTitle}</h2>
            <span aria-hidden="true" className={underline} />
            <ul className="mt-5 grid gap-[1.35rem] lg:mt-[1.6rem]">
              {data.contactItems.map((item) => {
                const external = item.url.startsWith("http");
                return (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      aria-label={`${item.title}: ${item.lines.join(" ")}`}
                      className="group flex items-center gap-[1.125rem] font-sans text-[1.02rem] leading-[1.36rem] text-[var(--color-white-85)] transition-colors hover:text-[var(--color-white)] lg:text-[1.06rem]"
                    >
                      <span className="grid size-[2.34rem] shrink-0 place-items-center rounded-[0.47rem] bg-[var(--color-pink)] text-[var(--color-white)]">
                        <Icon name={item.icon} className="size-[1.15rem]" />
                      </span>
                      <span className="min-w-0 break-words">
                        {item.lines.map((line) => (
                          <span key={line} className="block lg:whitespace-nowrap">
                            {line}
                          </span>
                        ))}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <span aria-hidden="true" className={divider} />

          {/* opening hours */}
          <div className="lg:ml-[2.25rem] lg:mt-[2.8rem] lg:w-[24rem]">
            <h2 className={heading}>{data.hoursTitle}</h2>
            <span aria-hidden="true" className={underline} />
            <div className="mt-5 flex items-start gap-[1.5rem] lg:mt-[1.2rem]">
              <span className="grid size-[2.34rem] shrink-0 place-items-center rounded-[0.47rem] bg-[var(--color-pink)] text-[var(--color-white)]">
                <Icon name={data.hoursIcon} className="size-[1.25rem]" strokeWidth={2} />
              </span>
              <dl className="grid grid-cols-[auto_auto_auto] items-center gap-x-[0.8rem] font-sans text-[0.95rem] leading-[1.92rem] text-[var(--color-white-85)] lg:text-[0.92rem]">
                {data.hours.map((row) => (
                  <div key={row.id} className="contents">
                    <dt className="lg:whitespace-nowrap">{row.day}</dt>
                    <span aria-hidden="true">:</span>
                    <dd className="text-[var(--color-white)]">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="border-t-[0.1rem] border-[var(--color-pink)] py-6 text-center font-sans text-[0.98rem] sm:text-left lg:mx-[3.98rem] lg:pb-[1.9rem] lg:pt-[1.3rem] lg:text-[1.2rem]">
          <p className="text-[var(--color-white-85)]">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

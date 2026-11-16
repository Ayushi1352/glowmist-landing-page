"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CompanyData, HeaderData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { buttonArrow, buttonClass } from "@/components/ui/SectionHeading";

/** id of the landing page section a link points to ("#about" → "about") */
const sectionId = (url: string) => url.replace(/^#/, "");

/**
 * Keeps track of the section at the middle of the screen, so its link is shown as the current one.
 * The current link is the last menu section whose top has passed the middle of the screen.
 */
const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState(ids[0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const middle = window.innerHeight * 0.5;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= middle) current = id;
      }
      setActive(current);
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return { active, scrolled };
};

export const Header = ({ data, company }: { data?: HeaderData; company: CompanyData }) => {
  const [ids] = useState(() => data?.navLinks.map((link) => sectionId(link.url)) ?? []);
  const { active, scrolled } = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!data) return null;

  /** The logo scrolls back to the top and drops any "#section" from the address bar, without reloading the page */
  const goHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    window.scrollTo({ top: 0 });
    if (window.location.hash) history.pushState(null, "", window.location.pathname + window.location.search);
  };

  // at the top of the page the header is the design's tall bar; once the page scrolls it gets compact with a shadow
  const compact = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 mx-auto max-w-[120rem] bg-[var(--color-bg-hero)] transition-shadow duration-300 ${
        compact ? "shadow-[0_0.5rem_1.75rem_-1rem_var(--color-shadow-card)]" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-[90rem] items-center gap-4 px-4 transition-[height] duration-300 sm:px-6 lg:pl-[4.69rem] lg:pr-[2.34rem] ${
          compact ? "h-[4.5rem] lg:h-[5.75rem]" : "h-[4.5rem] sm:h-[5.5rem] lg:h-[9.375rem]"
        }`}
      >
        <Link href={data.logoUrl} onClick={goHome} aria-label={data.homeLabel} className="shrink-0">
          <Image
            src={company.logo}
            alt={company.logoAlt}
            width={company.logoWidth}
            height={company.logoHeight}
            preload
            sizes="(min-width: 1024px) 204px, 140px"
            className={`h-auto transition-[width] duration-300 ${compact ? "w-[7.5rem] lg:w-[8.5rem]" : "w-[7.5rem] sm:w-[8.75rem] lg:w-[12.75rem]"}`}
          />
        </Link>

        <span aria-hidden="true" className="ml-[3.23rem] hidden h-[2.8rem] w-[0.1rem] bg-[var(--color-nav)] opacity-60 lg:block" />

        <nav aria-label={data.mainNavLabel} className="ml-[1.4rem] hidden items-center lg:flex">
          {data.navLinks.map((link) => {
            const current = sectionId(link.url) === active;
            return (
              <a
                key={link.id}
                href={link.url}
                aria-current={current ? "location" : undefined}
                className={`whitespace-nowrap rounded-full px-[1.3rem] py-[0.62rem] font-heading text-[1.32rem] font-bold leading-none transition-colors ${
                  current ? "bg-[var(--color-bg-pill)] text-[var(--color-heading)]" : "text-[var(--color-nav)] hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a href={data.buttonUrl} className={`${buttonClass} h-11 px-5 font-heading text-base font-bold max-sm:hidden lg:h-[2.95rem] lg:w-[11.6rem] lg:px-0 lg:text-[1.3rem]`}>
            {data.buttonText}
            <Icon name="LuArrowRight" className={buttonArrow} strokeWidth={2.2} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? data.closeMenuLabel : data.openMenuLabel}
            className="grid size-11 place-items-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-primary)] transition-colors hover:bg-[var(--color-bg-pill)] lg:hidden"
          >
            <Icon name={open ? "LuX" : "LuMenu"} className="size-6" />
          </button>
        </div>
      </div>

      {/* phones and tablets: a card under the bar, only as tall as its links */}
      <nav
        id="mobile-menu"
        aria-label={data.mobileNavLabel}
        className={`absolute inset-x-4 top-full mt-2 grid max-h-[calc(100dvh-5.5rem)] overflow-hidden rounded-3xl bg-[var(--color-white)] shadow-[0_1.25rem_3.125rem_-1.25rem_var(--color-shadow-menu)] transition-[grid-template-rows,opacity] duration-500 sm:inset-x-6 lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-y-auto">
          <ul className="flex flex-col px-5 py-4 sm:px-6">
            {data.navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between border-b border-[var(--color-border)] py-3.5 font-heading text-lg font-bold transition-colors hover:text-[var(--color-primary)] ${
                    sectionId(link.url) === active ? "text-[var(--color-primary)]" : "text-[var(--color-nav)]"
                  }`}
                >
                  {link.label}
                  <Icon name="LuChevronRight" className="size-4 text-[var(--color-primary)]" strokeWidth={2.2} />
                </a>
              </li>
            ))}
            <li className="pt-5 sm:hidden">
              <a href={data.buttonUrl} onClick={() => setOpen(false)} className={`${buttonClass} h-12 w-full font-heading text-base font-bold`}>
                {data.buttonText}
                <Icon name="LuArrowRight" className={buttonArrow} strokeWidth={2.2} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

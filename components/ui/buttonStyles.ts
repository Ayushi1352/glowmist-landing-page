/** Arrow button look shared by the header, hero, package and form buttons: maroon, turns dark on hover (a fading layer, so the gradient changes smoothly) */
export const buttonClass =
  "group relative isolate inline-flex items-center justify-center gap-[0.6rem] overflow-hidden rounded-full bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary-dark)] text-[var(--color-white)] shadow-[0_0.5rem_1.25rem_-0.5rem_var(--color-shadow-strong)] transition-transform duration-300 before:absolute before:inset-0 before:-z-10 before:bg-[var(--color-heading)] before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-0.5 hover:before:opacity-100";
/** arrow inside a button that turns up-right on hover */
export const buttonArrow = "size-[1.15em] shrink-0 transition-transform duration-300 group-hover:-rotate-45";

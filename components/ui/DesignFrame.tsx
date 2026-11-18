import type { CSSProperties, ReactNode } from "react";

type Props = {
  /** height of the section's content from its first element to its last, in rem (as the pieces are placed) */
  height: number;
  /** where that content starts, in rem from the top of the box the pieces are placed in */
  offset: number;
  children: ReactNode;
};

/**
 * From 1024px up some sections (Hero, About, FAQ) place their pieces where the design has them, measured from the
 * top of the section. This frame is exactly as tall as that content and moves it up by its offset, so only the
 * section's own padding (sectionSpace) is left above and below it. Phones and tablets keep the normal flow.
 */
export const DesignFrame = ({ height, offset, children }: Props) => (
  <div className="relative lg:h-[var(--frame-h)]" style={{ "--frame-h": `${height}rem`, "--frame-y": `${-offset}rem` } as CSSProperties}>
    <div className="lg:absolute lg:inset-x-0 lg:top-[var(--frame-y)]">{children}</div>
  </div>
);

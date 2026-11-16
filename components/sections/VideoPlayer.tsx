"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

type Props = {
  url: string;
  playLabel: string;
  closeLabel: string;
  title: string;
};

/**
 * Turns the link from templates.json into something the popup can play:
 * YouTube and Vimeo links become their embed players (autoplay), anything else (an .mp4 file) plays in a <video>.
 * YouTube Shorts are upright, so their popup is upright too.
 */
const toEmbed = (url: string): { kind: "iframe" | "video"; src: string; vertical?: boolean } => {
  const youtube = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  if (youtube) return { kind: "iframe", src: `https://www.youtube.com/embed/${youtube[1]}?autoplay=1&rel=0`, vertical: url.includes("/shorts/") };
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return { kind: "iframe", src: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1` };
  return { kind: "video", src: url };
};

/** Gold play button over the spa photo; opens the video in a popup (closes on ×, Esc or a click outside) */
export const VideoPlayer = ({ url, playLabel, closeLabel, title }: Props) => {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const media = toEmbed(url);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={playLabel}
        className="group absolute left-[48.9%] top-[52.4%] grid size-[4.5rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--color-white-35)] sm:size-[6.8rem]"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-white-35)] [animation-duration:2.4s] motion-reduce:hidden" aria-hidden="true" />
        <span className="relative grid size-[3.2rem] place-items-center rounded-full border-[0.2rem] border-[var(--color-white)] bg-[var(--color-gold)] text-[var(--color-white)] shadow-[0_0.6rem_1.4rem_-0.5rem_var(--color-shadow-strong)] transition-[transform,background-color] duration-300 group-hover:scale-110 group-hover:bg-[var(--color-primary)] sm:size-[4.875rem] sm:border-[0.23rem]">
          <Icon name="FaPlay" className="ml-[0.2rem] size-[1.1rem] sm:size-[1.6rem]" />
        </span>
      </button>

      <dialog
        ref={dialog}
        onClose={() => setOpen(false)}
        // a click on the dark backdrop (the dialog element itself, outside the player) closes it
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
        aria-label={title}
        className={`m-auto overflow-visible ${media.vertical ? "w-[min(88vw,calc((100dvh-7rem)*9/16),24rem)]" : "w-[min(92vw,60rem)]"} bg-transparent p-0 backdrop:bg-[var(--color-video-backdrop)] backdrop:backdrop-blur-sm`}
      >
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={closeLabel}
            className="absolute -top-12 right-0 grid size-10 place-items-center rounded-full bg-[var(--color-white)] text-[var(--color-heading)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]"
          >
            <Icon name="LuX" className="size-5" strokeWidth={2.4} />
          </button>
          {/* rendered only while open, so the video stops when the popup closes */}
          {open && (
            <div className={`${media.vertical ? "aspect-[9/16]" : "aspect-video"} w-full overflow-hidden rounded-2xl bg-[var(--color-bg-dark)] shadow-[0_2rem_4rem_-1rem_var(--color-shadow-menu)]`}>
              {media.kind === "iframe" ? (
                <iframe src={media.src} title={title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen className="size-full border-0" />
              ) : (
                <video src={media.src} title={title} controls autoPlay playsInline className="size-full" />
              )}
            </div>
          )}
        </div>
      </dialog>
    </>
  );
};

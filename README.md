# GlowMist Landing Page

One-page landing page for **GlowMist Beauty & Spa**, built with Next.js 16, React 19 and Tailwind CSS 3 from the GlowMist design. It follows the same project structure as the other landing pages (Haulix, Constrix, Magical Moments, Tastera): every piece of text, image, icon and link lives in `data/templates.json`, and the components only render it.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx            fonts, metadata (title, description, favicon), header, footer, scroll reveal
  page.tsx              the sections in page order
  globals.css           theme colours (CSS variables)
components/
  common/               Header (tall bar that turns compact on scroll, dropdown card menu on phones and tablets), Footer
  sections/             Hero, About, Services, Experience (+ VideoPlayer), Packages, Testimonials (+ TestimonialSlider),
                        FAQ (+ FaqAccordion), Contact (+ ContactForm)
  ui/                   Icon, LineArt (leaf sprigs, lily, lotus, petals drawings), SectionHeading (ornament, title),
                        sectionSpace, DesignFrame, buttonStyles, ScrollReveal, CountUp, FormSuccess, useDummySubmit,
                        useActiveSection, text
data/templates.json     all content (sections and their variants)
types/templates.types.ts
public/images/          photos, logo (dark and white), favicon (WebP / PNG)
```

Each section's `id` in `templates.json` matches a header link (`#about` → `id="about"`).

Content is written once: the footer lists the company contact details (`common.company.contactItems`, picked by `Footer.contactIds`), and the contact form's service list is built in `app/page.tsx` from the Services and Packages sections.

## Images and icons

- **Photos** (`public/images/*.webp`) are plain, full-bleed pictures. Frames and shapes are drawn with CSS on top of them, not baked into the image: the hero arch and white photo frames, the About arch with its thin arc and the framed second photo, the upright service names over the service photos, the round icon badges on the service and package cards, the play button on the Experience photo, the round client photos and the Contact background (one upright photo, blurred, mirrored and veiled in CSS). A new photo only needs to replace the file.
- **Icons** are [react-icons](https://react-icons.github.io/react-icons/) names stored in `templates.json` (`"icon": "PiFlowerLotus"`). A new icon is added once to the list in `components/ui/Icon.tsx`.
- **Line drawings and petals** (the lotus above every title, the leaf sprigs in the hero, Services and FAQ, the lily in the footer and the rose petals in the hero) are SVG in `components/ui/LineArt.tsx`. The lines draw in `currentColor` (`--color-leaf-line`, `--color-lily-line`); the petals use `--color-petal-*` from `globals.css`.
- The flowers and spa decor in Testimonials and the spa decor in the footer are photos placed as decorations; they carry their own pixel size (`{ src, width, height }`).

## Responsive

Designed for phones, tablets, 1024px and desktop. From 1024px up the root font size follows the 1440px design (`1rem = 100vw / 90`, at most 16px), so 1024px shows exactly the 1440px layout, only smaller. Sizes are taken from the 1920px design (1 design pixel = 0.046875rem).

Every section has the same space above and below its content (`sectionSpace` in `components/ui/sectionSpace.ts`), so all gaps between sections match on phones, tablets, 1024px and 1440px. Hero, About and FAQ place their pieces where the design has them; `DesignFrame` keeps those pieces in place and trims the design's uneven gaps.

On phones and tablets no heading takes more than two lines: the hero, About and section titles shrink with the screen width (never above their normal size).

## Interactions

- Service and package cards turn maroon only while hovered (none is highlighted by default); the Glow package keeps its "Most Popular" badge.
- Testimonials are a slider (arrows, dots, autoplay that pauses on hover).
- FAQ: one answer open at a time; every question opens and closes on click.

## Video

The play button on the Experience photo shows only when `videoUrl` in `templates.json` has a link (YouTube, YouTube Shorts, Vimeo or an .mp4 file). It opens the video in a popup; with an empty `videoUrl` only the photo is shown.

## Forms

The contact form uses a dummy submit (`useDummySubmit`): it shows a sending state and a thank-you message in place of the button, but nothing is sent anywhere yet.

# GlowMist Landing Page

One-page landing page for **GlowMist Beauty & Spa**, built with Next.js 16, React 19 and Tailwind CSS 3 from the GlowMist design. It follows the same project structure as the other landing pages: every piece of text, image and link lives in `data/templates.json`, and the components only render it.

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
  globals.css           theme colours (CSS variables) and the lotus mark
components/
  common/               Header (tall bar that turns compact on scroll, dropdown card menu on phones and tablets), Footer
  sections/             Hero, About, Services, Experience (+ VideoPlayer), Packages, Testimonials (+ TestimonialSlider),
                        FAQ (+ FaqAccordion), Contact (+ ContactForm)
  ui/                   Icon, SectionHeading (ornament, title), buttonStyles, ScrollReveal, FormSuccess, useDummySubmit
data/templates.json     all content (sections and their variants)
types/templates.types.ts
public/images/          GlowMist photos, decorations, logos and favicon (WebP)
```

Each section's `id` in `templates.json` matches a header link (`#about` → `id="about"`).

## Responsive

Designed for phones, tablets, 1024px and desktop. From 1024px up the root font size follows the 1440px design (`1rem = 100vw / 90`, at most 16px), so 1024px shows exactly the 1440px layout, only smaller. Sizes are taken from the 1920px design (1 design pixel = 0.046875rem).

## Video

The play button on the Experience photo shows only when `videoUrl` in `templates.json` has a link (YouTube, YouTube Shorts, Vimeo or an .mp4 file). It opens the video in a popup; with an empty `videoUrl` only the photo is shown.

## Forms

The contact form uses a dummy submit (`useDummySubmit`): it shows a sending state and a thank-you message in place of the button, but nothing is sent anywhere yet.

import rawData from "@/data/templates.json";
import type { SpaTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

const templateData: SpaTemplateData = rawData;
const sectionData = templateData.categories.Spa.sections;
const commonData = templateData.common;

/*
  One landing page built from the GlowMist design. Every button leads to the contact form.
  Each section's id (templates.json) matches the header and footer links ("#about" → id="about").
*/
export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.SpaHero1} />
      <AboutSection data={sectionData.About?.variants?.SpaAbout1} />
      <ServicesSection data={sectionData.Services?.variants?.SpaServices1} />
      <ExperienceSection data={sectionData.Experience?.variants?.SpaExperience1} />
      <PackagesSection data={sectionData.Packages?.variants?.SpaPackages1} />
      <TestimonialsSection data={sectionData.Testimonials?.variants?.SpaTestimonials1} />
      <FaqSection data={sectionData.Faq?.variants?.SpaFaq1} />
      <ContactSection
        data={sectionData.Contact?.variants?.SpaContact1}
        form={sectionData.ContactForm?.variants?.SpaContactForm1}
        company={commonData.company}
      />
    </main>
  );
}

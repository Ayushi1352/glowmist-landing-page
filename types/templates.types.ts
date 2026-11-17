import type { CSSProperties } from "react";

export interface ThemeFonts {
  primary: string;
  heading: string;
  display: string;
}

/** CSS variables set on <html> from templates.json (fonts and the lotus ornament) */
export type RootVariables = CSSProperties & {
  "--font-primary": string;
  "--font-heading": string;
  "--font-display": string;
  "--lotus-mark": string;
};

export interface ThemeData {
  fonts: ThemeFonts;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
  lang: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface ContactItem {
  id: string;
  icon: string;
  /** icon in the footer, when it differs from `icon` */
  footerIcon?: string;
  title: string;
  lines: string[];
  url: string;
}

export interface CompanyData {
  name: string;
  logo: string;
  logoLight: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  /** the lotus from the logo, used for the section ornaments */
  mark: string;
  contactItems: ContactItem[];
}

/** A decoration image with its own pixel size (so the page reserves its space before it loads) */
export interface DecorImage {
  src: string;
  width: number;
  height: number;
}

export interface SocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface OpeningHour {
  id: string;
  day: string;
  time: string;
}

export interface FooterData {
  description: string;
  quickLinksTitle: string;
  quickLinks: LinkItem[];
  contactTitle: string;
  /** which of the company contact details the footer lists, in order */
  contactIds: string[];
  hoursTitle: string;
  hoursIcon: string;
  hours: OpeningHour[];
  socialLabel: string;
  socialLinks: SocialLink[];
  copyrightText: string;
  lilyImage: DecorImage;
  decorImage: DecorImage;
}

export interface HeaderData {
  logoUrl: string;
  homeLabel: string;
  navLinks: LinkItem[];
  buttonText: string;
  buttonUrl: string;
  mainNavLabel: string;
  mobileNavLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
}

/** A title with its highlighted words (titleAccent) in the brand colour */
export interface SplitTitle {
  titleTop: string;
  titleAccent: string;
}

export interface IconCard {
  id: string;
  icon: string;
  title: string;
  text: string;
}

export interface HeroData extends SplitTitle {
  id: string;
  label: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
  imageAlt: string;
  secondImage: string;
  secondImageAlt: string;
  petalsImage: DecorImage;
  leafImage: DecorImage;
  cornerLeafImage: DecorImage;
}

export interface AboutData extends SplitTitle {
  id: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  features: IconCard[];
}

export interface ServiceCard extends IconCard {
  image: string;
  imageAlt: string;
  featured: boolean;
}

export interface ServicesData extends SplitTitle {
  id: string;
  description: string;
  leafImage: DecorImage;
  services: ServiceCard[];
}

export interface StatItem {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface ExperienceData extends SplitTitle {
  id: string;
  description: string;
  image: string;
  imageAlt: string;
  /** YouTube, Vimeo or .mp4 link; when empty the play button is not shown */
  videoUrl: string;
  videoTitle: string;
  playLabel: string;
  closeVideoLabel: string;
  stats: StatItem[];
}

export interface PackageCard {
  id: string;
  nameAccent: string;
  name: string;
  description: string;
  duration: string;
  treatments: string;
  price: string;
  image: string;
  imageAlt: string;
  featured: boolean;
}

export interface PackagesData extends SplitTitle {
  id: string;
  description: string;
  badgeIcon: string;
  badgeText: string;
  packageIcon: string;
  durationIcon: string;
  treatmentsIcon: string;
  buttonText: string;
  buttonUrl: string;
  packages: PackageCard[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  stars: number;
}

export interface TestimonialsData extends SplitTitle {
  id: string;
  description: string;
  flowersImage: DecorImage;
  decorImage: DecorImage;
  ratingLabel: string;
  previousLabel: string;
  nextLabel: string;
  showLabel: string;
  /** the testimonial shown first (the middle photo of the design) */
  startIndex: number;
  items: TestimonialItem[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData extends SplitTitle {
  id: string;
  description: string;
  image: string;
  imageAlt: string;
  leafImage: DecorImage;
  items: FaqItem[];
}

export interface ContactData extends SplitTitle {
  id: string;
  descriptionLines: string[];
  backgroundImage: string;
  formTitle: string;
}

export interface ContactFormData {
  fields: {
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
  };
  button: string;
  sending: string;
  successTitle: string;
  success: string;
  closeLabel: string;
}

interface Variants<T> {
  variants: Record<string, T>;
}

export interface TemplateComponent {
  key: string;
  component: string;
}

export interface SpaTemplateData {
  common: {
    theme: ThemeData;
    metadata: SiteMetadataData;
    company: CompanyData;
    Footer: FooterData;
  };
  categories: {
    Spa: {
      sections: {
        Header?: Variants<HeaderData>;
        Hero?: Variants<HeroData>;
        About?: Variants<AboutData>;
        Services?: Variants<ServicesData>;
        Experience?: Variants<ExperienceData>;
        Packages?: Variants<PackagesData>;
        Testimonials?: Variants<TestimonialsData>;
        Faq?: Variants<FaqData>;
        Contact?: Variants<ContactData>;
        ContactForm?: Variants<ContactFormData>;
      };
      templateComponents: {
        [template: string]: {
          shared: Record<string, string>;
          pages: Record<string, { components: TemplateComponent[] }>;
        };
      };
    };
  };
}

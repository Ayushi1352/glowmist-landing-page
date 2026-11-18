import type { IconType } from "react-icons";
import { FaCrown, FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaPinterestP, FaPlay, FaStar, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  LuArrowRight,
  LuCalendarDays,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuClock,
  LuGlobe,
  LuLeaf,
  LuMail,
  LuMenu,
  LuMinus,
  LuPlus,
  LuScissors,
  LuX,
} from "react-icons/lu";
import { PiFlowerLotus, PiUsersThree } from "react-icons/pi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { TbBottle, TbTargetArrow } from "react-icons/tb";

// The design's own outline emblem (three stacked spa stones), drawn like the Lu icons
const GmStones: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="18.5" rx="8.5" ry="3" />
    <path d="M6.2 15.4C6.6 13.9 9 12.8 12 12.8s5.4 1.1 5.8 2.6" />
    <path d="M8.3 12.5C8.5 11.2 10 10.2 12 10.2s3.5 1 3.7 2.3" />
    <ellipse cx="12" cy="7" rx="3.2" ry="2.2" />
  </svg>
);

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType> = {
  FaCrown,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestP,
  FaPlay,
  FaStar,
  FaXTwitter,
  FaYoutube,
  GmStones,
  LuArrowRight,
  LuCalendarDays,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuClock,
  LuGlobe,
  LuLeaf,
  LuMail,
  LuMenu,
  LuMinus,
  LuPlus,
  LuScissors,
  LuX,
  PiFlowerLotus,
  PiUsersThree,
  RiDoubleQuotesL,
  TbBottle,
  TbTargetArrow,
};

type Props = {
  name: string;
  className?: string;
  // Line thickness of the outline icons (Lu, Tb, Gm); the filled icons keep their own shape.
  strokeWidth?: number;
};

export const Icon = ({ name, className, strokeWidth = 1.8 }: Props) => {
  const Component = icons[name] ?? PiFlowerLotus;
  const outline = name.startsWith("Lu") || name.startsWith("Tb") || name.startsWith("Gm");
  return <Component className={className} strokeWidth={outline ? strokeWidth : undefined} aria-hidden="true" />;
};

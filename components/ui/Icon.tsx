import type { IconType } from "react-icons";
import { FaCrown, FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaPinterestP, FaPlay, FaStar, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiStoneStack } from "react-icons/gi";
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
  GiStoneStack,
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
  // Line thickness of the outline icons (Lu, Tb); the filled icons keep their own shape.
  strokeWidth?: number;
};

export const Icon = ({ name, className, strokeWidth = 1.8 }: Props) => {
  const Component = icons[name] ?? PiFlowerLotus;
  const outline = name.startsWith("Lu") || name.startsWith("Tb");
  return <Component className={className} strokeWidth={outline ? strokeWidth : undefined} aria-hidden="true" />;
};

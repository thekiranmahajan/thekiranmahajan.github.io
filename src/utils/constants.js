import { BsFileEarmarkCode } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import {
  IoDocumentTextOutline,
  IoHomeOutline,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";

// NavLinks
export const navItems = [
  { icon: IoHomeOutline, label: "Home", href: "#home" },
  { icon: IoPersonOutline, label: "About", href: "#about" },
  { icon: IoDocumentTextOutline, label: "Skills", href: "#skills" },
  { icon: SlGraduation, label: "Experience", href: "#experience" },
  { icon: BsFileEarmarkCode, label: "Projects", href: "#projects" },
  { icon: IoMailOutline, label: "Contact", href: "#contact" },
];

// EncryptTextEffect + V2
export const CHARACTERS =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[]{}\\|;:'\",.<>?`~";
export const CYCLE_PER_CHARACTER = 2;
export const SHUFFLE_TIME = 50;

// EncryptTextEffectV2
export const DELAY_TIME = 1500;

// LogoItemsFlipper
export const DELAY_IN_MS = 2500;
export const TRANSITION_DURATION_IN_SEC = 1;

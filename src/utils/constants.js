import { BsFileEarmarkCode } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import {
  IoDocumentTextOutline,
  IoHomeOutline,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

// NavLinks
export const NAV_ITEMS = [
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

// About section
const GDRIVE_DOWNLOAD_LINK_FORMAT =
  "https://drive.google.com/uc?export=download&id=";

export const RESUME_LINK =
  GDRIVE_DOWNLOAD_LINK_FORMAT + "1S_hIL7_4jRWWZiNDhVfddVXz5XmwKZk0";

// SocialIcons
export const SOCIAL_ICONS = [
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/thekiranmahajan",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    link: "https://github.com/thekiranmahajan",
  },
  {
    icon: MdOutlineEmail,
    label: "Gmail",
    link: "mailto:thekiranmahajan@gmail.com?subject=Hello%20Kiran&body=I%20would%20like%20to%20get%20in%20touch%20with%20you.",
  },
  {
    icon: FaXTwitter,
    label: "Twitter",
    link: "https://twitter.com/thekiranmahajan",
  },
];

// FlipTextEffect
export const DURATION = 0.25;
export const STAGGER = 0.025;

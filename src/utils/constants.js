import { BsFileEarmarkCode } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import {
  IoDocumentTextOutline,
  IoHomeOutline,
  IoLogoCss3,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoVercel,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaBoxOpen, FaReact, FaXTwitter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiBabel,
  SiGit,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";

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

//Skills
export const LOGO_ITEM_STYLES = [
  { logoName: "HTML5", styles: "bg-[#E44D26]", icon: IoLogoHtml5 },
  { logoName: "CSS3", styles: "bg-[#264DE4]", icon: IoLogoCss3 },
  { logoName: "JavaScript", styles: "bg-[#EFD81D]", icon: IoLogoJavascript },
  { logoName: "React", styles: "bg-[#08D9FF]", icon: FaReact },
  { logoName: "Tailwind CSS", styles: "bg-[#38BDF8]", icon: RiTailwindCssFill },
  { logoName: "GitHub", styles: "bg-[#171515]", icon: IoLogoGithub },
  { logoName: "Git", styles: "bg-[#E84D31]", icon: SiGit },
  { logoName: "Node.js", styles: "bg-[#5FAE4B]", icon: IoLogoNodejs },
  { logoName: "Redux", styles: "bg-[#7A50BE]", icon: SiRedux },
  { logoName: "Figma", styles: "bg-[#12D086]", icon: PiFigmaLogoFill },
  { logoName: "Babel", styles: "bg-[#F5DF63]", icon: SiBabel },
  {
    logoName: "Vercel",
    styles: "bg-[#FFFFFF] !text-black",
    icon: IoLogoVercel,
  },
  { logoName: "Webpack", styles: "bg-[#92D6FA]", icon: SiWebpack },
  { logoName: "Vite", styles: "bg-[#9F61FC]", icon: SiVite },
  { logoName: "MongoDB", styles: "bg-[#499C3A]", icon: SiMongodb },
  { logoName: "Box Open", styles: "bg-[#DFAF7B]", icon: FaBoxOpen },
  { logoName: "Postman", styles: "bg-[#F26E39]", icon: SiPostman },
];

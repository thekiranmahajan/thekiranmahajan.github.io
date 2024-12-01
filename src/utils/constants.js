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
import { FiGithub, FiLinkedin, FiPhoneCall } from "react-icons/fi";
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
import { AiOutlineCode, AiOutlineTool } from "react-icons/ai";
import { PiFigmaLogoFill } from "react-icons/pi";
import { GoStack } from "react-icons/go";

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

// SocialIcons
export const SOCIAL_PROFILES = [
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    heading: "Let's Connect!",
    link: "https://www.linkedin.com/in/thekiranmahajan",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    heading: "Check out my work!",
    link: "https://github.com/thekiranmahajan",
  },
  {
    icon: FaXTwitter,
    label: "Twitter",
    heading: "Follow me!",
    link: "https://twitter.com/thekiranmahajan",
  },
  {
    icon: MdOutlineEmail,
    label: "Gmail",
    heading: "Copy email to clipboard",
    link: "mailto:thekiranmahajan@gmail.com?subject=Hello%20Kiran&body=I%20would%20like%20to%20get%20in%20touch%20with%20you.",
  },
  {
    icon: FiPhoneCall,
    label: "Call",
    heading: "Call and Copy the number",
    link: "tel:+91 7758829165",
  },
];

// FlipTextEffect
export const DURATION = 0.25;
export const STAGGER = 0.025;

//Skills
export const ALL_SKILLS = [
  {
    logoName: "HTML5",
    styles: "bg-[#E44D26]",
    icon: IoLogoHtml5,
    category: "languages",
  },
  {
    logoName: "CSS3",
    styles: "bg-[#264DE4]",
    icon: IoLogoCss3,
    category: "languages",
  },
  {
    logoName: "JavaScript",
    styles: "bg-[#EFD81D]",
    icon: IoLogoJavascript,
    category: "languages",
  },
  {
    logoName: "React",
    styles: "bg-[#08D9FF]",
    icon: FaReact,
    category: "Libraries & Frameworks",
  },
  {
    logoName: "Tailwind CSS",
    styles: "bg-[#38BDF8]",
    icon: RiTailwindCssFill,
    category: "Libraries & Frameworks",
  },
  {
    logoName: "Node.js",
    styles: "bg-[#5FAE4B]",
    icon: IoLogoNodejs,
    category: "Libraries & Frameworks",
  },
  {
    logoName: "Redux",
    styles: "bg-[#7A50BE]",
    icon: SiRedux,
    category: "Libraries & Frameworks",
  },
  {
    logoName: "Babel",
    styles: "bg-[#F5DF63]",
    icon: SiBabel,
    category: "Libraries & Frameworks",
  },
  {
    logoName: "Webpack",
    styles: "bg-[#92D6FA]",
    icon: SiWebpack,
    category: "Libraries & Frameworks",
  },
  {
    logoName: "Vite",
    styles: "bg-[#9F61FC]",
    icon: SiVite,
    category: "Libraries & Frameworks",
  },
  {
    logoName: "GitHub",
    styles: "bg-[#171515]",
    icon: IoLogoGithub,
    category: "Tools",
  },
  { logoName: "Git", styles: "bg-[#E84D31]", icon: SiGit, category: "Tools" },
  {
    logoName: "Figma",
    styles: "bg-[#12D086]",
    icon: PiFigmaLogoFill,
    category: "Tools",
  },
  {
    logoName: "Vercel",
    styles: "bg-[#FFFFFF] !text-black",
    icon: IoLogoVercel,
    category: "Tools",
  },
  {
    logoName: "MongoDB",
    styles: "bg-[#499C3A]",
    icon: SiMongodb,
    category: "Tools",
  },
  {
    logoName: "Parcel",
    styles: "bg-[#DFAF7B]",
    icon: FaBoxOpen,
    category: "Tools",
  },
  {
    logoName: "Postman",
    styles: "bg-[#F26E39]",
    icon: SiPostman,
    category: "Tools",
  },
];

export const TABS = [
  { tabName: "languages", tabIcon: AiOutlineCode },
  { tabName: "Libraries & Frameworks", tabIcon: GoStack },
  { tabName: "Tools", tabIcon: AiOutlineTool },
];

// TerminalContactForm
export const CONTACT_FORM_STEPS = [
  {
    key: "Email",
    firstQuestion: "To start, could you provide ",
    secondQuestion: "your email?",
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  },
  {
    key: "Name",
    firstQuestion: "Awesome!, What's ",
    secondQuestion: "your good name?",
    validate: (value) => value.trim().length > 0,
  },
  {
    key: "Message",
    firstQuestion: "Perfect!, ",
    secondQuestion: "how can I help you?",
    validate: (value) => value.trim().length > 0,
  },
];

// TerminalFormPreview
export const EMAILJS_API_LINK = "https://api.emailjs.com/api/v1.0/email/send";

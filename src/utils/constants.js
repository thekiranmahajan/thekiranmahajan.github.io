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
import { MdOutlineEmail, MdWorkOutline } from "react-icons/md";
import { FaBoxOpen, FaReact, FaXTwitter } from "react-icons/fa6";
import { RiGraduationCapLine, RiTailwindCssFill } from "react-icons/ri";
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
import schoolLogo from "../assets/school-logo.png";
import sgbauLogo from "../assets/sgbau-logo.png";
import ansrsourceLogo from "../assets/ansrsource-logo.png";

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
    percentage: 90,
    category: "languages",
  },
  {
    logoName: "CSS3",
    styles: "bg-[#264DE4]",
    icon: IoLogoCss3,
    percentage: 85,
    category: "languages",
  },
  {
    logoName: "JavaScript",
    styles: "bg-[#EFD81D]",
    icon: IoLogoJavascript,
    percentage: 80,
    category: "languages",
  },
  {
    logoName: "React",
    styles: "bg-[#08D9FF]",
    icon: FaReact,
    percentage: 80,
    category: "Libraries & Frameworks",
  },
  {
    logoName: "Tailwind CSS",
    styles: "bg-[#38BDF8]",
    icon: RiTailwindCssFill,
    percentage: 97,
    category: "Libraries & Frameworks",
  },
  {
    logoName: "Node.js",
    styles: "bg-[#5FAE4B]",
    icon: IoLogoNodejs,
    percentage: 60,
    category: "Libraries & Frameworks",
  },
  {
    logoName: "Redux",
    styles: "bg-[#7A50BE]",
    icon: SiRedux,
    percentage: 60,
    category: "Libraries & Frameworks",
  },
  {
    logoName: "Babel",
    styles: "bg-[#F5DF63]",
    icon: SiBabel,
    percentage: 70,
    category: "Libraries & Frameworks",
  },
  {
    logoName: "Webpack",
    styles: "bg-[#92D6FA]",
    icon: SiWebpack,
    percentage: 70,
    category: "Libraries & Frameworks",
  },
  {
    logoName: "Vite",
    styles: "bg-[#9F61FC]",
    icon: SiVite,
    percentage: 86,
    category: "Libraries & Frameworks",
  },
  {
    logoName: "GitHub",
    styles: "bg-[#171515]",
    icon: IoLogoGithub,
    percentage: 85,
    category: "Tools",
  },
  {
    logoName: "Git",
    styles: "bg-[#E84D31]",
    icon: SiGit,
    percentage: 85,
    category: "Tools",
  },
  {
    logoName: "Figma",
    styles: "bg-[#12D086]",
    icon: PiFigmaLogoFill,
    percentage: 75,
    category: "Tools",
  },
  {
    logoName: "Vercel",
    styles: "bg-[#FFFFFF] !text-black",
    icon: IoLogoVercel,
    percentage: 98,
    category: "Tools",
  },
  {
    logoName: "MongoDB",
    styles: "bg-[#499C3A]",
    icon: SiMongodb,
    percentage: 65,
    category: "Tools",
  },
  {
    logoName: "Parcel",
    styles: "bg-[#DFAF7B]",
    icon: FaBoxOpen,
    percentage: 88,
    category: "Tools",
  },
  {
    logoName: "Postman",
    styles: "bg-[#F26E39]",
    icon: SiPostman,
    percentage: 80,
    category: "Tools",
  },
];

export const SKILL_TABS = [
  { tabName: "languages", tabIcon: AiOutlineCode },
  { tabName: "Libraries & Frameworks", tabIcon: GoStack },
  { tabName: "Tools", tabIcon: AiOutlineTool },
];

export const TAB_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

// Experience
export const EXPERIENCE_TABS = [
  { tabName: "Education", tabIcon: RiGraduationCapLine },
  { tabName: "Work", tabIcon: MdWorkOutline },
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

// ExperienceTabs
export const EXPERIENCE = {
  education: [
    {
      logo: sgbauLogo,
      institution: "Sant Gadge Baba Amravati University",
      duration: "July 2020 — June 2024",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      score: "7.93 CGPA",
      location: "Malkapur, Maharashtra",
    },
    {
      logo: schoolLogo,
      institution: "J. E. School & Junior College",
      duration: "July 2019 — May 2020",
      degree: "Senior Secondary (HSC)",
      score: "60.31%",
      location: "Muktainagar, Maharashtra",
    },
    {
      logo: schoolLogo,
      institution: "Sardar G. G. Highschool",
      duration: "June 2017 — May 2018",
      degree: "Junior Secondary (SSC)",
      score: "78.4%",
      location: "Raver, Maharashtra",
    },
  ],
  work: [
    {
      logo: ansrsourceLogo,
      position: "Junior Developer-Consultant",
      duration: "Jan 2025 — Present",
      organization: "ansrsource",
      location: "Austin - Remote",
    },
    {
      logo: ansrsourceLogo,
      position: "Junior Developer Intern",
      duration: "July 2024 — December 2024",
      organization: "ansrsource",
      location: "Austin - Remote",
    },
  ],
};

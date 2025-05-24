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
  SiTypescript,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { AiOutlineCode, AiOutlineTool } from "react-icons/ai";
import { PiFigmaLogoFill } from "react-icons/pi";
import { GoStack } from "react-icons/go";
import schoolLogo from "../assets/school-logo.png";
import sgbauLogo from "../assets/sgbau-logo.png";
import ansrsourceLogo from "../assets/ansrsource-logo.png";
import tandooriJsPoster from "../assets/tandoori-js.webp";
import witchatPoster from "../assets/witchat.webp";
import pinsavePoster from "../assets/pinsave.webp";
import fundversePoster from "../assets/fundverse.webp";
import { TbView360Number } from "react-icons/tb";
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
    logoName: "TypeScript",
    styles: "bg-[#0076C6]",
    icon: SiTypescript,
    percentage: 40,
    category: "languages",
  },
  {
    logoName: "React",
    styles: "bg-[#08D9FF]",
    icon: FaReact,
    percentage: 80,
    category: "Frameworks",
  },
  {
    logoName: "Tailwind CSS",
    styles: "bg-[#38BDF8]",
    icon: RiTailwindCssFill,
    percentage: 97,
    category: "Frameworks",
  },
  {
    logoName: "Node.js",
    styles: "bg-[#5FAE4B]",
    icon: IoLogoNodejs,
    percentage: 60,
    category: "Frameworks",
  },
  {
    logoName: "Redux",
    styles: "bg-[#7A50BE]",
    icon: SiRedux,
    percentage: 60,
    category: "Frameworks",
  },
  {
    logoName: "Babel",
    styles: "bg-[#F5DF63]",
    icon: SiBabel,
    percentage: 70,
    category: "Frameworks",
  },
  {
    logoName: "Webpack",
    styles: "bg-[#92D6FA]",
    icon: SiWebpack,
    percentage: 70,
    category: "Frameworks",
  },
  {
    logoName: "Vite",
    styles: "bg-[#9F61FC]",
    icon: SiVite,
    percentage: 86,
    category: "Frameworks",
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
  {
    logoName: "Storyline 360",
    styles: "bg-[#BE5EAE]",
    icon: TbView360Number,
    percentage: 50,
    category: "Tools",
  },
];

export const SKILL_TABS = [
  { tabName: "languages", tabIcon: AiOutlineCode },
  { tabName: "Frameworks", tabIcon: GoStack },
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
      link: "https://sgbau.ac.in/",
      institution: "Sant Gadge Baba Amravati University",
      duration: "July 2020 — June 2024",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      score: "7.93 CGPA",
      location: "Malkapur, Maharashtra",
    },
    {
      logo: schoolLogo,
      link: "https://schools.org.in/jalgaon/27031103410/j-e-sch-&-junior-college.html",
      institution: "J. E. School & Junior College",
      duration: "July 2019 — May 2020",
      degree: "Senior Secondary (HSC)",
      score: "60.31%",
      location: "Muktainagar, Maharashtra",
    },
    {
      logo: schoolLogo,
      link: "https://schools.org.in/jalgaon/27031408310/sardar-g-g-high-sch-raver.html",
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
      link: "https://ansrsource.com/",
      position: "Developer",
      duration: "April 2025 — Present",
      organization: "ansrsource",
      location: "Austin - Remote",
    },
    {
      logo: ansrsourceLogo,
      link: "https://ansrsource.com/",
      position: "Junior Developer-Consultant",
      duration: "January 2025 — March 2025",
      organization: "ansrsource",
      location: "Austin - Remote",
    },
    {
      logo: ansrsourceLogo,
      link: "https://ansrsource.com/",
      position: "Junior Developer Intern",
      duration: "July 2024 — December 2024",
      organization: "ansrsource",
      location: "Austin - Remote",
    },
  ],
};

// Project Section

export const PROJECTS = [
  {
    title: "Tandoori Js",
    description:
      "A food ordering platform built with React.js, Redux Toolkit, and Tailwind CSS, featuring dynamic UI, real-time Swiggy API integration, and custom functionalities like a multi-image carousel.",
    poster: tandooriJsPoster,
    duration: "January 2024 - Jun 2024",
    live: "https://tandoori-js.vercel.app/",
    repo: "https://github.com/thekiranmahajan/tandoori-js",
  },
  {
    title: "WitChat",
    description:
      "A real-time chat application developed with the MERN stack and Socket.io, incorporating secure authentication, responsive design, and avatar management with Cloudinary.",
    poster: witchatPoster,
    duration: "March 2024 - April 2024",
    live: "http://wit-chat.onrender.com/",
    repo: "https://github.com/thekiranmahajan/wit-chat",
  },
  {
    title: "FundVerse",
    description:
      "A blockchain crowdfunding platform combining social features with campaign management, leveraging Solidity, React.js, and Tailwind CSS for an innovative user experience.",
    poster: fundversePoster,
    duration: "September 2023 - March 2024",
    live: "https://fundverse-by-us.vercel.app/",
    repo: "https://github.com/thekiranmahajan/FundVerse",
  },
  {
    title: "Pinsave",
    description:
      "A Pinterest-like web app for image-based posts with real-time updates, built using Node.js, Express.js, and Tailwind CSS, with secure authentication via Passport.",
    poster: pinsavePoster,
    duration: "December 2023 - January 2024",
    live: "https://pinsave-by-ray.onrender.com/",
    repo: "https://github.com/thekiranmahajan/pinsave",
  },
];

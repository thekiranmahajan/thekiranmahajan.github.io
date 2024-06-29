import { FaBoxOpen, FaReact } from "react-icons/fa6";
import {
  LogoItem,
  LogoItemsFlipper,
  SectionHeading,
  SectionSubHeading,
} from "../components";
import {
  IoLogoCss3,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoVercel,
} from "react-icons/io5";
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

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex h-screen w-full flex-col items-center py-10 md:py-14 lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="Skills" />
      <SectionSubHeading subHeadingText="My Expertise" />
      <div className="flex h-full w-full flex-col items-center justify-between gap-6 px-3 pt-10 sm:w-11/12 sm:flex-row sm:items-start sm:justify-evenly sm:gap-10 sm:pb-10 sm:pt-16 md:w-4/5 md:gap-14">
        <LogoItemsFlipper
          items={[
            <LogoItem key={1} className="!bg-[#E44D26]">
              <IoLogoHtml5 />
            </LogoItem>,
            <LogoItem key={2} className="!bg-[#264DE4]">
              <IoLogoCss3 />
            </LogoItem>,
            <LogoItem key={3} className="!bg-[#EFD81D]">
              <IoLogoJavascript />
            </LogoItem>,
            <LogoItem key={4} className="!bg-[#08D9FF]">
              <FaReact />
            </LogoItem>,
            <LogoItem key={5} className="!bg-[#38BDF8]">
              <RiTailwindCssFill />
            </LogoItem>,
            <LogoItem key={6} className="!bg-[#171515]">
              <IoLogoGithub />
            </LogoItem>,
            <LogoItem key={7} className="!bg-[#E84D31]">
              <SiGit />
            </LogoItem>,
            <LogoItem key={8} className="!bg-[#5FAE4B]">
              <IoLogoNodejs />
            </LogoItem>,
            <LogoItem key={9} className="!bg-[#7A50BE]">
              <SiRedux />
            </LogoItem>,
            <LogoItem key={10} className="!bg-[#12D086]">
              <PiFigmaLogoFill />
            </LogoItem>,
            <LogoItem key={11} className="!bg-[#F5DF63]">
              <SiBabel />
            </LogoItem>,
            <LogoItem key={12} className="!bg-[#FFFFFF] !text-black">
              <IoLogoVercel />
            </LogoItem>,
            <LogoItem key={13} className="!bg-[#92D6FA]">
              <SiWebpack />
            </LogoItem>,
            <LogoItem key={14} className="!bg-[#9F61FC]">
              <SiVite />
            </LogoItem>,
            <LogoItem key={15} className="!bg-[#499C3A]">
              <SiMongodb />
            </LogoItem>,
            <LogoItem key={16} className="!bg-[#DFAF7B]">
              <FaBoxOpen />
            </LogoItem>,
            <LogoItem key={17} className="!bg-[#F26E39]">
              <SiPostman />
            </LogoItem>,
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;

import { FaReact } from "react-icons/fa6";
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
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex h-screen w-full flex-col items-center lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="Skills" />
      <SectionSubHeading subHeadingText="My Expertise" />
      <LogoItemsFlipper
        items={[
          <LogoItem key={1} className="!bg-[#E44D26] !text-white">
            <IoLogoHtml5 />
          </LogoItem>,
          <LogoItem key={2} className="!bg-[#264DE4] text-white">
            <IoLogoCss3 />
          </LogoItem>,
          <LogoItem key={3} className="!bg-[#EFD81D] !text-white">
            <IoLogoJavascript />
          </LogoItem>,
          <LogoItem key={4} className="!bg-[#08D9FF] text-white">
            <FaReact />
          </LogoItem>,
          <LogoItem key={5} className="!bg-[#38BDF8] !text-white">
            <RiTailwindCssFill />
          </LogoItem>,
          <LogoItem key={5} className="!bg-[#171515] !text-white">
            <IoLogoGithub />
          </LogoItem>,
        ]}
      />
    </section>
  );
};

export default Skills;

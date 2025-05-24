import { motion } from "motion/react";
import {
  AnimatedButton,
  SectionHeading,
  SectionSubHeading,
} from "../components";
import avatar from "../assets/avatar.webp";
import { GrCloudDownload } from "react-icons/gr";
import resumePDF from "../assets/Kiran_Mahajan_Software_Development_Engineer.pdf";
import useSectionInView from "../hooks/useSectionInView";

const About = () => {
  const sectionRef = useSectionInView("about");
  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="flex min-h-screen w-full flex-col items-center py-10 md:py-14 lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="About" />
      <SectionSubHeading subHeadingText="Meet Kiran" />

      <div className="flex h-full w-full flex-col items-center justify-between gap-6 px-3 pt-10 sm:w-11/12 sm:flex-row sm:items-start sm:justify-evenly sm:gap-10 sm:pb-10 sm:pt-16 md:w-5/6 md:gap-16 lg:pt-20">
        <div className="flex flex-col items-center justify-end sm:w-1/2">
          <img
            className="h-52 w-52 overflow-hidden rounded-xl object-cover object-center shadow-md md:h-64 md:w-64 lg:h-72 lg:w-72"
            src={avatar}
            alt="Kiran Mahajan's Profile Picture"
          />
          <div className="mt-6 flex items-center justify-center sm:justify-start xl:mt-10">
            <AnimatedButton
              btnText="Resume"
              btnIcon={<GrCloudDownload />}
              Link={resumePDF}
            />
          </div>
        </div>

        <div className="w-full pb-2 text-center text-sm text-gray-900 sm:w-1/2 sm:text-left md:text-base dark:text-gray-200">
          <p>Konnichiwa🌸,</p>
          <p className="pt-2">
            Kiran here (
            <a
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Kirron_Kher"
              target="_blank"
            >
              !Kher
            </a>
            ) a 24 Y/O CSE Grad based in Maharashtra, India. with over{" "}
            <span className="font-bold">3.5 years </span>
            of technical and project experience in software development.
            I&apos;m passionate about
            <span className="font-bold"> UI/UX design</span> and
            <span className="font-bold"> frontend development</span>, and I
            specialize in the JavaScript ecosystem, where I bring complex
            projects to life, ensuring they&apos;re both functional and
            aesthetically pleasing.
          </p>
          <p className="pt-2">
            I have over <span className="font-bold">a year</span> of
            professional experience at <span className="font-bold">ansr</span>
            source, where I&apos;ve developed
            <span className="font-bold"> 20+</span> interactive e-learning
            modules, localized content into
            <span className="font-bold"> 12+</span> languages for global
            accessibility, and contributed to high-impact client articles. I
            also created a portfolio demo site showcasing past projects, which
            led to a <span className="font-bold">70%</span> boost in client
            engagement. I was also honored with a
            <span className="font-bold"> Spot Award</span> in recognition of my
            impactful work and consistent delivery quality.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

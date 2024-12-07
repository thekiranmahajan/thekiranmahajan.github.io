import { motion } from "motion/react";
import { SectionHeading, SectionSubHeading } from "../components";
import useSectionInView from "../hooks/useSectionInView";

const Experience = () => {
  const sectionRef = useSectionInView("experience");
  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      className="flex h-screen w-full flex-col items-center py-10 md:py-14 lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="Experience" />
      <SectionSubHeading subHeadingText="Career Path" />
    </motion.section>
  );
};

export default Experience;

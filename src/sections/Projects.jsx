import { motion } from "motion/react";
import { SectionHeading, SectionSubHeading } from "../components";
import useSectionInView from "../hooks/useSectionInView";

const Projects = () => {
  const sectionRef = useSectionInView("projects");
  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="flex h-screen w-full flex-col items-center py-10 md:py-14 lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="Projects" />
      <SectionSubHeading subHeadingText="Proud Creations" />
    </motion.section>
  );
};

export default Projects;

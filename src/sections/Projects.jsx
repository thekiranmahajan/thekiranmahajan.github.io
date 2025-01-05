import { motion } from "motion/react";
import { ProjectCard, SectionHeading, SectionSubHeading } from "../components";
import useSectionInView from "../hooks/useSectionInView";
import { PROJECTS } from "../utils/constants";

const Projects = () => {
  const sectionRef = useSectionInView("projects");
  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="flex min-h-screen w-full flex-col items-center py-10 md:py-14 lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="Projects" />
      <SectionSubHeading subHeadingText="Proud Creations" />
      <div className="container mt-10 flex flex-wrap items-center justify-center gap-5 p-2">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

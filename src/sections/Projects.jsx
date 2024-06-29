import { SectionHeading, SectionSubHeading } from "../components";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex h-screen w-full flex-col items-center py-10 md:py-14 lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="Projects" />
      <SectionSubHeading subHeadingText="Proud Creations" />
    </section>
  );
};

export default Projects;

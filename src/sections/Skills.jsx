import { SectionHeading, SectionSubHeading } from "../components";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex h-screen w-full flex-col items-center lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="Skills" />
      <SectionSubHeading subHeadingText="My Expertise" />
    </section>
  );
};

export default Skills;

import { SectionHeading, SectionSubHeading } from "../components";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex h-screen w-full flex-col items-center lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="Experience" />
      <SectionSubHeading subHeadingText="Career Path" />
    </section>
  );
};

export default Experience;

import { SectionHeading } from "../components";

const About = () => {
  return (
    <section
      id="about"
      className="flex h-screen w-full flex-col items-center lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="About" />
    </section>
  );
};

export default About;

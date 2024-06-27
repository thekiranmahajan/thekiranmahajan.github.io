import { SectionHeading, SectionSubHeading } from "../components";

const About = () => {
  return (
    <section
      id="about"
      className="flex h-screen w-full flex-col items-center lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="About" />
      <SectionSubHeading subHeadingText="Meet Kiran" />
    </section>
  );
};

export default About;

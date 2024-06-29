import { SectionHeading, SectionSubHeading } from "../components";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex h-screen w-full flex-col items-center py-10 md:py-14 lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="Contact" />
      <SectionSubHeading subHeadingText="Get in Touch" />
    </section>
  );
};

export default Contact;

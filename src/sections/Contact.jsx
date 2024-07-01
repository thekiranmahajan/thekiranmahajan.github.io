import { SectionHeading, SectionSubHeading, SocialCard } from "../components";
import { SOCIAL_PROFILES } from "../utils/constants";
import { copyToClipboard } from "../utils/helper";

const Contact = () => {
  const handleCopyEmail = (e) => {
    copyToClipboard(e, "thekiranmahajan@gmail.com");
  };
  return (
    <section
      id="contact"
      className="flex h-screen w-full flex-col items-center py-10 md:py-14 lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="Contact" />
      <SectionSubHeading subHeadingText="Get in Touch" />
      <div className="mt-10 flex items-center justify-between">
        <div className="flex flex-col items-center gap-4">
          {SOCIAL_PROFILES.map((social) => (
            <SocialCard
              key={social.label}
              label={social.label}
              heading={social.heading}
              icon={social.icon}
              link={social.label === "Gmail" ? "#" : social.link}
              onClick={social.label === "Gmail" ? handleCopyEmail : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

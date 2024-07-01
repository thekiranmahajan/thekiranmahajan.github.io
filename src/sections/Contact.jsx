import { SectionHeading, SectionSubHeading, SocialCard } from "../components";
import { SOCIAL_PROFILES } from "../utils/constants";
import { copyToClipboard } from "../utils/helper";

const Contact = () => {
  const handleCopyEmail = (e) => {
    copyToClipboard(e, "thekiranmahajan@gmail.com");
  };
  const handleCopyPhoneNumber = (e) => {
    copyToClipboard(e, "+91 7758829165");
  };
  return (
    <section
      id="contact"
      className="flex min-h-screen w-full flex-col items-center py-10 md:py-14 lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="Contact" />
      <SectionSubHeading subHeadingText="Get in Touch" />
      <div className="mt-10 flex items-center justify-between">
        <div className="flex flex-col items-center gap-2">
          {SOCIAL_PROFILES.map((social) => (
            <SocialCard
              key={social.label}
              label={social.label}
              heading={social.heading}
              icon={social.icon}
              link={
                social.label === "Gmail" || social.label === "Call"
                  ? "#"
                  : social.link
              }
              onClick={
                social.label === "Gmail"
                  ? handleCopyEmail
                  : social.label === "Call"
                    ? handleCopyPhoneNumber
                    : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

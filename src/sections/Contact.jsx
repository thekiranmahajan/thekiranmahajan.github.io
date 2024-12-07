import { motion } from "motion/react";
import { SOCIAL_PROFILES } from "../utils/constants";
import { copyToClipboard } from "../utils/helper";
import {
  SectionHeading,
  SectionSubHeading,
  SocialCard,
  TerminalContactForm,
} from "../components";

import useSectionInView from "../hooks/useSectionInView";

const Contact = () => {
  const sectionRef = useSectionInView("contact");

  const handleCopyEmail = (e) => {
    copyToClipboard(e, "thekiranmahajan@gmail.com");
  };
  const handleCopyPhoneNumber = (e) => {
    copyToClipboard(e, "+91 7758829165");
  };
  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="flex min-h-screen w-full flex-col items-center py-10 md:py-14 lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="Contact" />
      <SectionSubHeading subHeadingText="Get in Touch" />
      <div className="mt-10 flex h-full w-full flex-col items-center gap-4 md:flex-row md:items-start md:justify-stretch md:gap-10">
        <div className="flex w-2/5 flex-col items-center gap-2 p-4 md:items-end">
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
        <div className="flex h-full w-full p-4 md:w-3/5">
          <TerminalContactForm />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

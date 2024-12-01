import {
  LogoItem,
  LogoItemsFlipper,
  SectionHeading,
  SectionSubHeading,
  SkillTabs,
} from "../components";
import { ALL_SKILLS } from "../utils/constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex min-h-screen w-full flex-col items-center py-10 md:py-14 lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="Skills" />
      <SectionSubHeading subHeadingText="My Expertise" />
      <div className="flex h-full w-full flex-col items-center gap-8 px-3 pt-10 text-center sm:w-11/12 sm:flex-row sm:items-start sm:justify-center sm:pb-10 sm:pt-16 sm:text-left md:w-3/4 md:justify-between md:gap-5 lg:w-3/5">
        <div className="sm:pt-10 md:h-1/2">
          <h2 className="text-xl font-semibold text-dark-blue sm:text-2xl dark:text-gray-100">
            What I Bring to the Table.
          </h2>
          <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
            Below are the languages, libraries, frameworks, and tools I use to
            bring ideas to life.
          </p>
        </div>
        <div className="md:w-1/2">
          <LogoItemsFlipper
            items={ALL_SKILLS.map((logo) => (
              <LogoItem
                key={logo.logoName}
                className={logo.styles}
                icon={logo.icon}
                label={logo.logoName}
              />
            ))}
          />
        </div>
      </div>
      <SkillTabs />
    </section>
  );
};

export default Skills;

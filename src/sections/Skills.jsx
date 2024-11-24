import {
  LogoItem,
  LogoItemsFlipper,
  SectionHeading,
  SectionSubHeading,
  SkillBar,
} from "../components";
import { LOGO_ITEM_STYLES } from "../utils/constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex h-screen w-full flex-col items-center py-10 md:py-14 lg:w-4/5 dark:text-white"
    >
      <SectionHeading headingText="Skills" />
      <SectionSubHeading subHeadingText="My Expertise" />
      <div className="flex h-full w-full flex-col items-center justify-between gap-6 px-3 pt-10 sm:w-11/12 sm:flex-row sm:items-start sm:justify-evenly sm:gap-10 sm:pb-10 sm:pt-16 md:w-4/5 md:gap-14">
        <LogoItemsFlipper
          items={LOGO_ITEM_STYLES.map((logo) => (
            <LogoItem
              key={logo.logoName}
              className={logo.styles}
              icon={logo.icon}
              label={logo.logoName}
            />
          ))}
        />
      </div>
      <div>
        <SkillBar
          icon={LOGO_ITEM_STYLES[4].icon}
          logoName={LOGO_ITEM_STYLES[4].logoName}
        />
        <SkillBar
         percentage={40}
          icon={LOGO_ITEM_STYLES[2].icon}
          logoName={LOGO_ITEM_STYLES[2].logoName}
        />
        <SkillBar
          icon={LOGO_ITEM_STYLES[1].icon}
          logoName={LOGO_ITEM_STYLES[1].logoName}
          percentage={10}
        />
        <SkillBar
          icon={LOGO_ITEM_STYLES[5].icon}
          logoName={LOGO_ITEM_STYLES[5].logoName}
          percentage={80}
        />
        <SkillBar
          icon={LOGO_ITEM_STYLES[8].icon}
          logoName={LOGO_ITEM_STYLES[8].logoName}
          percentage={70}
        />
      </div>
    </section>
  );
};

export default Skills;

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TABS, ALL_SKILLS } from "../utils/constants";
import SkillBar from "./SkillBar";

const SkillTabs = () => {
  const [activeTab, setActiveTab] = useState(TABS[1]?.tabName);
  const currentData = ALL_SKILLS.filter(
    (skill) => skill.category === activeTab,
  );
  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };
  return (
    <div className="mt-10 flex h-full w-1/2 flex-col items-center p-2 md:w-3/4">
      <div className="mb-5 flex w-full items-center justify-center gap-5 md:gap-10">
        {TABS.map(({ tabName, tabIcon: Icon }) => (
          <button
            key={tabName}
            onClick={() => setActiveTab(tabName)}
            className={`relative flex flex-col items-center justify-center gap-2 p-2 pb-2 font-medium leading-5 md:text-lg md:leading-7 ${
              activeTab === tabName ? "text-custom-violet dark:text-custom-yellow" : "text-gray-500 dark:text-gray-300"
            }`}
          >
            <Icon className="text-2xl text-light-blue md:text-3xl" />
            {tabName}
            {activeTab === tabName && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded bg-light-blue"
              />
            )}
          </button>
        ))}
      </div>

      <div className="h-full w-[17rem] sm:w-96">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tabVariants}
            transition={{ duration: 0.3 }}
            className="relative h-full w-full text-gray-700"
          >
            {currentData.map(({ logoName, icon: Icon }) => (
              <SkillBar key={logoName} logoName={logoName} icon={Icon} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillTabs;

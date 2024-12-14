import { useState } from "react";
import { EXPERIENCE_TABS, TAB_VARIANTS } from "../utils/constants";
import { motion, AnimatePresence } from "motion/react";

const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState(EXPERIENCE_TABS[1]?.tabName);
  return (
    <div className="mt-10 flex h-full w-1/2 flex-col items-center p-2 md:w-3/4">
      <div className="mb-5 flex h-20 w-1/2 items-center justify-center gap-5 md:gap-10">
        {EXPERIENCE_TABS.map(({ tabName, tabIcon: Icon }) => (
          <button
            key={tabName}
            onClick={() => setActiveTab(tabName)}
            className={`relative flex w-full items-center justify-center gap-2 p-2 pb-2 font-medium leading-5 md:text-lg md:leading-7 ${
              activeTab === tabName
                ? "text-custom-violet dark:text-custom-yellow"
                : "text-gray-500 dark:text-gray-100"
            }`}
          >
            <Icon
              className={`text-2xl md:text-3xl ${activeTab === tabName ? "text-light-blue" : ""}`}
            />
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

      <div className="h-full w-[17rem] sm:w-96 md:mt-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={TAB_VARIANTS}
            transition={{ duration: 0.3 }}
            className="relative h-full w-full text-gray-700"
          >
            {EXPERIENCE_TABS.map(({ tabName }) => (
              <h3 key={tabName}>{tabName}</h3>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExperienceTabs;

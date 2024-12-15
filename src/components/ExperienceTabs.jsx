import { useState } from "react";
import { EXPERIENCE_TABS, TAB_VARIANTS } from "../utils/constants";
import { motion, AnimatePresence } from "motion/react";
import Timeline from "./Timeline";

const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState(EXPERIENCE_TABS[1]?.tabName);
  return (
    <div className="container mt-10 flex-col items-center p-2">
      <div className="mb-5 flex items-center justify-center gap-20">
        {EXPERIENCE_TABS.map(({ tabName, tabIcon: Icon }) => (
          <button
            key={tabName}
            onClick={() => setActiveTab(tabName)}
            className={`relative flex items-center justify-center gap-3 p-2 pb-2 font-medium leading-5 md:text-lg md:leading-7 ${
              activeTab === tabName
                ? "text-custom-violet dark:text-custom-yellow"
                : "text-gray-500 dark:text-gray-100"
            }`}
          >
            <Icon className="text-2xl" />
            {tabName}
            {activeTab === tabName && (
              <motion.div layoutId="underline" className="absolute" />
            )}
          </button>
        ))}
      </div>

      <div className="h-full w-full md:mt-2">
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
            {activeTab === "Work" ? (
              <Timeline type="work" />
            ) : (
              <Timeline type="education" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExperienceTabs;

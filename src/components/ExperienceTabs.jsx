import { useState } from "react";
import { EXPERIENCE_TABS, TAB_VARIANTS } from "../utils/constants";
import { motion, AnimatePresence } from "motion/react";
import Timeline from "./Timeline";
import { spring } from "motion";

const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState(EXPERIENCE_TABS[1]?.tabName);
  return (
    <div className="container mt-10 flex-col items-center p-2">
      <div className="flex items-center justify-center gap-20">
        {EXPERIENCE_TABS.map(({ tabName, tabIcon: Icon }) => (
          <button
            key={tabName}
            onClick={() => setActiveTab(tabName)}
            className={`${
              activeTab === tabName
                ? "text-white dark:!text-gray-900"
                : "hover:opacity-70"
            } relative flex items-center justify-center rounded-full px-4 py-2 font-medium text-dark-blue duration-300 md:text-lg dark:text-gray-100`}
          >
            {activeTab === tabName && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-light-blue dark:bg-custom-yellow"
                style={{ borderRadius: 9999 }}
                transition={{ type: spring, duration: 0.6 }}
              />
            )}

            <span className="relative z-10 flex gap-3">
              <Icon className="text-2xl" />
              {tabName}
            </span>
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

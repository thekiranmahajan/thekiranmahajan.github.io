import { useState } from "react";
import { EXPERIENCE_TABS, TAB_VARIANTS } from "../utils/constants";
import { motion, AnimatePresence } from "motion/react";
import Timeline from "./Timeline";
import Tabs from "./Tabs";

const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState(EXPERIENCE_TABS[1]?.tabName);
  return (
    <div className="container mt-10 flex-col items-center p-2">
      <Tabs
        tabs={EXPERIENCE_TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="mx-auto h-full max-w-screen-lg">
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

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SKILL_TABS, ALL_SKILLS, TAB_VARIANTS } from "../utils/constants";
import SkillBar from "./SkillBar";
import Tabs from "./Tabs";

const SkillTabs = () => {
  const [activeTab, setActiveTab] = useState(SKILL_TABS[1]?.tabName);
  const currentData = ALL_SKILLS.filter(
    (skill) => skill.category === activeTab,
  );

  return (
    <div className="container mt-10 flex-col items-center justify-center p-2">
      <Tabs
        tabs={SKILL_TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="mx-auto h-full w-full max-w-screen-xs">
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
            {currentData.map(({ logoName, icon: Icon, percentage }) => (
              <SkillBar
                key={logoName}
                logoName={logoName}
                icon={Icon}
                percentage={percentage}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillTabs;

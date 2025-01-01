import { motion } from "motion/react";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="mx-auto mb-10 flex max-w-screen-sm items-center justify-between">
      {tabs.map(({ tabName, tabIcon: Icon }) => (
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
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.6,
              }}
            />
          )}

          <span className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Icon className="text-2xl" />
            {tabName}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;

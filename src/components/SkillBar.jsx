import { motion } from "motion/react";

const SkillBar = ({ logoName, icon: Icon, percentage = 100 }) => {
  return (
    <div className="mt-2 flex w-64 flex-col gap-2 text-dark-blue dark:text-custom-yellow">
      <div className="flex items-center justify-between">
        <Icon className="text text-4xl" />
        <span className="select-none font-semibold">{logoName}</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-white">
        <motion.div
          className="h-1 rounded-full bg-light-blue dark:bg-custom-violet"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            duration: 1,
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;

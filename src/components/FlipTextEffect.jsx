import { motion } from "motion/react";
import { DURATION, STAGGER } from "../utils/constants";

const FlipTextEffect = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      whileTap="hovered"
      className="relative w-fit cursor-pointer select-none overflow-hidden whitespace-nowrap font-rajdhani text-6xl font-extrabold uppercase leading-3 sm:text-7xl md:text-8xl lg:text-8xl"
      style={{ lineHeight: 0.75 }}
    >
      <h1>
        {children.split("").map((char, index) => (
          <motion.span
            className="inline-block bg-gradient-to-r from-custom-violet to-light-blue bg-clip-text text-transparent"
            variants={{
              initial: { y: "0" },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            key={index}
          >
            {char}
          </motion.span>
        ))}
      </h1>
      <h1 className="absolute inset-0">
        {children.split("").map((char, index) => (
          <motion.span
            className="inline-block bg-gradient-to-r from-custom-violet to-light-blue bg-clip-text text-transparent"
            variants={{
              initial: { y: "100%" },
              hovered: { y: "0" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            key={index}
          >
            {char}
          </motion.span>
        ))}
      </h1>
    </motion.div>
  );
};

export default FlipTextEffect;

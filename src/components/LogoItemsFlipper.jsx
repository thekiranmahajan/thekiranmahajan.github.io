import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { DELAY_IN_MS, TRANSITION_DURATION_IN_SEC } from "../utils/constants";

const LogoItemsFlipper = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-72 shrink-0 rounded-xl border border-light-blue bg-dark-blue dark:border-neutral-700 dark:bg-black"
      role="region"
      aria-roledescription="carousel"
      aria-label="Logo carousel"
      aria-live="polite"
    >
      <AnimatePresence mode="sync">
        <motion.div
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SEC,
            ease: "easeInOut",
          }}
          key={index}
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items?.length]}
        </motion.div>
        <motion.div
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SEC,
            ease: "easeInOut",
          }}
          key={(index + 1) * 2}
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items?.length]}
        </motion.div>
      </AnimatePresence>
      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999] -translate-y-1/2 border-t-2 border-dark-blue dark:border-black"
      />
    </div>
  );
};

export default LogoItemsFlipper;

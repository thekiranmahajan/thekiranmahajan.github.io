import { useScroll, motion, useSpring } from "motion/react";
const ScrollbarProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 15 });
  return (
    <motion.div
      aria-label="Scroll Progressbar"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="1"
      style={{ scaleX }}
      className={`fixed bottom-12 h-[0.2rem] w-full origin-left bg-custom-yellow md:top-0 dark:bg-light-blue`}
    ></motion.div>
  );
};

export default ScrollbarProgress;

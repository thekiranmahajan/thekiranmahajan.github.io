import { useScroll, motion, useSpring } from "framer-motion";
const ScrollbarProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 15 });
  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed bottom-12 z-10 h-[0.2rem] w-full origin-left bg-yellow md:top-0 dark:bg-light-blue`}
    ></motion.div>
  );
};

export default ScrollbarProgress;

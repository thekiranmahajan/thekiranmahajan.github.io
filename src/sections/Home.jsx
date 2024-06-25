import {
  useMotionTemplate,
  motion,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Home = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(80% 120% at 50% 50%, rgba(0,0,0,0), ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-inherit text-gray-200 md:pt-16"
    >
      <motion.div
        style={{
          backgroundImage,
        }}
        className="flex h-64 w-64 cursor-not-allowed select-none items-center justify-center rounded-full shadow-xl drop-shadow-lg"
      >
        <span className="text-7xl text-red-500">K</span>
      </motion.div>
    </section>
  );
};

export default Home;

import rocket from "../assets/rocket.webp";
import { motion } from "framer-motion";

const Rocket = () => {
  return (
    <motion.div
      initial={{
        x: 30,
        y: 30,
      }}
      animate={{ x: -30, y: -30 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 3,
        ease: "easeInOut",
      }}
      className="mb-16 h-36 w-36 md:mb-0 md:mt-5 md:h-44 md:w-44"
      role="img"
      aria-label="Rocket animation"
    >
      <img
        className="h-full w-full select-none drop-shadow-2xl"
        src={rocket}
        alt="rocket"
      />
    </motion.div>
  );
};

export default Rocket;

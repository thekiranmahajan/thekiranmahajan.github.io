import {
  useMotionTemplate,
  motion,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import rocket from "../assets/rocket.png";

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
  }, [color]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col-reverse items-center justify-center gap-5 md:flex-row md:items-start md:justify-around md:px-5 md:pt-44 lg:w-4/5"
    >
      <div className="dark:text-white">
        <h3>Hi,👋🏻 I&apos;m</h3>
        <h1 className="font-rajdhani text-8xl font-extrabold">Kiran</h1>
        <h1 className="font-rajdhani text-9xl font-extrabold leading-[4.7rem]">
          Mahajan
          <span>.</span>
        </h1>
      </div>
      <div draggable="false" className="h-72 w-72">
        <img
          className="pointer-events-none h-full w-full rotate-90 scale-[-1] select-none object-contain object-center"
          src={rocket}
          alt="rocket"
        />
      </div>

      {/* <motion.div
        style={{
          backgroundImage,
        }}
        className="flex h-64 w-64 cursor-not-allowed select-none items-center justify-center rounded-full shadow-xl drop-shadow-lg"
      >
        <span className="text-7xl text-red-500">K</span>
      </motion.div> */}
    </section>
  );
};

export default Home;

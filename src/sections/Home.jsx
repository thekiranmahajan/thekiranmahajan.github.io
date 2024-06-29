import rocket from "../assets/rocket.webp";
import {
  EncryptTextEffectV2,
  FlipTextEffect,
  ArrowButton,
  SocialIcons,
} from "../components";
import { LuMouse, LuSendHorizonal } from "react-icons/lu";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center gap-5 p-10 px-4 text-black md:px-5 md:pt-44 lg:w-4/5 dark:text-white"
    >
      <div className="flex h-full w-full flex-col-reverse items-center md:flex-row md:items-start md:justify-around">
        <div className="w-fit overflow-hidden">
          <h1 className="text-lg font-semibold">Hello,👋🏼 I&apos;m</h1>
          <FlipTextEffect>Kiran</FlipTextEffect>
          <FlipTextEffect>Mahajan.</FlipTextEffect>
          <p className="text-sm font-bold md:text-base">
            a{" "}
            <EncryptTextEffectV2>
              Software Developer Frontend Developer React Developer Web
              Developer Software Engineer
            </EncryptTextEffectV2>
          </p>
          <div className="mt-5 pl-2">
            <SocialIcons />
          </div>
          <ArrowButton
            btnText="Contact"
            btnIcon={<LuSendHorizonal />}
            Link="#contact"
          />
        </div>
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
        >
          <img
            className="h-full w-full select-none drop-shadow-2xl"
            src={rocket}
            alt="rocket"
          />
        </motion.div>
      </div>
      <a
        href="#about"
        className="group hidden h-10 items-center gap-1 text-sm transition-all duration-500 hover:translate-y-2 hover:text-light-blue md:mt-12 md:flex xl:mt-20 dark:hover:text-custom-yellow"
      >
        <LuMouse className="text-base text-light-blue group-hover:text-custom-yellow dark:text-custom-yellow group-hover:dark:text-custom-violet" />
        Scroll Down
        <MdKeyboardDoubleArrowDown className="text-lg text-light-blue group-hover:text-custom-yellow dark:text-custom-yellow group-hover:dark:text-custom-violet" />
      </a>
    </section>
  );
};

export default Home;

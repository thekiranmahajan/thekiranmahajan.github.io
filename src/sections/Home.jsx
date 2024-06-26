import { FaArrowRight } from "react-icons/fa6";
import rocket from "../assets/rocket.png";
import { EncryptTextEffectV2, FlipTextEffect } from "../components";
import { LuMouse } from "react-icons/lu";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center gap-5 p-10 px-4 md:px-5 md:pt-44 lg:w-4/5"
    >
      <div className="flex h-full w-full flex-col items-center md:flex-row md:items-start md:justify-around">
        <div className="mb-16 h-36 w-36 md:mb-0 md:mt-5 md:h-44 md:w-44">
          <img
            className="h-full w-full select-none drop-shadow-2xl"
            src={rocket}
            alt="rocket"
          />
        </div>
        <div className="w-fit overflow-hidden dark:text-white">
          <h3 className="text-lg font-semibold">Hello,👋🏽 I&apos;m</h3>
          <FlipTextEffect>Kiran</FlipTextEffect>
          <FlipTextEffect>Mahajan.</FlipTextEffect>
          <p className="text-sm font-bold md:text-base">
            a{" "}
            <EncryptTextEffectV2>
              Software Developer Frontend Developer React Developer Web
              Developer Software Engineer
            </EncryptTextEffectV2>
          </p>
          <button className="mt-8 flex h-10 w-28 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-violet to-light-blue font-semibold text-white">
            Resume <FaArrowRight />
          </button>
        </div>
      </div>
      <h2 className="mt-16 flex items-center gap-2 text-center md:mt-32">
        <LuMouse />
        Scroll Down
      </h2>
    </section>
  );
};

export default Home;

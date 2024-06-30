import { LuSendHorizonal } from "react-icons/lu";
import {
  EncryptTextEffectV2,
  FlipTextEffect,
  ArrowButton,
  SocialIcons,
  ScrollDown,
  Rocket,
} from "../components";

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
          <p className="pl-2 text-sm font-bold md:text-base">
            a{" "}
            <EncryptTextEffectV2>
              Software Developer Frontend Developer React Developer Web
              Developer Software Engineer
            </EncryptTextEffectV2>
          </p>
          <div className="mt-5 flex h-full w-full items-center gap-6 py-4 pl-2">
            <SocialIcons />
          </div>
          <div className="mt-5 pl-2">
            <ArrowButton
              btnText="Contact"
              btnIcon={<LuSendHorizonal />}
              Link="#contact"
            />
          </div>
        </div>
        <Rocket />
      </div>
      <ScrollDown />
    </section>
  );
};

export default Home;

import rocket from "../assets/rocket.png";
import { EncryptTextEffectV2, FlipTextEffect } from "../components";

const Home = () => {
  return (
    <section
      id="home"
      className="custom-text-bg relative flex min-h-screen w-full flex-col items-center gap-5 px-4 pt-14 md:flex-row md:items-start md:justify-around md:px-5 md:pt-44 lg:w-4/5"
    >
      <div className="w-fit overflow-hidden dark:text-white">
        <h3 className="text-lg font-semibold">Hello,👋🏻 I&apos;m</h3>
        <FlipTextEffect>Kiran</FlipTextEffect>
        <FlipTextEffect>Mahajan.</FlipTextEffect>a{" "}
        <EncryptTextEffectV2>
          Software Developer Frontend Developer React Developer Web Developer
        </EncryptTextEffectV2>
      </div>
      <div className="h-40 w-40">
        <img
          className="h-full w-full select-none drop-shadow-2xl"
          src={rocket}
          alt="rocket"
        />
      </div>
    </section>
  );
};

export default Home;

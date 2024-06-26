import rocket from "../assets/rocket.png";
import { FlipTextEffect } from "../components";

const Home = () => {
  return (
    <section
      id="home"
      className="custom-text-bg relative flex min-h-screen w-full flex-col items-center gap-5 px-4 pt-14 md:flex-row md:items-start md:justify-around md:px-5 md:pt-44 lg:w-4/5"
    >
      <div className="w-full dark:text-white">
        <h3 className="text-lg font-semibold">Hi,👋🏻 I&apos;m</h3>
        <FlipTextEffect>Kiran</FlipTextEffect>
        <FlipTextEffect>Mahajan.</FlipTextEffect>
        <p className="w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, debitis
        </p>
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

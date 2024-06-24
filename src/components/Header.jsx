import { useEffect, useState } from "react";
import { IoGridOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { HiMiniXMark } from "react-icons/hi2";
import { setTheme } from "../utils/helper";
import ScrollbarProgress from "./ScrollbarProgress";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
  );

  const addThemeToLocalStorage = (preference) => {
    setSelectedTheme(preference);
    localStorage.setItem("theme", preference);
  };

  useEffect(() => {
    setTheme(selectedTheme);
  }, [selectedTheme]);

  return (
    <>
      <ScrollbarProgress />
      <header className="fixed bottom-0 flex h-12 w-full items-center justify-between bg-light-blue px-5 text-white md:top-0 md:justify-between dark:bg-yellow dark:text-dark-blue">
        <h1 className="text-effect group cursor-pointer font-rajdhani text-lg font-bold">
          <a href="/">
            Kiran Mahajan
            <span className="text-yellow group-hover:text-white dark:text-violet group-hover:dark:text-dark-blue">
              .
            </span>
          </a>
        </h1>

        <nav className="ml-auto hidden w-3/4 px-5 md:flex">
          <NavLinks />
        </nav>
        <div className="flex h-full w-16 items-center justify-between px-1 md:relative md:w-10 md:justify-center">
          <button
            aria-label="Switch to light theme"
            onClick={() => addThemeToLocalStorage("light")}
            className={`text-effect text-xl transition-transform md:absolute ${
              selectedTheme === "dark"
                ? "block scale-100 opacity-100"
                : "pointer-events-none hidden scale-0 opacity-0"
            }`}
          >
            <IoSunnyOutline />
          </button>

          <button
            aria-label="Switch to dark theme"
            onClick={() => addThemeToLocalStorage("dark")}
            className={`text-effect text-xl transition-transform md:absolute ${
              selectedTheme === "light"
                ? "block rotate-0 scale-100 opacity-100"
                : "pointer-events-none rotate-90 scale-0 opacity-0"
            }`}
          >
            <IoMoonOutline />
          </button>
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="text-effect text-xl md:hidden"
          >
            <IoGridOutline />
          </button>
        </div>

        <div
          className={`absolute bottom-0 left-1/2 right-0 z-10 flex h-56 w-full -translate-x-1/2 transform flex-col rounded-t-3xl bg-light-blue p-1 pt-6 shadow-2xl transition-transform duration-300 md:hidden dark:bg-yellow ${isMenuOpen ? "flex translate-y-0" : "translate-y-full"} `}
        >
          <nav className="flex h-full w-full">
            <NavLinks />
          </nav>
          <div className="flex h-12 w-full items-center justify-end px-3">
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="text-effect text-2xl"
            >
              <HiMiniXMark />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

import { useEffect, useState } from "react";
import { IoGridOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { HiMiniXMark } from "react-icons/hi2";
import { setTheme } from "../utils/helper";
import ScrollbarProgress from "./ScrollbarProgress";
import { useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
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

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsHeaderHidden(true);
    } else {
      setIsHeaderHidden(false);
    }
  });

  useEffect(() => {
    setTheme(selectedTheme);
  }, [selectedTheme]);

  return (
    <>
      <ScrollbarProgress />
      <header
        className={`fixed bottom-0 z-10 flex h-12 w-full items-center justify-between bg-light-blue px-5 text-white md:justify-between md:transition-all md:duration-500 md:ease-in-out dark:bg-yellow dark:text-dark-blue ${isHeaderHidden ? "md:-top-12" : "md:top-0"}`}
      >
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
        <div className="flex h-full w-16 items-center justify-between md:relative md:w-10 md:justify-center">
          <button
            aria-label="Switch to light theme"
            onClick={() => addThemeToLocalStorage("light")}
            className={`text-effect absolute text-xl transition-transform ${
              selectedTheme === "dark"
                ? "block rotate-90 scale-100 opacity-100"
                : "pointer-events-none rotate-0 scale-0 opacity-0"
            }`}
          >
            <IoSunnyOutline />
          </button>

          <button
            aria-label="Switch to dark theme"
            onClick={() => addThemeToLocalStorage("dark")}
            className={`text-effect absolute text-xl transition-transform ${
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
            className="text-effect ml-auto text-xl md:hidden"
          >
            <IoGridOutline />
          </button>
        </div>

        <div
          className={`absolute bottom-0 left-1/2 right-0 z-20 flex h-56 w-full -translate-x-1/2 transform flex-col rounded-t-3xl bg-light-blue p-1 pt-6 shadow-2xl transition-transform duration-300 md:hidden dark:bg-yellow ${isMenuOpen ? "flex translate-y-0" : "translate-y-full"} `}
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

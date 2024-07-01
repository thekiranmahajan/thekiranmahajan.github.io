import { useState } from "react";
import { IoGridOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { HiMiniXMark } from "react-icons/hi2";
import ScrollbarProgress from "./ScrollbarProgress";
import { useScroll, useMotionValueEvent } from "framer-motion";
import useTheme from "../hooks/useTheme";
import useMenu from "../hooks/useMenu";

const Header = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const { scrollY } = useScroll();
  const { selectedTheme, setThemePreference } = useTheme();
  const { isMenuOpen, handleMenuOpen, handleMenuClose, menuRef } = useMenu();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsHeaderHidden(true);
    } else {
      setIsHeaderHidden(false);
    }
  });

  return (
    <header
      aria-live="polite"
      className={`fixed bottom-0 z-50 flex h-12 w-full flex-col items-center justify-center bg-light-blue px-5 text-white md:transition-all md:duration-500 md:ease-in-out dark:bg-custom-yellow dark:text-dark-blue ${isHeaderHidden ? "md:-top-12" : "md:top-0"}`}
    >
      <ScrollbarProgress />

      <div className="flex h-full w-full items-center justify-between md:justify-between lg:w-4/5">
        <h1 className="text-effect group cursor-pointer font-rajdhani text-lg font-bold">
          <a href="/">
            Kiran Mahajan
            <span className="text-custom-yellow group-hover:text-white dark:text-custom-violet group-hover:dark:text-dark-blue">
              .
            </span>
          </a>
        </h1>

        <nav className="ml-auto hidden w-3/4 px-5 md:flex">
          <NavLinks />
        </nav>
        <div className="flex h-full w-16 items-center justify-between md:relative md:w-10 md:justify-center">
          <button
            aria-label="Switch to Light Theme"
            onClick={() => setThemePreference("light")}
            className={`text-effect absolute text-xl transition-transform ${
              selectedTheme === "dark"
                ? "block rotate-90 scale-100 opacity-100"
                : "pointer-events-none rotate-0 scale-0 opacity-0"
            }`}
          >
            <IoSunnyOutline />
          </button>

          <button
            aria-label="Switch to Dark Theme"
            onClick={() => setThemePreference("dark")}
            className={`text-effect absolute text-xl transition-transform ${
              selectedTheme === "light"
                ? "block rotate-0 scale-100 opacity-100"
                : "pointer-events-none rotate-90 scale-0 opacity-0"
            }`}
          >
            <IoMoonOutline />
          </button>
          <button
            onClick={handleMenuOpen}
            aria-label="Open Menu"
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            className="text-effect ml-auto text-xl md:hidden"
          >
            <IoGridOutline />
          </button>
        </div>

        <div
          id="main-menu"
          ref={menuRef}
          className={`absolute bottom-0 left-1/2 right-0 z-50 flex h-56 w-full -translate-x-1/2 transform flex-col rounded-t-3xl bg-light-blue p-1 pt-6 shadow-2xl transition-transform duration-300 md:hidden dark:bg-custom-yellow ${isMenuOpen ? "flex translate-y-0" : "translate-y-full"} `}
        >
          <nav className="flex h-full w-full">
            <NavLinks handleMenuClose={handleMenuClose} />
          </nav>
          <div className="flex h-12 w-full items-center justify-end px-3">
            <button
              onClick={handleMenuClose}
              aria-label="Close Menu"
              className="text-effect text-2xl"
            >
              <HiMiniXMark />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

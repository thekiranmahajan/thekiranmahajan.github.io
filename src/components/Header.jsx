import { useEffect, useState } from "react";
import { IoGridOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { HiMiniXMark } from "react-icons/hi2";
import { setTheme } from "../utils/helper";
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
    <header className="fixed bottom-0 flex h-12 w-full items-center justify-between bg-light-blue px-5 text-white md:top-0 md:justify-between dark:bg-yellow dark:text-dark-blue">
      <h2 className="cursor-pointer font-rajdhani text-lg font-bold">
        Kiran Mahajan<span className="text-yellow dark:text-violet">.</span>
      </h2>

      <nav className="ml-auto hidden h-full w-3/4 px-5 md:flex">
        <NavLinks />
      </nav>
      <div className="flex h-full w-16 items-center justify-between px-1 md:relative md:w-10 md:justify-center">
        <IoSunnyOutline
          onClick={() => addThemeToLocalStorage("light")}
          className={`cursor-pointer text-xl transition-transform duration-300 hover:text-dark-blue md:absolute dark:text-dark-blue dark:hover:text-violet ${selectedTheme === "dark" ? "block scale-100 opacity-100" : "pointer-events-none hidden scale-0 opacity-0"}`}
        />
        <IoMoonOutline
          onClick={() => addThemeToLocalStorage("dark")}
          className={`cursor-pointer text-xl transition-transform duration-300 hover:text-dark-blue md:absolute dark:text-dark-blue dark:hover:text-violet ${selectedTheme === "light" ? "block rotate-0 scale-100 opacity-100" : "pointer-events-none rotate-90 scale-0 opacity-0"}`}
        />
        <IoGridOutline
          onClick={() => setIsMenuOpen(true)}
          className={`cursor-pointer text-xl md:hidden dark:text-dark-blue dark:hover:text-violet`}
        />
      </div>

      <div
        className={`absolute bottom-0 left-1/2 right-0 z-10 flex h-56 w-full -translate-x-1/2 transform flex-col rounded-t-3xl bg-light-blue p-1 pt-5 text-white shadow-2xl transition-transform duration-200 md:hidden dark:bg-yellow dark:text-dark-blue ${isMenuOpen ? "flex translate-y-0" : "translate-y-full"} `}
      >
        <nav className="flex h-full w-full">
          <NavLinks />
        </nav>
        <div className="flex h-12 w-full items-center justify-end px-3">
          <HiMiniXMark
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer text-2xl hover:text-dark-blue dark:text-violet"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

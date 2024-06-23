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
    <header className="fixed bottom-0 flex h-12 w-full items-center justify-between bg-light-blue px-5 text-white dark:bg-yellow dark:text-dark-blue">
      <h2 className="cursor-pointer font-rajdhani text-lg font-bold">
        Kiran Mahajan<span className="text-yellow dark:text-violet">.</span>
      </h2>
      <div className="flex h-full w-16 items-center justify-between">
        <IoSunnyOutline
          onClick={() => addThemeToLocalStorage("light")}
          className={`cursor-pointer text-xl transition-transform duration-300 hover:text-dark-blue dark:text-violet ${selectedTheme === "dark" ? "block rotate-180 scale-100 opacity-100" : "pointer-events-none hidden rotate-0 scale-0 opacity-0"}`}
        />
        <IoMoonOutline
          onClick={() => addThemeToLocalStorage("dark")}
          className={`cursor-pointer text-xl transition-transform duration-300 hover:text-dark-blue dark:text-violet ${selectedTheme === "light" ? "block rotate-0 scale-100 opacity-100" : "pointer-events-none rotate-90 scale-0 opacity-0"}`}
        />
        <IoGridOutline
          onClick={() => setIsMenuOpen(true)}
          className="cursor-pointer text-xl hover:text-dark-blue dark:text-violet"
        />
      </div>

      <div
        className={`absolute bottom-0 left-1/2 right-0 z-10 flex h-56 w-full -translate-x-1/2 transform flex-col rounded-t-3xl bg-light-blue p-1 text-white shadow-2xl transition-transform duration-200 dark:bg-yellow dark:text-dark-blue ${isMenuOpen ? "flex translate-y-0" : "translate-y-full"} `}
      >
        <NavLinks />
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

import { useState } from "react";
import { IoGridOutline, IoMoonOutline } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { HiMiniXMark } from "react-icons/hi2";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <header className="dark:bg-yellow bg-light-blue dark:text-dark-blue fixed bottom-0 flex h-12 w-full items-center justify-between px-5 text-white">
      <h2 className="font-rajdhani cursor-pointer text-lg font-bold">
        Kiran Mahajan<span className="text-yellow dark:text-violet">.</span>
      </h2>
      <div className="flex h-full w-16 items-center justify-between">
        {/* <IoSunnyOutline className="text-xl" /> */}
        <IoMoonOutline className="text-xl" />
        <IoGridOutline
          onClick={() => setIsMenuOpen(true)}
          className="focus:bg-violet text-xl"
        />
      </div>

      <div
        className={`dark:bg-yellow bg-light-blue dark:text-dark-blue absolute bottom-0 left-1/2 right-0 z-10 flex h-56 w-full -translate-x-1/2 transform flex-col rounded-t-2xl p-1 text-white shadow-md transition-transform duration-200 ${isMenuOpen ? "flex translate-y-0" : "translate-y-full"} `}
      >
        <NavLinks />
        <div className="flex h-12 w-full items-center justify-end px-3">
          <HiMiniXMark
            onClick={() => setIsMenuOpen(false)}
            className="text-violet text-2xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

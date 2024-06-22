import { useState } from "react";
import { IoGridOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <header className="dark:bg-yellow bg-light-blue dark:text-dark-blue fixed bottom-0 flex h-12 w-full items-center justify-between px-5 text-white">
      <h2 className="font-rajdhani cursor-pointer text-lg font-bold">
        Kiran Mahajan<span className="text-yellow dark:text-violet">.</span>
      </h2>
      <div className="flex h-full w-1/3 items-center justify-around">
        {/* <IoSunnyOutline className="text-xl" /> */}
        <IoMoonOutline className="text-xl" />
        <IoGridOutline
          onClick={() => setIsMenuOpen(true)}
          className="focus:bg-violet text-xl"
        />
      </div>
    </header>
  );
};

export default Header;

import { LuMouse } from "react-icons/lu";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const ScrollDown = () => {
  return (
    <a
      href="#about"
      className="group hidden h-10 items-center gap-1 text-sm transition-all duration-500 hover:translate-y-2 hover:text-light-blue md:mt-12 md:flex xl:mt-20 dark:hover:text-custom-yellow"
    >
      <LuMouse className="text-base text-light-blue group-hover:text-custom-yellow dark:text-custom-yellow group-hover:dark:text-custom-violet" />
      Scroll Down
      <MdKeyboardDoubleArrowDown className="text-lg text-light-blue group-hover:text-custom-yellow dark:text-custom-yellow group-hover:dark:text-custom-violet" />
    </a>
  );
};

export default ScrollDown;

import EncryptTextEffect from "./EncryptTextEffect";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto flex h-80 w-full select-none flex-col items-center bg-black px-5 pt-5 text-white md:h-60 md:select-all md:pt-0">
      <div className="flex w-full justify-between gap-4 md:mt-6 lg:w-7/12">
        <div className="mt-10 md:mt-4">
          <div className="flex cursor-no-drop font-rajdhani text-3xl font-extrabold md:text-4xl">
            <EncryptTextEffect>Kiran Mahajan</EncryptTextEffect>
            <span className="text-custom-yellow dark:text-custom-violet">
              .
            </span>
          </div>
          <h3 className="text-sm text-gray-200 md:text-base">
            Software Development Engineer
          </h3>
        </div>
        <div className="flex h-full flex-col items-center justify-center gap-4 text-lg sm:gap-6 sm:text-xl md:flex-row md:gap-10 md:text-2xl">
          <SocialIcons />
        </div>
      </div>
      <div className="mb-20 mt-auto flex w-full items-center justify-center text-xs text-gray-400 sm:text-sm md:mb-10">
        &copy; Kiran Mahajan. All Rights Reserved {year}
      </div>
    </footer>
  );
};

export default Footer;

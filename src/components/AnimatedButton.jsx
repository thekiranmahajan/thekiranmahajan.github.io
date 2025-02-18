import AnimatedButtonSpan from "./AnimatedButtonSpan";

const AnimatedButton = ({
  btnIcon,
  btnText = "",
  onClick = () => {},
  Link = "#",
  size = "h-10 w-28",
}) => {
  const isFileLink =
    Link.endsWith(".pdf") || Link.endsWith(".doc") || Link.endsWith(".txt");
  const isScrollLink = Link.startsWith("#");

  const handleClick = (e) => {
    if (Link === "#") {
      e.preventDefault();
      onClick(e);
    } else if (isScrollLink) {
      e.preventDefault();
      document.querySelector(Link).scrollIntoView({ behavior: "smooth" });
    } else {
      onClick(e);
    }
  };

  return (
    <a
      href={Link}
      onClick={handleClick}
      role="button"
      target={!isScrollLink && Link !== "#" ? "_blank" : "_self"}
      aria-label={btnText}
      download={isFileLink ? true : undefined}
      className={`group relative flex items-center justify-center overflow-hidden rounded-md border-none bg-gradient-to-r from-custom-violet to-light-blue p-2 text-base font-medium text-white shadow-md ring-gray-600 transition-all duration-300 active:scale-90 active:ring-2 dark:ring-gray-300 ${size}`}
    >
      {btnText}

      <AnimatedButtonSpan className="bg-dark-blue duration-1000 group-hover:duration-500 dark:bg-white" />

      <AnimatedButtonSpan className="bg-custom-yellow duration-700 group-hover:duration-700 dark:bg-light-blue" />

      <AnimatedButtonSpan className="bg-light-blue duration-500 group-hover:duration-1000 dark:bg-custom-yellow" />

      <span
        aria-hidden="true"
        className="absolute left-6 top-2.5 z-10 rotate-180 text-xl text-white opacity-0 duration-100 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:rotate-0 group-hover:opacity-100 group-hover:duration-1000 dark:text-dark-blue"
      >
        {btnIcon}
      </span>
    </a>
  );
};

export default AnimatedButton;

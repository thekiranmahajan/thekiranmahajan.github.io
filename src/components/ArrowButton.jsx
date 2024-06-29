const ArrowButton = ({
  btnIcon,
  btnText = "",
  onClick = () => {},
  Link = "#",
}) => {
  return (
    <a
      href={Link}
      onClick={onClick}
      className="group relative m-2 mt-5 inline-block h-12 w-32 overflow-hidden rounded-md border-none bg-gradient-to-r from-custom-violet to-light-blue p-2 text-center text-lg font-medium text-white shadow-md ring-gray-600 transition-all duration-300 active:scale-90 active:ring-2 dark:ring-gray-300"
    >
      {btnText}

      <span className="absolute -left-2 -top-8 h-32 w-36 origin-left rotate-12 scale-x-0 transform bg-dark-blue transition-transform duration-1000 group-hover:scale-x-100 group-hover:duration-500 dark:bg-white"></span>
      <span className="absolute -left-2 -top-8 h-32 w-36 origin-left rotate-12 scale-x-0 transform bg-custom-yellow transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-700 dark:bg-light-blue"></span>
      <span className="absolute -left-2 -top-8 h-32 w-36 origin-left rotate-12 scale-x-0 transform bg-light-blue transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-1000 dark:bg-custom-yellow"></span>
      <span className="absolute left-6 top-2.5 z-10 rotate-180 text-xl text-white opacity-0 duration-100 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:rotate-0 group-hover:opacity-100 group-hover:duration-1000 dark:text-dark-blue">
        {btnIcon}
      </span>
    </a>
  );
};

export default ArrowButton;

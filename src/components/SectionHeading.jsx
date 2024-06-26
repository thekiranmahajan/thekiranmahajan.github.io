const SectionHeading = ({ headingText = "" }) => {
  return (
    <h1 className="text-effect group select-none font-rajdhani text-xl font-bold uppercase sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
      {headingText}
      <span className="text-violet group-hover:text-yellow dark:text-yellow group-hover:dark:text-white">
        .
      </span>
    </h1>
  );
};

export default SectionHeading;

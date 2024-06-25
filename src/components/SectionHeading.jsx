const SectionHeading = ({ firstText = "", secondText = "" }) => {
  return (
    <div className="flex select-none items-center gap-2 text-xl font-bold text-gray-700 sm:text-2xl md:text-3xl lg:text-4xl dark:text-gray-200">
      {firstText.toUpperCase()}
      <h1 className="relative rounded-lg border-y-2 border-black bg-gradient-to-l from-violet to-yellow bg-clip-text px-2 text-transparent shadow-md shadow-light-blue transition-all duration-300 hover:scale-95 md:rounded-xl md:border-y-4 dark:border-white">
        {secondText.toUpperCase()}
      </h1>
    </div>
  );
};

export default SectionHeading;

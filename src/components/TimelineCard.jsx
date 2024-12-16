const TimelineCard = ({
  logo,
  link,
  institution,
  duration,
  degree,
  score,
  location,
  index,
}) => {
  return (
    <div className="relative">
      <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-custom-violet bg-white duration-300 hover:scale-105 xs:absolute md:left-0 md:right-0 md:mx-auto dark:border-custom-yellow">
        <a href={link || "#"} target="_blank">
          <img
            src={logo}
            alt="ansrsource logo"
            className="inset-0 h-4 w-4 rounded-full object-cover"
          />
        </a>
      </div>

      <div
        className={`${index % 2 === 1 ? "xs:pl-9 md:ml-auto md:pl-6" : "xs:pl-9 md:mr-auto md:pr-6"} relative pt-3 xs:pt-0 md:w-1/2`}
      >
        <div
          className={`${index % 2 === 1 ? "md:left-4" : "md:left-auto md:right-[0.85rem] md:top-0 md:pl-7"} absolute inset-0 left-1 top-1 h-4 w-4 rotate-45 transform rounded-sm bg-slate-500 shadow-lg xs:left-7`}
        ></div>

        <div
          className={`${index % 2 === 1 ? "" : "md:-top-2 md:left-0.5"} relative -left-1 rounded-lg border border-gray-200 bg-white p-6 shadow-xl xs:-top-1 xs:left-0`}
        >
          <h4 className="mb-1 font-bold text-gray-800">
            <span className="text-sm font-medium text-gray-700 md:text-base">
              {degree}
            </span>{" "}
            {score && (
              <span className="text-xs font-extrabold italic text-custom-violet md:text-sm">
                ({score})
              </span>
            )}
          </h4>

          <h5 className="mb-1 text-xs leading-relaxed text-gray-600 md:text-sm">
            <span className="text-gray-800">{institution}</span>,{" "}
            <span className="text-custom-violet">({location})</span>
          </h5>

          <p className="mt-3 text-xs font-semibold tracking-wide text-gray-500 md:text-sm">
            {duration}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;

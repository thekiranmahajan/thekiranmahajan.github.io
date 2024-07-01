const SocialCard = ({ label, heading, icon: Icon, link, onClick }) => {
  return (
    <a
      onClick={onClick}
      rel="noopener noreferrer"
      target="_blank"
      href={link}
      className="group relative h-24 w-72 overflow-hidden rounded-md bg-gradient-to-r from-custom-violet to-light-blue p-2 transition-transform duration-300 active:scale-95"
    >
      <Icon className="absolute -right-12 -top-12 z-10 text-9xl text-violet-400 transition-transform duration-300 group-hover:rotate-12 group-hover:text-slate-300" />
      <Icon className="relative z-10 mb-2 text-2xl text-violet-50 transition-colors duration-300 group-hover:text-white group-hover:dark:text-gray-900" />
      <h2 className="relative z-10 text-lg font-medium text-violet-100 duration-300 group-hover:text-white group-hover:dark:text-gray-900">
        {label}
      </h2>
      <h4 className="relative z-10 text-xs text-slate-300 duration-300 group-hover:text-violet-50 group-hover:dark:text-gray-900">
        {heading}
      </h4>
      <div className="absolute inset-0 translate-y-[100%] bg-light-blue transition-transform duration-300 group-hover:translate-y-[0%] dark:bg-custom-yellow" />
    </a>
  );
};

export default SocialCard;

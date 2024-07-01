const SocialCard = ({ label, heading, icon: Icon, link, onClick }) => {
  return (
    <a
      onClick={onClick}
      rel="noopener noreferrer"
      target="_blank"
      href={link}
      className="group relative h-24 w-72 overflow-hidden rounded-md border border-slate-300 bg-white p-4"
    >
      <Icon className="absolute -right-12 -top-12 z-10 text-9xl text-slate-100 transition-transform duration-300 group-hover:rotate-12 group-hover:text-violet-400" />
      <Icon className="relative z-10 mb-2 text-2xl text-violet-600 transition-colors duration-300 group-hover:text-white" />
      <h2 className="relative z-10 text-lg font-medium text-slate-950 duration-300 group-hover:text-white">
        {label}
      </h2>
      <h4 className="relative z-10 text-xs text-slate-400 duration-300 group-hover:text-violet-200">
        {heading}
      </h4>
      <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-custom-violet to-light-blue transition-transform duration-300 group-hover:translate-y-[0%]" />
    </a>
  );
};

export default SocialCard;

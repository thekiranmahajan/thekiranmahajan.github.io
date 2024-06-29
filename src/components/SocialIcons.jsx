import { SOCIAL_ICONS } from "../utils/constants";

const SocialIcons = () => {
  return (
    <div className="flex h-full w-full items-center gap-6 py-4">
      {SOCIAL_ICONS.map((social) => (
        <a
          className="text-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-custom-yellow active:scale-95 sm:text-2xl"
          target="_blank"
          rel="noopener noreferrer"
          key={social.label}
          href={social.link}
        >
          <social.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

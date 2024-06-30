import { SOCIAL_ICONS } from "../utils/constants";

const SocialIcons = () => {
  return (
    <>
      {SOCIAL_ICONS.map((social) => (
        <a
          className="text-xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-light-blue active:scale-95 sm:text-2xl hover:dark:text-custom-yellow"
          target="_blank"
          rel="noopener noreferrer"
          key={social.label}
          href={social.link}
          aria-label={social.label}
        >
          <social.icon />
        </a>
      ))}
    </>
  );
};

export default SocialIcons;

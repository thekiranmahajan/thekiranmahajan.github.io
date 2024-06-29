import { SOCIAL_ICONS } from "../utils/constants";

const SocialIcons = () => {
  return (
    <div className="flex h-full w-full">
      {SOCIAL_ICONS.map((social) => (
        <a
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

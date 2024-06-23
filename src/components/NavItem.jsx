const NavItem = ({ icon: Icon, label, href }) => {
  return (
    <li className="flex items-center justify-center">
      <a
        href={href}
        className="flex cursor-pointer flex-col items-center justify-center gap-1 truncate text-sm font-medium hover:text-dark-blue md:flex-row md:gap-0 dark:text-dark-blue dark:hover:text-violet"
      >
        <Icon className="text-xl md:hidden" />
        {label}
      </a>
    </li>
  );
};

export default NavItem;

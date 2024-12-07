const NavItem = ({
  icon: Icon,
  label,
  href,
  handleMenuClose,
  activeNavItem,
  setActiveNavItem,
}) => {
  return (
    <li onClick={handleMenuClose} className="flex items-center justify-center">
      <a
        aria-label={label}
        href={href}
        onClick={() => setActiveNavItem(label)}
        className={`text-effect flex cursor-pointer flex-col items-center justify-center gap-1 truncate text-sm font-medium md:flex-row md:gap-0 dark:text-dark-blue ${activeNavItem === label ? "text-dark-blue dark:!text-custom-violet" : ""}`}
      >
        <Icon className="text-xl md:hidden" />
        {label}
      </a>
    </li>
  );
};

export default NavItem;

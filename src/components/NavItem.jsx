const NavItem = ({ icon: Icon, label }) => {
  return (
    <li className="dark:text-violet hover:text-dark-blue flex cursor-pointer flex-col items-center justify-center gap-1 truncate">
      <Icon className="text-xl" />
      {label}
    </li>
  );
};

export default NavItem;

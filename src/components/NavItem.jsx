const NavItem = ({ icon: Icon, label }) => {
  return (
    <li className="flex flex-col items-center gap-1 truncate">
      <Icon className="text-xl" />
      {label}
    </li>
  );
};

export default NavItem;

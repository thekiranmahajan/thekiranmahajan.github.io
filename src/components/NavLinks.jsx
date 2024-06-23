import { navItems } from "../utils/constants";
import NavItem from "./NavItem";

const NavLinks = () => {
  return (
    <ul className="grid h-full w-full grid-cols-3 grid-rows-2 gap-4 font-semibold md:flex md:justify-end md:gap-8">
      {navItems.map((item) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          href={item.href}
        />
      ))}
    </ul>
  );
};

export default NavLinks;

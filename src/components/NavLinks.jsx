import { navItems } from "../utils/constants";
import NavItem from "./NavItem";

const NavLinks = () => {
  return (
    <ul className="row-gap-4 grid h-full w-full grid-cols-3 grid-rows-2 gap-x-4 gap-y-8 font-semibold md:flex md:justify-end md:gap-8">
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

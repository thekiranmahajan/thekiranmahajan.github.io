import { navItems } from "../utils/constants";
import NavItem from "./NavItem";

const NavLinks = () => {
  return (
    <nav className="flex h-full w-full flex-col items-center justify-around pt-5">
      <ul className="row-gap-4 grid h-full w-full grid-cols-3 grid-rows-2 gap-x-4 gap-y-8 text-sm font-semibold">
        {navItems.map((item) => (
          <NavItem key={item.label} icon={item.icon} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;

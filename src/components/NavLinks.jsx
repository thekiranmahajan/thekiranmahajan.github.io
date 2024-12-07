import { useState } from "react";
import { NAV_ITEMS } from "../utils/constants";
import NavItem from "./NavItem";

const NavLinks = ({ handleMenuClose = () => {} }) => {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  return (
    <ul
      aria-label="Main navigation menu"
      className="grid h-full w-full grid-cols-3 grid-rows-2 gap-4 font-semibold md:flex md:justify-end md:gap-8"
    >
      {NAV_ITEMS.map((item) => (
        <NavItem
          handleMenuClose={handleMenuClose}
          key={item.label}
          icon={item.icon}
          label={item.label}
          href={item.href}
          activeNavItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
        />
      ))}
    </ul>
  );
};

export default NavLinks;

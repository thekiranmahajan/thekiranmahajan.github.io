import { BsChatSquareDots } from "react-icons/bs";
import {
  IoCodeOutline,
  IoDocumentTextOutline,
  IoHomeOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { SlGraduation } from "react-icons/sl";

const NavLinks = () => {
  return (
    <nav className="flex h-full w-full flex-col items-center justify-around py-10">
      <ul className="row-gap-4 grid h-full w-full grid-cols-3 grid-rows-2 gap-4 text-sm font-semibold">
        <li className="flex flex-col items-center gap-1">
          <IoHomeOutline className="text-xl" /> Home
        </li>
        <li className="flex flex-col items-center gap-1">
          <IoPersonOutline className="text-xl" /> About
        </li>
        <li className="flex flex-col items-center gap-1">
          <IoDocumentTextOutline className="text-xl" /> Skills
        </li>
        <li className="flex flex-col items-center gap-1">
          <SlGraduation className="text-xl" /> Qualificatons
        </li>
        <li className="flex flex-col items-center gap-1">
          <IoCodeOutline className="text-xl" /> Projects
        </li>
        <li className="flex flex-col items-center gap-1">
          <BsChatSquareDots className="text-xl" /> Contact
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;

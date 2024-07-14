import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const TerminalSelectedValue = ({ selectedValue }) => {
  return (
    <span className="flex w-full flex-wrap items-center gap-2 overflow-hidden text-sm text-green-400 sm:text-base">
      <IoMdCheckmarkCircleOutline className="h-4 w-4" />
      {selectedValue}
    </span>
  );
};

export default TerminalSelectedValue;

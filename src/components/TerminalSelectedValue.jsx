import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const TerminalSelectedValue = ({ selectedValue }) => {
  return (
    <span className="flex items-center gap-3 text-green-400">
      <IoMdCheckmarkCircleOutline /> {selectedValue}
    </span>
  );
};

export default TerminalSelectedValue;

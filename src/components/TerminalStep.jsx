import { FaArrowRightLong } from "react-icons/fa6";

const TerminalStep = ({ values, handleValueChange, handleKeyDown, step }) => {
  return (
    <div className="flex h-10 w-full items-center">
      <p className="flex items-center">
        <FaArrowRightLong className="text-lg text-teal-500" />
        <span className="px-2 text-2xl">~</span>
        <span className="pr-2 text-gray-400">Enter {step}:</span>
      </p>
      <input
        autoFocus
        name={step}
        value={values[step]}
        onChange={handleValueChange}
        onKeyDown={handleKeyDown}
        type="text"
        className="border-none bg-transparent outline-none"
      />
    </div>
  );
};

export default TerminalStep;

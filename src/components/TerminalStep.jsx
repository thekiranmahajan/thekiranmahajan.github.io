import { FaArrowRightLong } from "react-icons/fa6";

const TerminalStep = ({
  handleValueChange,
  handleKeyDown,
  currentStep,
  values,
}) => {
  const stepName = currentStep.key;
  return (
    <div className="flex h-10 w-full items-center">
      <p className="flex items-center">
        <FaArrowRightLong className="text-lg text-teal-500" />
        <span className="px-2 text-2xl">~</span>
        <span className="text-nowrap pr-2 text-gray-400">
          Enter {stepName}:
        </span>
      </p>
      <input
        name={stepName}
        value={values[stepName]}
        onChange={handleValueChange}
        onKeyDown={handleKeyDown}
        type="text"
        className="border-none bg-transparent caret-green-400 outline-none"
        autoComplete="off"
      />
    </div>
  );
};

export default TerminalStep;

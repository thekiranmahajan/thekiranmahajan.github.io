import { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const TerminalStep = ({
  handleValueChange,
  handleKeyDown,
  currentStep,
  values,
  shouldFocus,
}) => {
  const stepName = currentStep.key;
  const inputRef = useRef(null);
  useEffect(() => {
    if (shouldFocus) inputRef.current.focus();
  }, [shouldFocus]);
  return (
    <div className="flex h-10 w-full items-center">
      <p className="flex items-center">
        <FaArrowRightLong className="text-teal-500 sm:text-lg" />
        <span className="px-2 text-xl sm:text-2xl">~</span>
        <span className="text-nowrap pr-2 text-gray-400">
          Enter {stepName}:
        </span>
      </p>
      <input
        ref={inputRef}
        name={stepName}
        value={values[stepName]}
        onChange={handleValueChange}
        onKeyDown={handleKeyDown}
        type="text"
        className="w-full border-none bg-red-400 bg-transparent caret-green-400 outline-none"
        autoComplete="off"
      />
    </div>
  );
};

export default TerminalStep;

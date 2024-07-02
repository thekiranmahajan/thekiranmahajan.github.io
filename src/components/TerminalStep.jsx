import { FaArrowRightLong } from "react-icons/fa6";

const TerminalStep = ({
  handleValueChange,
  handleKeyDown,
  currentStep,
  values,
}) => {
  const stepName = currentStep.key;
  return (
    <>
      <p className="py-1">
        {currentStep.firstQuestion}
        <span className="text-purple-300">{currentStep.secondQuestion}</span>
      </p>
      <div className="flex h-10 w-full items-center">
        <p className="flex items-center">
          <FaArrowRightLong className="text-lg text-teal-500" />
          <span className="px-2 text-2xl">~</span>
          <span className="pr-2 text-gray-400">Enter {stepName}:</span>
        </p>
        <input
          autoFocus
          name={stepName}
          value={values[stepName]}
          onChange={handleValueChange}
          onKeyDown={handleKeyDown}
          type="text"
          className="border-none bg-transparent outline-none"
          autoComplete="off"
        />
      </div>
    </>
  );
};

export default TerminalStep;

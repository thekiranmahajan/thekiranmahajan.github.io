const TerminalQuestion = ({ currentStep }) => {
  return (
    <p className="py-1">
      {currentStep.firstQuestion}
      <span className="text-purple-300">{currentStep.secondQuestion}</span>
    </p>
  );
};

export default TerminalQuestion;

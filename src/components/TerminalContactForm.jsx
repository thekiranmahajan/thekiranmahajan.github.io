import { useState } from "react";
import TerminalStep from "./TerminalStep";
import TerminalSelectedValue from "./TerminalSelectedValue";
import ArrowButton from "./ArrowButton";
import { MdOutlineRestartAlt } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";
import { CONTACT_FORM_STEPS } from "../utils/constants";

const TerminalContactForm = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const currentStep = CONTACT_FORM_STEPS[stepIndex];
  const [values, setValues] = useState({
    Email: "",
    Name: "",
    Message: "",
  });

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (currentStep.validate(values[currentStep.key])) {
        if (stepIndex < CONTACT_FORM_STEPS.length - 1) {
          setStepIndex((prev) => prev + 1);
        } else {
          setStepIndex((prev) => prev + 1);
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleResetValues = () => {
    setStepIndex(0);
    setValues({
      Email: "",
      Name: "",
      Message: "",
    });
  };
  return (
    <form id="contact-form" className="h-full w-full">
      <div className="flex h-10 w-full items-center rounded-t-lg bg-dark-blue px-4">
        <div className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>
        <h2 className="flex w-full items-center justify-center text-sm text-gray-100">
          Contact@Kiran
        </h2>
      </div>
      <div className="h-full min-h-96 w-full rounded-b-lg bg-dark-blue bg-opacity-60 px-2 py-3 backdrop-blur-lg backdrop-filter">
        <h5> Hey There!, I&apos;m excited to link🔗</h5>
        <hr className="my-2 border border-dashed" />

        {stepIndex < CONTACT_FORM_STEPS.length && (
          <TerminalStep
            handleValueChange={handleValueChange}
            handleKeyDown={handleKeyDown}
            currentStep={currentStep}
            values={values}
          />
        )}

        {stepIndex === CONTACT_FORM_STEPS.length && (
          <div className="mt-6 flex flex-col gap-3">
            <h2>Beautiful!, Here is what i have got</h2>
            <p>Email: {values.Email}</p>
            <p>Name: {values.Name}</p>
            <p>Message: {values.Message}</p>
            <h2>looks good?</h2>
            <div className="flex items-center gap-2">
              <ArrowButton
                Link="#contact-form"
                btnIcon={<MdOutlineRestartAlt />}
                btnText="Reset"
                onClick={handleResetValues}
              />
              <ArrowButton
                Link="#contact-form"
                btnIcon={<LuSendHorizonal />}
                btnText="Send It"
                onClick={handleSubmit}
              />
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default TerminalContactForm;

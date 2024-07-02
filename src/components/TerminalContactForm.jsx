import { useState } from "react";
import TerminalStep from "./TerminalStep";
import TerminalSelectedValue from "./TerminalSelectedValue";
import { CONTACT_FORM_STEPS } from "../utils/constants";
import TerminalQuestion from "./TerminalQuestion";
import TerminalFormPreview from "./TerminalFormPreview";

const TerminalContactForm = () => {
  const [stepIndex, setStepIndex] = useState(0);
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
      const currentStep = CONTACT_FORM_STEPS[stepIndex];
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
        {stepIndex >= 0 && (
          <TerminalQuestion currentStep={CONTACT_FORM_STEPS[0]} />
        )}
        {stepIndex === 0 && (
          <TerminalStep
            handleValueChange={handleValueChange}
            handleKeyDown={handleKeyDown}
            currentStep={CONTACT_FORM_STEPS[0]}
            values={values}
          />
        )}
        {stepIndex > 0 && (
          <TerminalSelectedValue selectedValue={values.Email} />
        )}
        {stepIndex >= 1 && (
          <TerminalQuestion currentStep={CONTACT_FORM_STEPS[1]} />
        )}
        {stepIndex === 1 && (
          <TerminalStep
            handleValueChange={handleValueChange}
            handleKeyDown={handleKeyDown}
            currentStep={CONTACT_FORM_STEPS[1]}
            values={values}
          />
        )}
        {stepIndex > 1 && <TerminalSelectedValue selectedValue={values.Name} />}
        {stepIndex >= 2 && (
          <TerminalQuestion currentStep={CONTACT_FORM_STEPS[2]} />
        )}
        {stepIndex === 2 && (
          <TerminalStep
            handleValueChange={handleValueChange}
            handleKeyDown={handleKeyDown}
            currentStep={CONTACT_FORM_STEPS[2]}
            values={values}
          />
        )}
        {stepIndex > 2 && (
          <TerminalSelectedValue selectedValue={values.Message} />
        )}

        {stepIndex === CONTACT_FORM_STEPS.length && (
          <TerminalFormPreview
            handleSubmit={handleSubmit}
            handleResetValues={handleResetValues}
            values={values}
          />
        )}
      </div>
    </form>
  );
};

export default TerminalContactForm;

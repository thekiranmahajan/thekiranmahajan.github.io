import { useState } from "react";
import TerminalStep from "./TerminalStep";
import TerminalSelectedValue from "./TerminalSelectedValue";

const TerminalContactForm = () => {
  const [step, setStep] = useState("Email");
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
    console.log(values);
  };

  const isValidEmail = (Email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(values);
      e.preventDefault();
      if (step === "Email" && isValidEmail(values.Email)) {
        setStep("Name");
      } else if (step === "Name" && values.Name) {
        setStep("Message");
      } else if (step === "Message" && values.Message) {
        setStep("Preview");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="h-full w-full">
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
        <p className="py-1">
          To start, could you give us{" "}
          <span className="text-purple-300">your email?</span>
        </p>
        {step === "Email" && (
          <TerminalStep
            values={values}
            handleValueChange={handleValueChange}
            handleKeyDown={handleKeyDown}
            step={step}
          />
        )}
        {step !== "Email" && (
          <TerminalSelectedValue selectedValue={values.Email} />
        )}
        {step !== "Email" && (
          <p className="py-1">
            Awesome!, What&apos;s{" "}
            <span className="text-purple-300">your good name?</span>
          </p>
        )}
        {step === "Name" && (
          <TerminalStep
            values={values}
            handleValueChange={handleValueChange}
            handleKeyDown={handleKeyDown}
            step={step}
          />
        )}
        {step !== "Name" && step !== "Email" && (
          <TerminalSelectedValue selectedValue={values.Name} />
        )}
        {step !== "Name" && step !== "Email" && (
          <p className="py-1">
            Perfect!,{" "}
            <span className="text-purple-300">how can i help you?</span>
          </p>
        )}
        {step === "Message" && (
          <TerminalStep
            values={values}
            handleValueChange={handleValueChange}
            handleKeyDown={handleKeyDown}
            step={step}
          />
        )}
        {step === "Preview" && (
          <TerminalSelectedValue selectedValue={values.Message} />
        )}
      </div>
    </form>
  );
};

export default TerminalContactForm;

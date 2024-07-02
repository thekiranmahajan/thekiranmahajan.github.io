import { MdOutlineRestartAlt } from "react-icons/md";
import ArrowButton from "./ArrowButton";
import { LuSendHorizonal } from "react-icons/lu";

const TerminalFormPreview = ({ handleSubmit, handleResetValues, values }) => {
  return (
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
  );
};

export default TerminalFormPreview;

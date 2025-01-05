import { MdOutlineRestartAlt } from "react-icons/md";
import AnimatedButton from "./AnimatedButton";
import { LuSendHorizonal } from "react-icons/lu";
import { EMAILJS_API_LINK } from "../utils/constants";

const TerminalFormPreview = ({ handleResetValues, values }) => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const email = values.Email;
  const name = values.Name;
  const message = values.Message;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Kiran",
        message: message,
      },
    };
    fetch(EMAILJS_API_LINK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        return response.text();
      })
      .then((text) => {
        console.log(text);
        handleResetValues();
        alert("Your Mail is sent");
      })
      .catch((error) => alert(`Oops...${error}`));
  };

  return (
    <div className="mt-6 flex flex-col gap-3">
      <h2>Beautiful!, Here is what i have got</h2>
      <p>Email: {email}</p>
      <p>Name: {name}</p>
      <p>Message: {message}</p>
      <h2>looks good?</h2>
      <div className="flex items-center gap-2">
        <AnimatedButton
          Link="#contact-form"
          btnIcon={<MdOutlineRestartAlt />}
          btnText="Reset"
          onClick={handleResetValues}
        />
        <AnimatedButton
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

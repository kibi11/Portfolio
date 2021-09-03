import { useForm } from "react-hook-form";
import "./Contact.css";
import { init, sendForm } from "emailjs-com";
import { useState } from "react";
init("user_2SDEeL0UL6Jv6ZiqOldAI");

const Contact = ({ handleAnimate, cardAnime }) => {
  const [statusMessage, setStatusMessage] = useState("Message");
  const [contactNumber, setContactNumber] = useState("000000");
  const [closeButton, setCloseButton] = useState("false");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }; // ...

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    /// generate the number and send the email to the form owner.
    const form = document.querySelector("#contact-form");
    const statusMessage = document.querySelector(".status-message");

    generateContactNumber();
    sendForm("service_zu2aiyd", "template_kcxezhj", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setStatusMessage("I'll get back to you shortly");
        statusMessage.className = "status-message success";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      },
      function (error) {
        console.log("FAILED...", error);
        setStatusMessage("Failed! You can contact via Social Media.");
        statusMessage.className = "status-message failure";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      },
      form.reset()
    );
  };

  const message = watch("message") || "";
  const leftChars = 1500 - message;

  const styleObj = {
    fontSize: 12,
    color: "red",
  };

  return (
    <div className="messageForm">
      <button
        className={`closeButton ${cardAnime ? "" : "hideButton"}`}
        type="submit"
        onClick={handleAnimate}
      >
        ❌
      </button>
      <div className="responsiveContact">Contact</div>
      <p className="status-message">{statusMessage}</p>
      <form
        className="formOuter"
        onSubmit={handleSubmit(onSubmit)}
        id="contact-form"
      >
        <input type="hidden" name="contact_number" value={contactNumber} />
        <input
          className="formInput"
          type="text"
          placeholder="Your Name"
          name="user_name"
          defaultValue="Anonymous"
          {...register("user_name")}
        ></input>
        {errors.user_email && <p style={styleObj}>This field is required</p>}
        <input
          className="formInput"
          type="email"
          placeholder="Your E-mail"
          name="user_email"
          {...register("user_email", { required: true })}
        ></input>
        <textarea
          className="formInput2"
          name="Text1"
          cols="30"
          rows="5"
          placeholder="Message"
          name="message"
          {...register("message")}
          maxLength="1500"
        ></textarea>
        {message.length !== 0 ? (
          <p className="message-chars-left">
            {`${500 - message.length} chars left`}
          </p>
        ) : null}

        <input className="formButton" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;

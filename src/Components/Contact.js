import { useForm } from "react-hook-form";
import "./Contact.css";
import { init, sendForm } from "emailjs-com";
import { useState, useRef } from "react";
init("user_2SDEeL0UL6Jv6ZiqOldAI");

const Contact = ({ handleAnimate, cardAnime }) => {
  const [statusMessage, setStatusMessage] = useState("Message");
  const [contactNumber, setContactNumber] = useState("000000");
  const [closeButton, setCloseButton] = useState("false");

  //FORM REF
  const messageForm = useRef();

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

  const onSubmit = ({ user_name, user_email, message }) => {
    console.log({ user_name, user_email, message });
    /// generate the number and send the email to the form owner.
    const form = document.querySelector("#contact-form");
    const statusMessage = document.querySelector(".status-message");

    generateContactNumber();
    sendForm(
      "service_sg771vd",
      "template_13sef71",
      "#contact-form",
      "LQKREMXHW2n9ujYQZ"
    ).then(
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
        className="form-container"
        onSubmit={handleSubmit(onSubmit)}
        id="contact-form"
        ref={messageForm}
      >
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            // className="formInput"
            type="text"
            name="user_name"
            {...register("user_name")}
          ></input>
          {errors.user_email && <p style={styleObj}>This field is required</p>}
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            // className="formInput"
            type="text"
            name="user_email"
            {...register("user_email", { required: true })}
          ></input>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea
            // className="formInput2"
            name="Text1"
            cols="30"
            rows="5"
            name="message"
            {...register("message")}
            maxLength="1500"
          ></textarea>
          {message.length !== 0 ? (
            <p className="message-chars-left">
              {`${500 - message.length} chars left`}
            </p>
          ) : null}
        </div>

        <input className="formButton" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;

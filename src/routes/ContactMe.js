import "../Styling/ContactMe.css";
import { useState } from "react";
import { send } from "emailjs-com";

const ContactMe = () => {
  const [toSend, setToSend] = useState({
    first_name: "",
    last_name: "",
    message: "",
    reply_to: "",
    phone_number: "",
    message_subject: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!toSend.from_name.trim()) {
      errors.from_name = "Name is required";
      isValid = false;
    }

    if (!toSend.reply_to.trim()) {
      errors.reply_to = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(toSend.reply_to)) {
      errors.reply_to = "Email is invalid";
      isValid = false;
    }

    if (toSend.phone_number.trim() && !/^[0-9]{10}$/.test(toSend.phone_number)) {
      errors.phone_number = "Phone number is invalid";
      isValid = false;
    }

    if (!toSend.message_subject.trim()) {
      errors.message_subject = "Subject is required";
      isValid = false;
    }

    if (!toSend.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const templateParams = {
        from_name: toSend.from_name,
        reply_to: toSend.reply_to,
        phone_number: toSend.phone_number,
        message_subject: toSend.message_subject,
        message: toSend.message,
      };

      send(
        "service_31m1gil",
        "template_l045t3o",
        templateParams,
        "2DdJSPho2QtcQRzGK"
      )
        .then(() => {
          alert("Success! Your message has been sent.");
          setToSend({
            from_name: "",
            reply_to: "",
            phone_number: "",
            message_subject: "",
            message: "",
          });
        })
        .catch((err) => {
          alert(
            "There was an error sending your message. Please try again later."
          );
        });
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="ContactMe">
      <form className="contact-form" onSubmit={onSubmit}>

        <div className="input-container">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            value={toSend.from_name}
            onChange={handleChange}
            className={`name-input ${errors.from_name ? "error" : ""}`}
          />
          {errors.from_name && (
            <span className="error-message">{errors.from_name}</span>
          )}
        </div>

        <div className="input-container">
          <input
            type="email"
            name="reply_to"
            placeholder="Email"
            value={toSend.reply_to}
            onChange={handleChange}
            className={`email-input ${errors.reply_to ? "error" : ""}`}
          />
          {errors.reply_to && (
            <span className="error-message">{errors.reply_to}</span>
          )}
        </div>

        <div className="input-container">
          <input
            type="tel"
            name="phone_number"
            placeholder="Phone Number(Optional)"
            value={toSend.phone_number}
            onChange={handleChange}
            className={`number-input ${errors.phone_number ? "error" : ""}`}
          />
          {errors.phone_number && (
            <span className="error-message">{errors.phone_number}</span>
          )}
        </div>

        <div className="input-container">
          <input
            type="text"
            name="message_subject"
            placeholder="Message Subject"
            value={toSend.message_subject}
            onChange={handleChange}
            className={`subject-input ${errors.message_subject ? "error" : ""}`}
          />
          {errors.message_subject && (
            <span className="error-message">{errors.message_subject}</span>
          )}
        </div>

        <div className="input-container">
          <input
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
            className={`message-input ${errors.message ? "error" : ""}`}
          />
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;

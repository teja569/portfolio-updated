import "./FormStyles.css";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1d9dos8',       // Replace with your Service ID
      'template_g9w22m9',      // Replace with your Template ID
      form.current,
      '7yUBQc5jMKwQCm4OB'        // Replace with your Public Key
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
    }, (error) => {
      console.log(error.text);
      alert("An error occurred. Try again!");
    });

    e.target.reset();
  };

  return (
    <div className="form-container">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Your Name" name="user_name" required />
        <input type="email" placeholder="Your Email" name="user_email" required />
        <input type="text" placeholder="Subject" name="subject" />
        <textarea placeholder="Your Message" name="message" rows="6" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
};

export default Form;

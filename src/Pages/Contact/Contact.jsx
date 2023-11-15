// import React from 'react'
import { useState } from "react";
import "./Contact.scss";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaPhoneSquareAlt,
  FaGithub,
  FaEnvelopeOpen,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    const mailtoLink = `mailto:balalaboseada@icloud.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    window.location.href = mailtoLink;

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="Contact section container">
      <h2 className="section__title">
        Get In<span>Touch</span>
      </h2>
      <div className="Contact__Container d-grid">
        <div
          className="Contact__data"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <h3 className="Contact__Title"> Don't be Shy</h3>
          <p className="Contact__description">
            Feel free to get in touch with me. i am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="Contact__info">
            <div className="info__item d-flex align-items-center">
              <FaEnvelopeOpen className="icon__info" />
              <div>
                <span className="info__title ">Mail Me</span>
                <h4 className="info__desc">balalaboseada@icloud.com</h4>
              </div>
            </div>
            <div className="info__item d-flex align-items-center">
              <FaPhoneSquareAlt className="icon__info" />
              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc">01060074246</h4>
              </div>
            </div>
          </div>
          <div className="contact__social d-flex">
            <a
              href="https://www.facebook.com/belal.hesham.1848?mibextid=2JQ9oc"
              className="contact_social_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/BelalAboSeda"
              className="contact_social_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/belal-hesham-88aa8a268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="contact_social_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/01060074246"
              target="_blank"
              rel="noopener noreferrer"
              className="contact_social_link"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div
          className="contact__form "
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <div className="group_form_input d-grid">
            <div className="form_input_div">
              <input
                type="text"
                placeholder="Your Name"
                className="form_control"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form_input_div">
              <input
                type="text"
                className="form_control"
                placeholder="Your Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form_input_div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form_control"
                value={subject}
                onChange={handleSubjectChange}
              />
            </div>
          </div>
          <div className="form_input_div">
            <textarea
              placeholder="Your Message"
              className="form_control text_erea"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <button className="Btn" onClick={handleSendMessage}>
            <span>Send Message</span>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

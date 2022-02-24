import React, { useState } from "react";
import logo from "../assets/mindev.png";
import Img from "next/image";
import { useToogleContext } from "../context/toogler";
const Contact = () => {
  const { setIsContact, isContact } = useToogleContext();
  const isExit = () => {
    setIsContact(!isContact);
  };
  if (!isContact) {
    return null;
  }

  return (
    <div className="contact">
      <div className="form ">
        <div className="img">
          <Img src={logo} alt="logo" />
        </div>
        <form>
          <div className="exit" onClick={isExit}>
            <i className="fas fa-times"></i>
          </div>
          <div className="input-wrapper">
            <label htmlFor="fullname"> Name</label>
            <input type="text" placeholder="Full name..." id="fullname" />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email">Email address</label>
            <input type="email" placeholder="Email address..." id="email" />
          </div>

          <div className="input-wrapper">
            <label>Message</label>
            <textarea placeholder="Tell us your project service.." />
          </div>
          <button> Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

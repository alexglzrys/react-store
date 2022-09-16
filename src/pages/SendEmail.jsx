import React from "react";
import "../styles/SendEmail.scss";
import Logotipo from "../assets/logos/logo_yard_sale.svg";
import Avatar from "../assets/icons/email.svg";

export const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="SendEmail-container">
        <img src={Logotipo} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={Avatar} alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

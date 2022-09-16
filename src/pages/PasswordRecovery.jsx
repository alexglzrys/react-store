import React from "react";
import "../styles/PasswordRecovery.scss";
import Logotipo from "../assets/logos/logo_yard_sale.svg";

export const PasswordRecovery = () => {
  return (
    <div className="PasswordRecovery">
      <div className="PasswordRecovery-container">
        <img src={Logotipo} alt="logo" className="logo" />
        <h1 className="title">Password Recovery</h1>
        <p className="subtitle">Enter a email for password recovery</p>
        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="user@email.com"
            className="input input-email"
          />
          <input
            type="submit"
            value="Confirm"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

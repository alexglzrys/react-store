import React, { useRef } from "react";
import "../styles/Login.scss";
import Logotipo from "../assets/logos/logo_yard_sale.svg";

export const Login = () => {
  // Generar una referencia hacia el formulario.
  // Esta técnica la podemos usar cuando no deseamos generar un estado para el formulario.
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    // Prevenir el comportamiento por defecto al enviar un formulario
    e.preventDefault();
    // Recuperar la data del formulario mediate formData,
    // haciendo uso de la referencia que apunta al formulario.
    // Es más amigable para el programador, y en ocasiones más directa para enviar los datos al backend
    const formData = new FormData(formRef.current);
    // Formater el cuerpo de la petición a enviar al servidor
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={Logotipo} alt="logo" className="logo" />
        <form action="/" className="form" ref={formRef}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="platzi@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <input
            type="submit"
            value="Log in"
            onClick={handleSubmit}
            className="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

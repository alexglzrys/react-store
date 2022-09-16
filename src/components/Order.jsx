import React from "react";
import "../styles/Order.scss";
import IconClose from "../assets/icons/icon_close.png";

export const Order = () => {
  return (
    <div className="Order">
      <div className="shopping-cart">
        <figure>
          <img
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="bike"
          />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src={IconClose} alt="close" />
      </div>
      <div className="shopping-cart">
        <figure>
          <img
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="bike"
          />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src={IconClose} alt="close" />
      </div>
      <div className="shopping-cart">
        <figure>
          <img
            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="bike"
          />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src={IconClose} alt="close" />
      </div>
      <div className="Order-total">
        <p>
          <span>Total</span>
        </p>
        <p>$560.00</p>
      </div>
      <button className="primary-button">Checkout</button>
    </div>
  );
};

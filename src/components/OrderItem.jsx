import React from "react";
import "../styles/OrderItem.scss";

export const OrderItem = () => {
  return (
    <div className="OrderItem">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src="./icons/flechita.svg" alt="arrow" />
    </div>
  );
};

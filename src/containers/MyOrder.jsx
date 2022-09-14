import React from "react";
import { Order } from "../components/Order";
import "../styles/MyOrder.scss";

export const MyOrder = () => {
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src="./icons/flechita.svg" alt="arrow" />
        <p className="title">My order</p>
      </div>
      <Order />
    </aside>
  );
};

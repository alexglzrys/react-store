import React from "react";
import { Order } from "../components/Order";
import "../styles/MyOrder.scss";
import IconFlecha from "../assets/icons/flechita.svg";

export const MyOrder = () => {
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={IconFlecha} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <Order />
    </aside>
  );
};

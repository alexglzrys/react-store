import React from "react";
import IconClose from "../assets/icons/icon_close.png";

export const OrderItemSidebar = ({ product }) => {
  return (
    <div className="shopping-cart">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={IconClose} alt="Delete Product" />
    </div>
  );
};

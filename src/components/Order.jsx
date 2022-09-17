import React, { useContext } from "react";
import "../styles/Order.scss";

import { AppContext } from "../context/AppContext";
import { OrderItemSidebar } from "./OrderItemSidebar";

export const Order = () => {
  // usar el valor que comparte el contexto AppContext
  const { state, getTotal } = useContext(AppContext);
  console.log(getTotal);
  return (
    <div className="Order">
      {/* Mostrar los productos agregados al carrito */}
      {state.cart.map((product, index) => (
        <OrderItemSidebar key={`product-item-${index}`} product={product} />
      ))}

      <div className="Order-total">
        <p>
          <span>Total</span>
        </p>
        <p>$ {Number(getTotal).toFixed(2)}</p>
      </div>
      <button className="primary-button">Checkout</button>
    </div>
  );
};

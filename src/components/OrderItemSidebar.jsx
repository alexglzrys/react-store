import React, { useContext } from "react";
import IconClose from "../assets/icons/icon_close.png";
import { AppContext } from "../context/AppContext";

export const OrderItemSidebar = ({ product }) => {
  // usar el contexto compartido por AppContext
  const { deleteFromCart } = useContext(AppContext);

  const handleDeleteFromCart = (id) => {
    if (window.confirm("¿Deseas eliminar el producto?")) deleteFromCart(id);
  };

  return (
    <div className="shopping-cart">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src={IconClose}
        alt="Delete Product"
        onClick={() => handleDeleteFromCart(product.id)}
      />
    </div>
  );
};

import React, { useContext } from "react";
import "../styles/ProductItem.scss";
import IconAddToCart from "../assets/icons/bt_add_to_cart.svg";
import { AppContext } from "../context/AppContext";

export const ProductItem = ({ product }) => {
  // Usar el contexto que provee el AppContext
  const { addToCart } = useContext(AppContext);

  const handleClick = (product) => {
    // Agregar el producto al carrito de compra. Mediante la función compartida por el contexto
    addToCart(product);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="ProductItem-body">
        <div>
          <p>$ {Number.parseFloat(product.price).toFixed(2)}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={IconAddToCart} alt="Add to cart" />
        </figure>
      </div>
    </div>
  );
};

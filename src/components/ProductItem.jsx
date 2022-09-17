import React, { useState } from "react";
import "../styles/ProductItem.scss";
import IconAddToCart from "../assets/icons/bt_add_to_cart.svg";

export const ProductItem = ({ product }) => {
  const [cart, setCart] = useState([]);
  const handleClick = () => {
    setCart([...cart]);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="ProductItem-body">
        <div>
          <p>$ {Number.parseFloat(product.price).toFixed(2)}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleClick}>
          <img src={IconAddToCart} alt="Add to cart" />
        </figure>
      </div>
    </div>
  );
};

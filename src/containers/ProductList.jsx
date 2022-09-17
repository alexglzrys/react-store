import React from "react";
import { ProductItem } from "../components/ProductItem";
import { useGetProducts } from "../hooks/useGetProducts";
import "../styles/ProductList.scss";

const API = "https://api.escuelajs.co/api/v1/products";

export const ProductList = () => {
  // Invocar al custom hook encargado de solicitar el listado de productos desde un API
  const products = useGetProducts(API);

  return (
    <section className="ProductList">
      {/* <div className="cards-container"> */}
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      {/* </div> */}
    </section>
  );
};

import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductItem } from "../components/ProductItem";
import "../styles/ProductList.scss";

const API = "https://api.escuelajs.co/api/v1/products";

export const ProductList = () => {
  // Estado para almacenar los productos
  const [products, setProducts] = useState([]);
  // Comunicación con API (efecto secundario)
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(API);
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <section className="ProductList">
      {/* <div className="cards-container"> */}
      {products.map((product) => (
        <ProductItem key={product.id} />
      ))}
      {/* </div> */}
    </section>
  );
};

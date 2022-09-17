import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Custom Hook para la consulta de productos desde un API
 *
 * @param API
 * @returns products[]
 */

export const useGetProducts = (API) => {
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

  return products;
};

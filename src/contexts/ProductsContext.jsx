import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const ProductsContext = createContext();

export function ProductListProvider({ children }) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = "https://fakestoreapi.com/products";
  useEffect(() => {
    const getProductList = async () => {
      try {
        const response = await axios.get(`${BASE_URL}`);
        setProductList(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getProductList();
  }, []);

  return (
    <ProductsContext.Provider value={{ productList, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}

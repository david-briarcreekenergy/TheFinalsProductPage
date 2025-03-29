import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const ProductsContext = createContext();

export const ProductListProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProductList(response.data);
        // console.log(response.data);
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
};

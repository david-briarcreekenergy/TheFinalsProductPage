import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { getProductList } from "../utils/api";
export const ProductsContext = createContext();

export const ProductListProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /*  const fetchProducts = async () => {
      try {
        const productList = await getProductList(); // Call the API function
        setProductList(productList); // Set the response to state
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts(); */
    getProductList()
      .then((data) => setProductList(data))
      .catch((error) => {
        console.log("ERROR IN CATCH");
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProductsContext.Provider value={{ productList, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

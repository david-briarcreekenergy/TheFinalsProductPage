import { createContext, useState, useEffect } from "react";
import { getProductList } from "../utils/api";
export const ProductsContext = createContext();

export const ProductListProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductList()
      .then((data) => {
        setProductList(data);
        const categories = [
          ...new Set(data.map((product) => product.category))
        ].sort();
        setCategories(categories);
      })
      .catch((error) => {
        alert("ERROR in ProductsContext>useEffect>GetProductList", error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProductsContext.Provider
      value={{ productList, categories, loading, error }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

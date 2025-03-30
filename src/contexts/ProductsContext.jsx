import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import { getProductList } from "../utils/api";
export const ProductsContext = createContext();

export const ProductListProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredSearchProducts, setFilteredSearchProducts] = useState([]);
  const [filteredCategoryProducts, setFilteredCategoryProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    // Filter products based on the search text
    if (value.trim() !== "") {
      const filtered = productList.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSearchProducts(filtered);
    } else {
      setFilteredSearchProducts([]);
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;

    if (category) {
      const filtered = productList.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredCategoryProducts(filtered);
      if (location !== "products") {
        navigate("products");
      }
    } else {
      setFilteredCategoryProducts([]);
    }

    setFilteredSearchProducts([]);
    setSearchText("");
  };

  return (
    <ProductsContext.Provider
      value={{
        productList,
        searchText,
        setSearchText,
        filteredSearchProducts,
        setFilteredSearchProducts,
        handleSearchChange,
        handleCategoryChange,
        categories,
        filteredCategoryProducts,
        setFilteredCategoryProducts,
        loading,
        error
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

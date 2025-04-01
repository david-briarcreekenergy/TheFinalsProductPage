import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { getProductList } from "../utils/api";
import { sorts } from "../utils/sorts";

export const ProductsContext = createContext();

export const ProductListProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredSearchProducts, setFilteredSearchProducts] = useState([]);
  const [filteredCategoryProducts, setFilteredCategoryProducts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [sortedItems, setSortedItems] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getProductList()
      .then((data) => {
        if (typeof data !== "object") {
          throw "No Data";
        }
        setProductList(data);
        console.log("PRODLIST", data);
        const categories = [
          ...new Set(data.map((product) => product.category)),
        ].sort();
        setCategories(categories);
      })
      .catch((error) => {
        alert("ERROR in ProductsContext>useEffect>GetProductList: " + error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSortChange = (event) => {
    const sort = event.target.value;
    setSelectedSort(sort);

    let sortedProducts = [
      ...(filteredCategoryProducts.length > 0
        ? filteredCategoryProducts
        : productList),
    ];

    if (sort === sorts.none) {
      setSortedItems(null);
      return;
    } else if (sort === sorts.rating) {
      sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (sort === sorts.priceHigh) {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sort === sorts.priceLow) {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setSortedItems(sortedProducts);
  };

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

  const filteredByCategory = (category) =>
    productList.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedSort("");
    setSortedItems(null);
    setCategory(category);
    if (category) {
      setFilteredCategoryProducts(filteredByCategory(category));
      if (location !== "products") {
        navigate("products");
      }
    } else {
      setFilteredCategoryProducts([]);
    }

    setFilteredSearchProducts([]);
    setSearchText("");
  };

  const restoreProductList = () => {
    setFilteredCategoryProducts([]);
    setSelectedSort("");
    setSortedItems(null);
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
        selectedSort,
        handleSortChange,
        category,
        setCategory,
        categories,
        filteredByCategory,
        filteredCategoryProducts,
        setFilteredCategoryProducts,
        sortedItems,
        setSortedItems,
        restoreProductList,
        loading,
        error,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

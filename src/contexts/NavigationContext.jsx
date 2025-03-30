import { createContext, useContext } from "react";
import { ProductsContext } from "./ProductsContext";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const {
    setSearchText,
    setFilteredSearchProducts,
    setFilteredCategoryProducts
  } = useContext(ProductsContext);

  const handleNavLinkClick = () => {
    console.log("INHANDLENAVLINKCLICK");
    setSearchText("");
    setFilteredSearchProducts([]);
    setFilteredCategoryProducts([]);
  };

  return (
    <NavigationContext.Provider value={handleNavLinkClick}>
      {children}
    </NavigationContext.Provider>
  );
};

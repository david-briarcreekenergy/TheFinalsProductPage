import { createContext, useState } from "react";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleNavLinkClick = () => {
    setSearchText("");
    setFilteredProducts([]);
  };

  return (
    <NavigationContext.Provider
      value={{
        searchText,
        setSearchText,
        filteredProducts,
        setFilteredProducts,
        handleNavLinkClick,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

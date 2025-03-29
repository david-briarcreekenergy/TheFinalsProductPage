import Layout from "./components/Layout";
import { Outlet } from "react-router";
import { ProductListProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";
import { NavigationProvider } from "./contexts/NavigationContext";
import sundryTheme from "./contexts/ThemeContext";
import { ThemeProvider } from "@emotion/react";
import "./index.css";

function App() {
  return (
    <ProductListProvider>
      <NavigationProvider>
        <CartProvider>
          <ThemeProvider theme={sundryTheme}>
            <Layout>
              <Outlet />
            </Layout>
          </ThemeProvider>
        </CartProvider>
      </NavigationProvider>
    </ProductListProvider>
  );
}

export default App;

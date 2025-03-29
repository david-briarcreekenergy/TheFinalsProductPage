// import "./App.css";
import Layout from "./components/Layout";
import { Outlet } from "react-router";
import { ProductListProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";
import { NavigationProvider } from "./contexts/NavigationContext";

function App() {
  return (
    <ProductListProvider>
      <NavigationProvider>
        <CartProvider>
          <Layout>
            <Outlet />
          </Layout>
        </CartProvider>
      </NavigationProvider>
    </ProductListProvider>
  );
}

export default App;

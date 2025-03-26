import "./App.css";
import Layout from "./components/Layout";
import { Outlet } from "react-router";
import { ProductListProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <Layout>
      <ProductListProvider>
        <CartProvider>
          <Outlet />
        </CartProvider>
      </ProductListProvider>
    </Layout>
  );
}

export default App;

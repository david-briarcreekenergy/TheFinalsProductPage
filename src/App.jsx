import "./App.css";
import Layout from "./components/Layout";
import { Outlet } from "react-router";
import { ProductListProvider } from "./contexts/ProductsContext";

function App() {
  return (
    <Layout>
      <ProductListProvider>
        <Outlet />
      </ProductListProvider>
    </Layout>
  );
}

export default App;

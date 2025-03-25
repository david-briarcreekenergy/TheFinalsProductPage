import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductList from "./components/productList/ProductList.jsx";
import ProductDetails from "./components/productDetail/ProductDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="products" element={<ProductList />} />
        <Route path="details/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

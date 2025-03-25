import { useEffect, useState } from "react";
import "./App.css";
import { getProductList } from "./utils/api";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList().then((data) => {
      setProductList(data);
    });
    console.log("P", productList);
  }, [productList]);

  return (
    <>
      <h1>hello world</h1>
    </>
  );
}

export default App;

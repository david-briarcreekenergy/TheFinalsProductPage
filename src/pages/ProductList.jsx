import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

const ProductList = () => {
  const { productList, loading, error } = useContext(ProductsContext);

  const listItems = productList.map((product) => (
    <ProductCard key={product.id} product={product}></ProductCard>
  ));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 id="product-list-h1">Product List</h1>
      <Box>
        <Grid container spacing={2}>
          {listItems}
        </Grid>
      </Box>
    </>
  );
};

export default ProductList;

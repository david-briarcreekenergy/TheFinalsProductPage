import { useContext, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const ProductList = () => {
  const { productList, filteredCategoryProducts, loading, error } =
    useContext(ProductsContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const listItems = (
    filteredCategoryProducts && filteredCategoryProducts.length > 0
      ? filteredCategoryProducts
      : productList
  ).map((product) => <ProductCard key={product.id} product={product} />);

  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 3, xl: 3 }}
        justifyContent="center"
        alignItems="center"
      >
        {listItems}
      </Grid>
    </Box>
  );
};

export default ProductList;

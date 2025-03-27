import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";

const ProductList = () => {
  const { productList, loading, error } = useContext(ProductsContext);

  const listItems = productList.map((product) => (
    <ProductCard key={product.id} product={product}></ProductCard>
  ));
  /* const listItems = productList.map((item) => {
    return (
      <Paper key={item.id}>
        <img src={item.image} />
      </Paper>
    );
  }); */

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 id="product-list-h1">The Doo Dads</h1>
      <Box>
        <Container>
          <Grid container spacing={2}>
            {listItems}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductList;

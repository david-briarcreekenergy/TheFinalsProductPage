import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const ProductList = () => {
  const { productList, loading, error } = useContext(ProductsContext);
  const listItems = productList.map((product) => (
    <ProductCard key={product.id} product={product}></ProductCard>
  ));

  /* FOR TESTING PURPOSES const listItems = productList.map((item) => {
    return (
      <Paper key={item.id}>
        <img src={item.image} />
      </Paper>
    );
  }); */

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box>
      <Typography variant="h2" component="h1" sx={{ ml: 10 }}>
        The Doo Dads
      </Typography>
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

import { useContext } from "react";
import { useTheme } from "@emotion/react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CategorySelect from "../components/CategorySelect";
import SortSelect from "../components/SortSelect";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const ProductList = () => {
  const {
    productList,
    filteredCategoryProducts,
    loading,
    error,
    sortedItems,
    restoreProductList,
  } = useContext(ProductsContext);

  const theme = useTheme();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  let listItems = (
    sortedItems
      ? sortedItems
      : filteredCategoryProducts.length > 0
      ? filteredCategoryProducts
      : productList
  ).map(product => <ProductCard key={product.id} product={product} />);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: { xs: 15, sm: 10 },
        width: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          fontSize={{ xs: "1.5em", sm: "3em" }}
        >
          What We Have Today
        </Typography>
        <Button
          onClick={restoreProductList}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            "&:hover": { color: theme.palette.text.primary },
          }}
        >
          <Typography variant="caption">Clear All</Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          columnGap: 5,
          rowGap: 1,
          marginBottom: 5,
        }}
      >
        <CategorySelect />
        <SortSelect />
      </Box>
      <Grid
        container
        spacing={2}
        justifyContent={{ xs: "flex-start", sm: "center", md: "flex-start" }}
        alignItems="center"
      >
        {listItems}
      </Grid>
    </Box>
  );
};

export default ProductList;

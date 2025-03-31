import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CategorySelect from "../components/CategorySelect";
import SortSelect from "../components/SortSelect";

const ProductList = () => {
  const { productList, filteredCategoryProducts, loading, error, sortedItems } =
    useContext(ProductsContext);
  console.log(filteredCategoryProducts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  let listItems = (
    sortedItems
      ? sortedItems
      : filteredCategoryProducts.length > 0
      ? filteredCategoryProducts
      : productList
  ).map((product) => <ProductCard key={product.id} product={product} />);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          gap: 4,
          width: "100%",
          marginBottom: "1em",
          marginRight: "30px",
        }}
      >
        <CategorySelect />

        <SortSelect />
      </Box>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 3, xl: 3 }}
          justifyContent="flex-start"
          alignItems="center"
        >
          {listItems}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductList;

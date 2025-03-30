import { useContext, useState } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../components/ProductCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { camelCaseToTitleCase } from "../utils/stringUtils";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const sorts = {
  none: 0,
  rating: 1,
  priceHigh: 2,
  priceLow: 3
};

const ProductList = () => {
  const { productList, filteredCategoryProducts, loading, error } =
    useContext(ProductsContext);
  const [sortedItems, setSortedItems] = useState(null);
  const [selectedSort, setSelectedSort] = useState(sorts.none);
  const theme = useTheme();

  const menuItems = Object.entries(sorts).map(([key, value]) => (
    <MenuItem
      key={key}
      value={value}
      sx={{
        "&:hover": {
          backgroundColor: theme.palette.secondary.main,
          color: "black"
        }
      }}
    >
      <Typography color={theme.palette.primary.main}>
        {camelCaseToTitleCase(key)}
      </Typography>
    </MenuItem>
  ));

  const handleSortChange = (event) => {
    const sort = event.target.value;
    setSelectedSort(sort);

    let sortedProducts = [
      ...(filteredCategoryProducts.length > 0
        ? filteredCategoryProducts
        : productList)
    ];

    if (sort === sorts.none) {
      setSortedItems(null);
      return;
    }

    if (sort === sorts.rating) {
      sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    if (sort === sorts.priceHigh) {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === sorts.priceLow) {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setSortedItems(sortedProducts);
  };

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
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ minWidth: 120, marginBottom: "10px", marginRight: "10px" }}>
          <FormControl fullWidth>
            <InputLabel id="sort-select-label">Sort</InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              value={selectedSort}
              label="Sort"
              onChange={handleSortChange}
            >
              {menuItems}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ display: "" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 3, xl: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          {listItems}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductList;

import { useContext, useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import { CartContext } from "../contexts/CartContext";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { ProductsContext } from "../contexts/ProductsContext";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { titleCase } from "../utils/stringUtils";

const StyledSelect = styled(Select)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const CategorySelect = ({ category, setCategory, handleCategoryChange }) => {
  const { categories } = useContext(ProductsContext);
  const [categoryList, setCategoryList] = useState(categories || []);
  const theme = useTheme();
  const handleChange = (e) => {
    alert("CATEGORY changed");
    setCategory(e.target.value);
  };

  return (
    <FormControl sx={{ width: "25%" }}>
      <InputLabel id="categories-label" sx={{ color: "white" }}>
        Categories
      </InputLabel>
      <StyledSelect
        labelId="categories-label"
        id="categories-select"
        value={""}
        label="Category"
        onChange={handleCategoryChange}
      >
        {categories.map((cat) => (
          <MenuItem
            key={cat}
            value={cat}
            sx={{
              "&:hover": {
                backgroundColor: alpha(theme.palette.secondary.main, 0.25)
              }
            }}
          >
            <Typography color={theme.palette.primary.main}>
              {titleCase(cat)}
            </Typography>
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default CategorySelect;

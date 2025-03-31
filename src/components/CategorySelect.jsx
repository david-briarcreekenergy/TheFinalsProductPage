import { useContext } from "react";
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
  marginLeft: 0
}));

const CategorySelect = () => {
  const { category, categories, handleCategoryChange } =
    useContext(ProductsContext);

  const theme = useTheme();

  const menuItems = categories.map((cat) => (
    <MenuItem
      key={cat}
      value={cat}
      sx={{
        "&:hover": {
          backgroundColor: alpha(theme.palette.secondary.main, 0.25),
          color: "black"
        }
      }}
    >
      <Typography color="black">{titleCase(cat)}</Typography>
    </MenuItem>
  ));

  return (
    <FormControl
      sx={{
        margin: 0,
        padding: 0,
        width: "20%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <InputLabel
        id="categories-label"
        sx={{ lineHeight: "0.9em", height: "50%", color: "black" }}
      >
        Categories
      </InputLabel>
      <Select
        labelId="categories-label"
        id="categories-select"
        value={category}
        label="Category"
        onChange={handleCategoryChange}
        sx={{
          paddingLeft: "10px",
          backgroundColor: alpha(theme.palette.common.white, 0.15),
          "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
          },
          height: "40px",
          width: "100%"
        }}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;

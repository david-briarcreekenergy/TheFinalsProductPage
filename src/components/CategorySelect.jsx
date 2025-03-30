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
  marginLeft: 0,
  /* width: "50%",
  height: "50%", */
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    // width: "auto"
  }
}));

const CategorySelect = () => {
  const { category, categories, handleCategoryChange } =
    useContext(ProductsContext);

  const theme = useTheme();

  console.log("Selected Category:", category);
  console.log("Categories:", categories);

  return (
    <FormControl
      sx={{
        display: "flex",
        // flexGrow: 1,
        margin: 0,
        padding: 0,
        width: "20%"
      }}
    >
      <InputLabel
        id="categories-label"
        sx={{
          height: "40%",
          lineHeight: "1em", // Adjust line height if necessary
          fontSize: "0.8rem", // Match font size with Search,
          color: "white",
          "& .MuiInputLabel-label": { color: "white" }
        }}
      >
        Categories
      </InputLabel>
      <Select
        labelId="categories-label"
        id="categories-select"
        value={category || ""}
        label="Category"
        onChange={handleCategoryChange}
        color="white"
        sx={{
          backgroundColor: alpha(theme.palette.common.white, 0.15),
          "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
          },
          height: "40px",
          color: "white",
          "& .MuiSelect-select": {
            color: "white" // Ensure the selected value text is white
          }
        }}
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
      </Select>
    </FormControl>
  );
};

export default CategorySelect;

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
          lineHeight: "1em",
          fontSize: "0.8rem", //equal to Search fontSize
          color: "white",
          "& .MuiLabel-label": { color: "white" }
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
        sx={{
          paddingLeft: "10px",
          backgroundColor: alpha(theme.palette.common.white, 0.15),
          "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
          },
          height: "40px"
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

import { useContext } from "react";
import { useTheme } from "@emotion/react";
import { alpha } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { camelCaseToTitleCase } from "../utils/stringUtils";
import { sorts } from "../utils/sorts";
import { ProductsContext } from "../contexts/ProductsContext";

const SortSelect = () => {
  const theme = useTheme();
  const { selectedSort, handleSortChange } = useContext(ProductsContext);

  const menuItems = Object.entries(sorts).map(([key, value]) => (
    <MenuItem
      key={key}
      value={value}
      sx={{
        "&:hover": {
          backgroundColor: alpha(theme.palette.secondary.main, 0.25),
          color: "black",
        },
      }}
    >
      <Typography color="black">{camelCaseToTitleCase(key)}</Typography>
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
        alignItems: "center",
      }}
    >
      <InputLabel
        id="sort-label"
        sx={{ lineHeight: "0.9em", height: "50%", color: "black" }}
      >
        Sort
      </InputLabel>
      <Select
        labelId="categories-label"
        id="categories-select"
        value={selectedSort || ""}
        label="Sort"
        onChange={handleSortChange}
        sx={{
          paddingLeft: "10px",
          backgroundColor: alpha(theme.palette.common.white, 0.15),
          "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
          },
          height: "40px",
          width: "100%",
        }}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
};

export default SortSelect;

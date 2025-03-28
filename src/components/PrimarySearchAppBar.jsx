import { useState, useRef, useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router";
import Paper from "@mui/material/Paper";
import { ProductsContext } from "../contexts/ProductsContext";
import { NavigationContext } from "../contexts/NavigationContext";
import { StyledNavLink } from "./StyledNavLink";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    // width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    /*  [theme.breakpoints.up("md")]: {
      width: "20ch",
    }, */
  },
}));

export default function PrimarySearchAppBar() {
  const { productList } = useContext(ProductsContext);
  const {
    searchText,
    setSearchText,
    filteredProducts,
    setFilteredProducts,
    handleNavLinkClick,
  } = useContext(NavigationContext);
  const searchRef = useRef(null);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    // Filter products based on the search text
    if (value.trim() !== "") {
      const filtered = productList.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const renderSearchResults = (
    <Paper
      sx={{
        position: "absolute",
        top: searchRef.current
          ? searchRef.current.getBoundingClientRect().bottom + window.scrollY
          : 0,
        left: searchRef.current
          ? searchRef.current.getBoundingClientRect().left + window.scrollX
          : 0,
        width: searchRef.current
          ? searchRef.current.getBoundingClientRect().width
          : "100%",
        zIndex: 10,
        maxHeight: 300,
        overflowY: "auto",
      }}
    >
      <List>
        {filteredProducts.map((product) => (
          <StyledNavLink
            to={`/products/details/${product.id}`}
            key={product.id}
            onClick={handleNavLinkClick}
          >
            <ListItem
              sx={{
                padding: 1,
                borderBottom: "1px solid #ddd",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              <ListItemText>{product.title}</ListItemText>
            </ListItem>
          </StyledNavLink>
        ))}
      </List>
    </Paper>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Dave's DooDads
            </Typography>
          </Box>
          <Search ref={searchRef}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchText}
              onChange={handleSearchChange}
            />
          </Search>

          <IconButton sx={{ marginLeft: 10 }} onClick={handleNavLinkClick}>
            <NavLink to="/cart">
              <ShoppingCartIcon />
            </NavLink>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Search Results */}
      {filteredProducts.length > 0 && renderSearchResults}
    </Box>
  );
}

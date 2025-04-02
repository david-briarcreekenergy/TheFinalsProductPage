import { useRef, useContext, useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CardMedia from "@mui/material/CardMedia";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router";
import { ProductsContext } from "../contexts/ProductsContext";
import { NavigationContext } from "../contexts/NavigationContext";
import StyledNavLink from "./StyledNavLink";
import { CartContext } from "../contexts/CartContext";
import CategorySelect from "./CategorySelect";
// import logo from "../../public/sundry-logo.jpg";

const Search = styled("div")(({ theme }) => ({
  height: "40px",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    width: "100%", // Width for small screens and up
  },
  [theme.breakpoints.up("sm")]: {
    width: "95%", // Width for small screens and up
    marginLeft: theme.spacing(3),
  },
  [theme.breakpoints.up("md")]: {
    width: "75%", // Width for medium screens and up
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
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

export default function PrimarySearchAppBar() {
  const { totalCartItemCount, cartSubTotal } = useContext(CartContext);
  const { searchText, filteredSearchProducts, handleSearchChange } =
    useContext(ProductsContext);
  const { handleNavLinkClick } = useContext(NavigationContext);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);
  const [showResults, setShowResults] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    handleNavLinkClick();
  };

  const handleInputFocus = () => {
    setShowResults(true);
  };

  const handleClickAway = (event) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target) &&
      resultsRef.current &&
      !resultsRef.current.contains(event.target)
    ) {
      setShowResults(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setShowResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickAway);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickAway);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const renderSearchResults = (
    <Paper
      ref={resultsRef}
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
        {filteredSearchProducts &&
          filteredSearchProducts.map((product) => (
            <StyledNavLink
              to={`/products/details/${product.id}`}
              key={product.id}
              onClick={handleClick}
              onWhiteBkgrd
            >
              <ListItem
                sx={{
                  padding: 1,
                  borderBottom: "1px solid #ddd",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                    color: "black",
                  },
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
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: 0,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <CardMedia
              component="img"
              image="/sundry-logo.jpg"
              alt="Sundry company logo"
              height="100"
              sx={{
                objectFit: "scale-down",
                [theme.breakpoints.up("sm")]: {
                  width: "50px", // Width for small screens and up
                },
                [theme.breakpoints.up("md")]: {
                  width: "200px", // Width for medium screens and up
                },
                [theme.breakpoints.up("lg")]: {
                  width: "300px", // Width for large screens and up
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Search ref={searchRef}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchText || ""}
                onChange={handleSearchChange}
                onFocus={handleInputFocus}
              />
            </Search>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 0,
              width: "20%",
            }}
          >
            <IconButton onClick={handleNavLinkClick}>
              <NavLink to="/cart">
                <Badge
                  badgeContent={totalCartItemCount()}
                  showZero
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "transparent",
                      color: "white",
                    },
                  }}
                >
                  {/* theme comes from ThemeProvider using ThemeContext.jsx */}
                  <ShoppingCartIcon
                    sx={{ color: theme.palette.text.primary }}
                  />
                </Badge>
              </NavLink>
            </IconButton>
            <Typography>{cartSubTotal()}</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Search Results */}
      {showResults &&
        filteredSearchProducts &&
        filteredSearchProducts.length > 0 &&
        renderSearchResults}
    </Box>
  );
}

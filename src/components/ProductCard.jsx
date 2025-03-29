// TODO fix the positioning of the POPOVER
import { useContext, useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Box from "@mui/material/Box";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from "../contexts/CartContext";
import { styled } from "@mui/material/styles";
import { Link } from "react-router";
import StyledNavLink from "./StyledNavLink";
import { NavigationContext } from "../contexts/NavigationContext";
import CartItemQuantityBtnGroup from "./CartItemQuantityBtnGroup";

const ProductCard = ({ product }) => {
  const { addToCart, checkForItemInCart } = useContext(CartContext);
  const [isItemInCart, setIsItemInCart] = useState(() => {
    return checkForItemInCart(product.id);
  });
  const { handleNavLinkClick } = useContext(NavigationContext);

  const handleCartIconClick = () => {
    addToCart({ product: product, qty: 1 });
    setIsItemInCart(true);
  };

  const StyledCard = styled(Card)(({ theme }) => ({
    width: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    [theme.breakpoints.up("xs")]: {
      height: "50%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "75%",
    },
    [theme.breakpoints.up("md")]: {
      height: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "50%",
    },
  }));

  return (
    <StyledCard>
      <Link to={`/products/details/${product.id}`}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={`A picture of a/an ${product.title}`}
          sx={{ objectFit: "scale-down" }}
          onClick={handleNavLinkClick}
        />
      </Link>
      <StyledNavLink
        to={`/products/details/${product.id}`}
        key={product.id}
        onClick={handleNavLinkClick}
        textOnly={true}
      >
        <CardHeader
          title={
            product.title.length > 70
              ? product.title.slice(0, 70) + "..."
              : product.title
          }
          sx={{
            height: 150,
            display: "flex",
            alignItems: "flex-start",
            padding: 2,
            overflow: "hidden",
          }}
        />
      </StyledNavLink>
      <CardActions disableSpacing>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h5">${product.price.toFixed(2)}</Typography>

          {isItemInCart ? (
            <CartItemQuantityBtnGroup
              product={product}
              setIsItemInCart={setIsItemInCart}
              sx={{ width: "35%" }}
            />
          ) : (
            <IconButton
              onClick={handleCartIconClick}
              id={`add-to-cart-${product.id}`}
            >
              <AddShoppingCartIcon fontSize="large" />
            </IconButton>
          )}
        </Box>
      </CardActions>
    </StyledCard>
  );
};

export default ProductCard;

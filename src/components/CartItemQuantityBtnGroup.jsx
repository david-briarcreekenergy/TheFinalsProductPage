import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useTheme } from "@mui/material";

const CartItemQuantityBtnGroup = ({ product, sx = {} }) => {
  const {
    getCartItem,
    addToCart,
    updateCartItemQty,
    removeFromCart,
    checkForItemInCart,
    cartItemCount
  } = useContext(CartContext);

  const theme = useTheme();

  const handleAddIconClick = () => {
    const cartItem = getCartItem(product.id);
    updateCartItemQty(product.id, cartItem.qty + 1);
  };

  const handleDeleteIconClick = () => {
    const cartItem = getCartItem(product.id);
    let cartQty = cartItem.qty;
    cartQty = cartQty - 1;
    cartQty
      ? updateCartItemQty(product.id, cartQty)
      : removeFromCart(product.id);
  };

  const handleCartIconClick = () => {
    addToCart({ product: product, qty: 1 });
  };

  if (checkForItemInCart(product.id)) {
    return (
      <ButtonGroup
        sx={{
          alignSelf: "flex-end",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "125px",
          border: "1px solid gray",
          borderRadius: "30px",
          ...sx
        }}
      >
        <IconButton onClick={handleDeleteIconClick}>
          <DeleteOutlineIcon fontSize="large" />
        </IconButton>
        <Typography variant="h5" sx={{ color: "black" }}>
          {cartItemCount(product.id)}
        </Typography>
        <IconButton onClick={handleAddIconClick} fontSize="large">
          <AddIcon />
        </IconButton>
      </ButtonGroup>
    );
  }

  return (
    <IconButton
      onClick={handleCartIconClick}
      id={`add-to-cart-${product.id}`}
      sx={{
        color: theme.palette.primary.main,
        "&:hover": {
          color: theme.palette.text.primary,
          backgroundColor: "transparent"
        },
        alignSelf: "flex-end"
      }}
    >
      <AddShoppingCartIcon fontSize="large" />
    </IconButton>
  );
};

export default CartItemQuantityBtnGroup;

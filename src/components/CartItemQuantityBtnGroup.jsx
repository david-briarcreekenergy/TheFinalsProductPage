import { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";

const CartItemQuantityBtnGroup = ({ product, setIsItemInCart, sx = {} }) => {
  const { cartItems, updateCartItemQty, removeFromCart } =
    useContext(CartContext);
  const itemInCart = cartItems.find((item) => item.product.id === product.id);

  const handleAddIconClick = () => {
    const cartQty = itemInCart.qty;
    updateCartItemQty(product.id, cartQty + 1);
  };

  const handleDeleteIconClick = () => {
    let cartQty = itemInCart.qty;
    cartQty = cartQty - 1;
    if (cartQty) {
      updateCartItemQty(product.id, cartQty);
    } else {
      removeFromCart(product.id);
      setIsItemInCart(false);
    }
  };

  return (
    <ButtonGroup
      sx={{
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        width: "100%",
        border: "1px solid gray",
        borderRadius: "30px",
        ...sx,
      }}
    >
      <IconButton onClick={handleDeleteIconClick}>
        <DeleteOutlineIcon fontSize="large" />
      </IconButton>
      <Typography variant="h5" sx={{ color: "black" }}>
        {itemInCart?.qty}
      </Typography>
      <IconButton onClick={handleAddIconClick} fontSize="large">
        <AddIcon />
      </IconButton>
    </ButtonGroup>
  );
};

export default CartItemQuantityBtnGroup;

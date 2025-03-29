import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import CartCard from "../components/CartCard";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  const listItems = cartItems.map((product) => (
    <CartCard
      key={product.product.id}
      product={product.product}
      qty={product.qty}
    />
  ));

  return (
    <div>
      <Typography variant="h2" component="h2">
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Box>
          <p>Your cart is empty.</p>
        </Box>
      ) : (
        <Box>
          <Stack spacing={4}>{listItems}</Stack>
          <Button onClick={clearCart}>Clear Cart</Button>
        </Box>
      )}
    </div>
  );
};

export default Cart;

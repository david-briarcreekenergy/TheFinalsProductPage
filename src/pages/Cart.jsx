import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import CartCard from "../components/CartCard";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import SubtotalPanel from "../components/SubtotalPanel";

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
      <Box sx={{ marginBottom: "20px" }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Typography variant="h2" component="h2">
              Your Cart
            </Typography>
          </Grid>
          <Grid
            size={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            {cartItems.length > 0 && (
              <Button onClick={clearCart}>Clear Cart</Button>
            )}
          </Grid>
          <Grid
            size={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <SubtotalPanel />
          </Grid>
        </Grid>
      </Box>
      {cartItems.length ? (
        <Stack spacing={4} sx={{ width: "85%" }}>
          {listItems}
        </Stack>
      ) : (
        <Box>
          <Typography variant="h3">Your cart is empty.</Typography>
        </Box>
      )}
    </div>
  );
};

export default Cart;

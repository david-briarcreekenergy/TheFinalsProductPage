import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CartCard from "../components/CartCard";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import SubtotalPanel from "../components/SubtotalPanel";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import emptyGroceryCart from "../assets/empty-shopping-cart.png";

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  const listItems = cartItems.map(product => (
    <CartCard
      key={product.product.id}
      product={product.product}
      qty={product.qty}
    />
  ));

  return (
    <div>
      <Box
        sx={{ marginTop: { xs: 15, sm: 15, md: 10, lg: 10 }, marginBottom: 3 }}
      >
        <Grid container spacing={2}>
          <Grid size={6}>
            <Typography variant="h2" component="h2" fontSize={{ xs: "2.4em" }}>
              Your Cart
            </Typography>
            {cartItems.length > 0 && (
              <Button onClick={clearCart}>Clear Cart</Button>
            )}
          </Grid>
          <Grid
            size={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
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
        <Box sx={{ textAlign: "center" }}>
          <CardMedia
            component="img"
            image={emptyGroceryCart}
            height="200px"
            sx={{ objectFit: "scale-down" }}
          ></CardMedia>
          <Typography variant="h3">Your cart is empty.</Typography>
          <Link
            sx={{ textDecoration: "none" }}
            href="https://www.flaticon.com/free-icons/supermarket"
            title="supermarket icons"
          >
            Supermarket icons created by srip - Flaticon
          </Link>
        </Box>
      )}
    </div>
  );
};

export default Cart;

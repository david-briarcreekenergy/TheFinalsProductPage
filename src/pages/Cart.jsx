import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import CartCard from "../components/CartCard";

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  console.log(cartItems[0]);
  const productList = cartItems.map((product) => (
    <CartCard key={product.product.id} product={product} />
  ));

  return (
    <div>
      <Typography variant="h2" component="h2">
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>{productList}</ul>
      )}
      {<Button onClick={clearCart}>Clear Cart</Button>}
      {/* cartItems.length > 0 &&  */}
    </div>
  );
};

export default Cart;

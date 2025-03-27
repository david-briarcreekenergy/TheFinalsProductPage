import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import CartCard from "../components/CartCard";

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  return (
    <div>
      <Typography variant="h2" component="h2">
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((product) => (
            <CartCard key={product.product.id} product={product} />
          ))}
        </ul>
      )}
      {cartItems.length > 0 && <Button onClick={clearCart}>Clear Cart</Button>}
    </div>
  );
};

export default Cart;

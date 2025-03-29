import { useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { CartContext } from "../contexts/CartContext";

const SubtotalPanel = () => {
  const { cartSubTotal, totalCartItemCount } = useContext(CartContext);
  const cartCount = totalCartItemCount();
  const items = cartCount === 1 ? "item" : "items";
  const subtotal = `Subtotal (${cartCount} ${items}) `;
  return (
    <Paper sx={{ padding: "10px" }}>
      <Grid container spacing={4}>
        <Grid size={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }} color="black">
            {subtotal}
          </Typography>
        </Grid>
        <Grid size={6}>
          <Typography variant="h6" sx={{ textAlign: "right" }} color="black">
            {cartSubTotal()}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SubtotalPanel;

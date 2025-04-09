import { useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { CartContext } from "../contexts/CartContext";
import StyledNavLink from "./StyledNavLink";
import { NavigationType } from "react-router-dom";

const SubtotalPanel = () => {
  const { cartSubTotal, totalCartItemCount } = useContext(CartContext);
  const cartCount = totalCartItemCount();
  const items = cartCount === 1 ? "item" : "items";
  const subtotal = `Subtotal (${cartCount} ${items}) `;

  return (
    <Box sx={{ width: { xs: "100%", sm: "100%", md: "45%" } }}>
      <Paper sx={{ padding: "15px" }}>
        <Grid container spacing={2} sx={{ flexWrap: "wrap" }}>
          <Grid size={8}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }} color="black">
              {subtotal}
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="h6" sx={{ textAlign: "right" }} color="black">
              {cartSubTotal()}
            </Typography>
          </Grid>
          <Grid
            size={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StyledNavLink
              to="/checkout"
              onWhiteBkgrd={true}
              sx={{
                width: "100%",
                borderRadius: 10,
                paddingLeft: 5,
                paddingRight: 5,
                textAlign: "center",
                backgroundColor: "#0D2A3C",
                color: "white",
                "&:hover": { backgroundColor: "#6387A3", color: "#0D2A3C" },
              }}
            >
              Checkout
            </StyledNavLink>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SubtotalPanel;

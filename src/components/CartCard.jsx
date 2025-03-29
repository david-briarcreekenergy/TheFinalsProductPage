import { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CartContext } from "../contexts/CartContext";
import CartItemQuantityBtnGroup from "./CartItemQuantityBtnGroup";

export const CartCard = ({ product }) => {
  const [setIsItemInCart] = useState(true);
  const { cartItemCount } = useContext(CartContext);

  return (
    <Card sx={{ padding: "10px" }}>
      <Grid container spacing={2}>
        <Grid size={3}>
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt={`A picture of a/an ${product.title}`}
            sx={{ objectFit: "scale-down" }}
          />
        </Grid>
        <Grid size={6}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5">{product.title} </Typography>
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product.description}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid size={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: 6,
            }}
          >
            <Typography variant="h5" sx={{ marginRight: "10px" }}>
              {`$${(product.price * cartItemCount(product.id)).toFixed(2)}`}
            </Typography>
            <CardActions sx={{ justifyContent: "center" }}>
              <CartItemQuantityBtnGroup
                product={product}
                setIsItemInCart={setIsItemInCart}
                sx={{ marginRight: 0 }}
              />
            </CardActions>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartCard;

//

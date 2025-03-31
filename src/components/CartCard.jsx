import { useContext } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CartContext } from "../contexts/CartContext";
import CartItemQuantityBtnGroup from "./CartItemQuantityBtnGroup";

export const CartCard = ({ product }) => {
  const { cartItemCount, removeFromCart } = useContext(CartContext);

  const StyledButton = styled(Button)(({ theme }) => ({
    margin: 0,
    "&:hover": {
      color: theme.palette.text.primary
    }
  }));

  const handleRemoveFromCartBtnClick = () => {
    removeFromCart(product.id);
  };

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
            <Box sx={{ display: "flex" }}>
              {product.rating.rate}
              <Rating
                name="rating"
                precision={0.5}
                defaultValue={product.rating.rate}
                size="large"
                readOnly
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: 6
            }}
          >
            <Typography variant="h5" sx={{ marginRight: "10px" }}>
              {`$${(product.price * cartItemCount(product.id)).toFixed(2)}`}
            </Typography>
            <CardActions
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <CartItemQuantityBtnGroup product={product} />
              <StyledButton
                variant="text"
                onClick={handleRemoveFromCartBtnClick}
              >
                Remove
              </StyledButton>
            </CardActions>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartCard;

//

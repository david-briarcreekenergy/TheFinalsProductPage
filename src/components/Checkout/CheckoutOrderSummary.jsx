import Box from "@mui/material/Box";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { List, ListItem, Typography, CardMedia, Badge } from "@mui/material";
import { useEffect } from "react";

const CheckoutOrderSummary = () => {
  const { cartItems, cartSubTotal } = useContext(CartContext);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const listItems = cartItems.map(product => (
    <ListItem key={product.product.id}>
      <Box display={"flex"} columnGap={2}>
        <Box>
          <Badge badgeContent={product.qty} color="secondary">
            <CardMedia
              image={product.product.image}
              height={100}
              sx={{ objectFit: "cover" }}
              component="img"
            />
          </Badge>
        </Box>
        <Box>
          <Typography variant="h6" color="initial">
            {product.product.title}
          </Typography>
          <Typography variant="h6" color="initial">
            ${(product.product.price * product.qty).toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </ListItem>
  ));

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "45%" },
        paddingLeft: 2,
        paddingRight: 2,
      }}
    >
      <Typography variant="h4" color="initial">
        Order Summary
      </Typography>
      <List>{listItems}</List>
      <Box display={"flex"} justifyContent={"space-between "}>
        <Typography variant="body1" color="initial">
          Subtotal
        </Typography>
        <Typography variant="h6"> {cartSubTotal()} </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h6" color="initial">
          Shipping
        </Typography>
        <Typography variant="h6" color="initial">
          Always Free
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h6" color="initial" fontWeight={"bold"}>
          TOTAL
        </Typography>
        <Typography variant="h6" color="initial">
          {cartSubTotal()}
        </Typography>
      </Box>
    </Box>
  );
};

export default CheckoutOrderSummary;

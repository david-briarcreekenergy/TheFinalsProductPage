// TODO fix the positioning of the POPOVER
// TODO favorite operability
// TODO share operability

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { styled } from "@mui/material/styles";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleCartIconClick = (event) => {
    if (cartItems && cartItems.some((item) => item.product.id === product.id)) {
      const clickedEl = event.currentTarget;
      setAnchorEl(clickedEl);
      console.log("AnchorEl: ", anchorEl);
    } else {
      addToCart({ product: product, qty: 1 });
    }
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const StyledCard = styled(Card)(({ theme }) => ({
    minWidth: 320,
    maxWidth: 345,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "50vh",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    [theme.breakpoints.up("xs")]: {
      height: "50%", // Full width for extra-small screens
    },
    [theme.breakpoints.up("sm")]: {
      height: "75%", // 75% width for small screens
    },
    [theme.breakpoints.up("md")]: {
      height: "50%", // 50% width for medium screens
    },
    [theme.breakpoints.up("lg")]: {
      height: "25%", // 25% width for large screens
    },
  }));

  return (
    <StyledCard id={product.id}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={`A picture of a/an ${product.title}`}
        sx={{ objectFit: "scale-down" }}
      />
      <CardHeader
        title={
          product.title.length > 70
            ? product.title.slice(0, 70) + "..."
            : product.title
        }
        sx={{
          height: 100,
          display: "flex",
          alignItems: "flex-start", // Align text at the top
          padding: 2,
          overflow: "hidden", // Optional: Adjust padding for better spacing
        }}
      />
      <CardContent sx={{ margin: 0 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          {/*    <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton> */}
          <IconButton
            onClick={handleCartIconClick}
            id={`add-to-cart-${product.id}`}
            color="success"
          >
            <AddShoppingCartIcon fontSize="large" />
          </IconButton>
        </Box>
      </CardActions>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          This item has already been added to your Cart.
        </Typography>
      </Popover>
    </StyledCard>
  );
};

export default ProductCard;

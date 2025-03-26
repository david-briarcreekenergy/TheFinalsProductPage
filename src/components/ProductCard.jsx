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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  // const id = open ? "simple-popover" : undefined;

  const handleCartIconClick = (event) => {
    if (cartItems.some((item) => item.product.id === product.id)) {
      setAnchorEl(event.target.id);
      setOpen(true);
    } else {
      addToCart({ product: product, qty: 1 });
    }
  };
  return (
    <Card sx={{ maxWidth: 345 }} id={product.id}>
      <CardHeader title={product.title} />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt={`A picture of a/an ${product.title}`}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description}
        </Typography>
        <Typography variant="h3">{product.price}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton>
          <AddShoppingCartIcon onClick={handleCartIconClick} />
        </IconButton>
      </CardActions>
      <Popover
        id={product.id}
        open={open}
        anchorEl={product.id}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          This item has already been added to your Cart.
        </Typography>
      </Popover>
    </Card>
  );
};

export default ProductCard;

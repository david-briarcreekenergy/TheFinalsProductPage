import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const CartCard = ({ product }) => {
  const { removeFromCart, updateCartItemQty } = useContext(CartContext);
  const addToQty = () => {
    product.qty++;
    updateCartItemQty(product.product.id, product.qty);
  };

  const subtractFromQty = () => {
    product.qty--;
    // if qty = 0 remove from the item from the cart, other wise decrement product.qty
    product.qty
      ? updateCartItemQty(product.product.id, product.qty)
      : removeFromCart(product.product.id);
  };

  return (
    <Card>
      <CardHeader title={product.product.title} />
      <CardMedia
        component="img"
        height="194"
        image={product.product.image}
        alt={`A picture of a/an ${product.product.title}`}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.product.description}
        </Typography>
        <Typography variant="h3">{product.product.price}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <ButtonGroup>
          <IconButton>
            <DeleteOutlineIcon onClick={subtractFromQty} />
          </IconButton>
          <div>
            <Typography variant="h4">{product.qty}</Typography>
          </div>
          <IconButton onClick={addToQty}>
            <AddIcon />
          </IconButton>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default CartCard;

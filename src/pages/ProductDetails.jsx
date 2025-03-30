import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { getProduct } from "../utils/api";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import CartItemQuantityBtnGroup from "../components/CartItemQuantityBtnGroup";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart, checkForItemInCart } = useContext(CartContext);
  const [isItemInCart, setIsItemInCart] = useState(() => {
    return checkForItemInCart(product.id);
  });
  let { productId } = useParams();

  useEffect(() => {
    getProduct(productId)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (error) return <Typography>Error: {error}</Typography>;
  if (loading) return <Typography>Loading...</Typography>;
  if (product && product.rating)
    return (
      <Container sx={{ display: "flex", gap: 4, marginTop: 4 }}>
        <Box>
          <CardMedia
            component="img"
            width="40%"
            height="40%"
            image={product.image}
            alt={`A picture of a/an ${product.title}`}
            sx={{ objectFit: "scale-down", border: "1px solid black" }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography>{product.title}</Typography>
          <Typography>{product.description}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 1
            }}
          >
            <Typography variant="h5" component="p">
              {product.rating.rate}
            </Typography>
            <Rating
              name="rating"
              precision={0.5}
              defaultValue={product.rating.rate}
              size="large"
              readOnly
            />
          </Box>
          <Typography>${product.price}</Typography>
          <CartItemQuantityBtnGroup
            product={product}
            setIsItemInCart={setIsItemInCart}
          />
        </Box>
      </Container>
    );
};

export default ProductDetails;

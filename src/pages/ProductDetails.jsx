import { useEffect, useState, useContext } from "react";
import { useTheme } from "@emotion/react";
import { useParams } from "react-router";
import { getProduct } from "../utils/api";
import { ProductsContext } from "../contexts/ProductsContext";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import CartItemQuantityBtnGroup from "../components/CartItemQuantityBtnGroup";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { setCategory, setFilteredCategoryProducts, filteredByCategory } =
    useContext(ProductsContext);
  const theme = useTheme();

  useEffect(() => {
    getProduct(id)
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleCategoryClick = e => {
    const category = e.target.textContent;
    setCategory(category);
    setFilteredCategoryProducts(filteredByCategory(category));
  };

  if (error) return <Typography>Error: {error}</Typography>;
  if (loading) return <Typography>Loading...</Typography>;

  if (product && product.rating)
    return (
      <Box
        sx={{
          height: "auto",
          overflow: "hidden",
          position: "relative",
          marginTop: { xs: 15, md: 10 },
        }}
      >
        <NavLink
          to="/products"
          onClick={handleCategoryClick}
          style={() => {
            return {
              textDecoration: "none",
              color: theme.palette.primary.main,
            };
          }}
        >
          <Typography
            component="div"
            sx={{
              textTransform: "capitalize",
              "&:hover": { color: theme.palette.secondary.main },
            }}
          >
            {product.category}
          </Typography>
        </NavLink>
        <Grid
          container
          spacing={4}
          sx={{
            marginTop: { xs: 1, sm: 3 },
            overflow: "hidden",
          }}
        >
          <Grid size={4}>
            <CardMedia
              component="img"
              image={product.image}
              alt={`A picture of a/an ${product.title}`}
              sx={{
                width: "100%",
                height: { xs: 150, sm: 250, md: 400 },
                objectFit: "scale-down",
              }}
            />
          </Grid>
          <Grid
            size={8}
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "2rem",
                  md: "2.5rem",
                },
                fontWeight: "bold",
              }}
            >
              {product.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.5rem",
                },
              }}
            >
              {product.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                // gap: 1,
              }}
            >
              <Typography
                variant="h5"
                component="p"
                sx={{ fontWeight: "bold" }}
              >
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
            <Typography
              variant="h5"
              component="p"
              sx={{ fontWeight: "bold", alignSelf: "flex-end" }}
            >
              ${product.price.toFixed(2)}
            </Typography>

            <CartItemQuantityBtnGroup product={product} />
          </Grid>
        </Grid>
      </Box>
    );
};

export default ProductDetails;

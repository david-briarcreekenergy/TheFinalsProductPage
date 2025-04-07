// TODO fix the positioning of the POPOVER
import { useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Link } from "react-router";
import StyledNavLink from "./StyledNavLink";
import { NavigationContext } from "../contexts/NavigationContext";
import CartItemQuantityBtnGroup from "./CartItemQuantityBtnGroup";

const ProductCard = ({ product }) => {
  const theme = useTheme();

  const { handleNavLinkClick } = useContext(NavigationContext);

  const StyledCard = styled(Card)(({ theme }) => ({
    width: "100%",
    maxWidth: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    padding: "10px",
  }));

  return (
    <StyledCard>
      <Link to={`/product/${product.id}`}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={`A picture of a/an ${product.title}`}
          sx={{ objectFit: "scale-down" }}
          onClick={handleNavLinkClick}
        />
      </Link>
      <StyledNavLink
        to={`/product/${product.id}`}
        key={product.id}
        onClick={handleNavLinkClick}
        onWhiteBkgrd={true}
        sx={{
          width: { xs: "auto" },
          padding: 0,
          margin: 0,
        }}
      >
        <CardHeader
          title={product.title}
          sx={{
            height: 150,
            display: "flex",
            alignItems: "flex-start",
            padding: 2,
            width: "auto",
            overflow: "hidden",
          }}
        />
      </StyledNavLink>
      <Box>
        <Rating
          name="rating"
          precision={0.5}
          defaultValue={product.rating.rate}
          size="large"
          readOnly
        />
      </Box>
      <CardActions disableSpacing>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
            ${product.price.toFixed(2)}
          </Typography>
          <CartItemQuantityBtnGroup product={product} />
        </Box>
      </CardActions>
    </StyledCard>
  );
};

export default ProductCard;

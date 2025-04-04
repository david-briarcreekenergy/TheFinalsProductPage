import { NavLink } from "react-router-dom";
import Item from "./Item";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";

const WomensCategory = ({ product, handleCategoryClick }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <NavLink
      to="/products"
      onClick={() => {
        handleCategoryClick(product.category);
      }}
    >
      <Item
        key={2}
        sx={{ height: isSmallScreen ? 300 : 150, position: "relative" }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Typography variant="h6" color="purple" fontWeight="bold">
            Women's Clothing
          </Typography>
        </Box>
        <CardMedia
          image={product.image}
          component="img"
          alt="Womens clothing"
          sx={{
            objectFit: "scale-down",
            height: isSmallScreen ? 300 : 150,
            overflow: "hidden",
          }}
        />
      </Item>
    </NavLink>
  );
};

export default WomensCategory;

import { NavLink } from "react-router-dom";
import Item from "./Item";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
// import useMediaQuery from "@mui/material/useMediaQuery";

const WomensCategory = ({ product, handleCategoryClick }) => {
  // const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <NavLink
      to="/products"
      onClick={() => {
        handleCategoryClick(product.category);
      }}
    >
      <Item key={2} sx={{ height: { sm: 300, md: 250 }, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            top: -25,
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
            overflow: "hidden",
            height: 200,
          }}
        />
      </Item>
    </NavLink>
  );
};

export default WomensCategory;

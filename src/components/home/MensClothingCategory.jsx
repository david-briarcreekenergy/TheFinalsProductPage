import { NavLink } from "react-router-dom";
import Item from "./Item";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

const MensClothingCategory = ({ product, handleCategoryClick }) => {
  return (
    <NavLink to={"/products"}>
      <Item
        key={0}
        sx={{ height: { xs: 250, sm: 300 }, position: "relative" }}
        onClick={() => {
          handleCategoryClick(product.category);
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: -80, sm: 25, md: -50 },
            left: { xs: -50, sm: -5, md: -25 },
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            transform: "rotate(45deg)",
            textShadow: "2px 2px 2px darkblue",
          }}
        >
          <Typography variant="h4" color="yellow" fontWeight="bold">
            Men's Clothing
          </Typography>
        </Box>
        <CardMedia
          image={product.image}
          component="img"
          alt="Men's clothing"
          sx={{
            objectFit: "scale-down",
            height: { xs: 200, sm: 300 },
            overflow: "hidden",
          }}
        />
      </Item>
    </NavLink>
  );
};

export default MensClothingCategory;

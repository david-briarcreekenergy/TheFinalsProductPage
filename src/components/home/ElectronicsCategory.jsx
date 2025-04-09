import { NavLink } from "react-router-dom";
import Item from "./Item";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

const ElectronicsCategory = ({ product, handleCategoryClick }) => {
  return (
    <NavLink
      to="/products"
      onClick={() => {
        handleCategoryClick(product.category);
      }}
    >
      <Item
        key={5}
        sx={{ height: { xs: 300, sm: 180, md: 190 }, position: "relative" }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transform: "rotate(-30deg)",
          }}
        >
          <Typography
            variant="h4"
            color="blue"
            fontWeight="bold"
            sx={{
              textShadow: "2px 2px 2px aqua",
            }}
          >
            Electronics
          </Typography>
          <Typography variant="h6" color="aqua">
            From 19.99
          </Typography>
        </Box>
        <CardMedia
          image={product.image}
          component="img"
          alt="Huge Gaming monitor"
          sx={{
            objectFit: "scale-down",
            height: 280,
            overflow: "hidden",
          }}
        />
      </Item>
    </NavLink>
  );
};

export default ElectronicsCategory;

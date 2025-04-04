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
      <Item key={5} sx={{ height: 300, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: -70,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Typography variant="h4" color="blue" fontWeight="bold">
            Electronics
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
            marginTop: 4,
          }}
        />
      </Item>
    </NavLink>
  );
};

export default ElectronicsCategory;

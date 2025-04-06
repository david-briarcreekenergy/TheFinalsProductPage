import { NavLink } from "react-router-dom";
import Item from "./Item";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

const WomensCategory = ({ product, handleCategoryClick }) => {
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
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            color="purple"
            fontWeight="bold"
            sx={{
              position: "absolute",
              transform: "rotate(45deg)",
              left: "10px",
              textShadow: "2px 2px 2px yellow",
            }}
          >
            Women's
          </Typography>
          <Typography
            variant="h4"
            color="purple"
            fontWeight="bold"
            sx={{
              position: "absolute",
              transform: "rotate(-45deg)",
              left: { xs: "150px", sm: "200px" },
              textShadow: "2px 2px 2px yellow",
            }}
          >
            Clothing
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

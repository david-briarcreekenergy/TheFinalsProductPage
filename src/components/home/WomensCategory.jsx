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
      <Item
        key={2}
        sx={{ height: { xs: 250, sm: 270, md: 260 }, position: "relative" }}
      >
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
              left: { xs: 50, sm: 10 },
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
              transform: {
                xs: "rotate(-45deg)",
                sm: "rotate(45deg)",
                md: "rotate(-45deg)",
              },
              left: { xs: 290, sm: 10, md: 100 },
              top: { xs: 100, sm: 150 },
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

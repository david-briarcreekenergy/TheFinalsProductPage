import { NavLink } from "react-router-dom";
import Item from "./Item";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";

const TheRing = ({ product }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <NavLink to={`product/${product.id}`}>
      <Item
        key={3}
        sx={{ height: isSmallScreen ? 300 : 150, position: "relative" }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant={isSmallScreen ? "h2" : "h4"}
            color="purple"
            fontWeight="bold"
            sx={{ textShadow: "2px 2px 2px black" }}
          >
            {/* ${product.price.toFixed(2)} */}
            SAVE $$$
          </Typography>
        </Box>
        <CardMedia
          image={product.image}
          component="img"
          alt="Attractive Jewelry"
          sx={{
            objectFit: "scale-down",
            height: isSmallScreen ? 280 : 150,
            overflow: "hidden",
          }}
        />
      </Item>
    </NavLink>
  );
};

export default TheRing;

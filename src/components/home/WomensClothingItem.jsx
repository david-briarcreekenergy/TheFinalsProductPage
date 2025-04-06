import { NavLink } from "react-router-dom";
import Item from "./Item";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";

const WomensClothingItem = ({ product }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <NavLink to={`product/${product.id}`}>
      <Item
        key={4}
        sx={{ height: isSmallScreen ? 300 : 250, position: "relative" }}
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
          <Typography variant="h4" color="orange" fontWeight="bold">
            ${product.price.toFixed(2)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
          }}
        >
          <CardMedia
            image={product.image}
            component="img"
            alt="Women's jacket"
            sx={{
              objectFit: "scale-down",
              height: isSmallScreen ? 300 : 240,
              overflow: "hidden",
            }}
          />
        </Box>
      </Item>
    </NavLink>
  );
};

export default WomensClothingItem;

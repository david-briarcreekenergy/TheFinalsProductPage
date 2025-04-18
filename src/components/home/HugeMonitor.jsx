import { NavLink } from "react-router-dom";
import Item from "./Item";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

const HugeMonitor = ({ product }) => {
  return (
    <NavLink to={`product/${product.id}`}>
      <Item
        key={1}
        sx={{
          height: { xs: 250, sm: 200 },
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            top: -15,
            left: -15,
          }}
        >
          <Typography
            variant="h3"
            color="#731a06"
            fontWeight="bold"
            fontSize={{ xs: "4em", sm: "2.25em", md: "3em" }}
          >
            ${product.price}
          </Typography>
        </Box>

        <CardMedia
          image={product.image}
          component="img"
          alt="Huge Gaming monitor"
          sx={{
            objectFit: "scale-down",
            height: 200,
            overflow: "hidden",
          }}
        />
      </Item>
    </NavLink>
  );
};

export default HugeMonitor;

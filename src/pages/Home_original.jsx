import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { NavLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
  display: "flex",
  flexDirection: "column",
}));

const Home = () => {
  const {
    productList,
    loading,
    error,
    setCategory,
    setFilteredCategoryProducts,
    filteredByCategory,
  } = useContext(ProductsContext);

  const handleCategoryClick = (category) => {
    setCategory(category);
    setFilteredCategoryProducts(filteredByCategory(category));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: 10,
        width: "auto",
      }}
    >
      <Container>
        <Masonry columns={3} spacing={2} sequential>
          {/* Mens Clothing category */}

          {/* Huge monitor */}

          {/* Womens category  */}

          {/* the ring */}

          {/* Womens clothing item */}

          {/* Electronics category */}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Home;

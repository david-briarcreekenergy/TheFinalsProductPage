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
      }}
    >
      <Container>
        <Masonry columns={3} spacing={2} sequential>
          {/* Mens Clothing category */}
          <NavLink to={"/products"}>
            <Item
              key={0}
              sx={{ height: 300, position: "relative" }}
              onClick={() => {
                handleCategoryClick(productList[2].category);
              }}
            >
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
                <Typography variant="h4" color="yellow" fontWeight="bold">
                  Men's Clothing
                </Typography>
              </Box>
              <CardMedia
                image={productList[2].image}
                component="img"
                alt="Men's clothing"
                sx={{
                  objectFit: "scale-down",
                  height: 280,
                  overflow: "hidden",
                }}
              />
            </Item>
          </NavLink>

          {/* Huge monitor */}
          <NavLink to={`product/${productList[13].id}`}>
            <Item key={1} sx={{ height: 225, position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: -20,
                  left: -15,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Typography variant="h4" color="black" fontWeight="bold">
                  ${productList[13].price}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <CardMedia
                  image={productList[13].image}
                  component="img"
                  alt="Huge Gaming monitor"
                  sx={{
                    objectFit: "scale-down",
                    height: 175,
                    overflow: "hidden",
                  }}
                />
              </Box>
            </Item>
          </NavLink>

          {/* Womens category  */}
          <NavLink
            to="/products"
            onClick={() => {
              handleCategoryClick(productList[2].category);
            }}
          >
            <Item key={2} sx={{ height: 150, position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                <Typography variant="h6" color="purple" fontWeight="bold">
                  Women's Clothing
                </Typography>
              </Box>
              <CardMedia
                image={productList[19].image}
                component="img"
                alt="Womens clothing"
                sx={{
                  objectFit: "scale-down",
                  height: 150,
                  overflow: "hidden",
                }}
              />
            </Item>
          </NavLink>

          {/* the ring */}
          <NavLink to={`product/${productList[5].id}`}>
            <Item key={3} sx={{ height: 150, position: "relative" }}>
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
                <Typography variant="h4" color="purple" fontWeight="bold">
                  ${productList[5].price.toFixed(2)}
                </Typography>
              </Box>
              <CardMedia
                image={productList[5].image}
                component="img"
                alt="Attractive Jewelry"
                sx={{
                  objectFit: "scale-down",
                  height: 150,
                  overflow: "hidden",
                }}
              />
            </Item>
          </NavLink>

          {/* Womens clothing item */}
          <NavLink to={`product/${productList[15].id}`}>
            <Item key={4} sx={{ height: 225, position: "relative" }}>
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
                  ${productList[15].price.toFixed(2)}
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
                  image={productList[15].image}
                  component="img"
                  alt="Women's jacket"
                  sx={{
                    objectFit: "scale-down",
                    height: 225,
                    overflow: "hidden",
                  }}
                />
              </Box>
            </Item>
          </NavLink>

          {/* Electronics category */}
          <NavLink
            to="/products"
            onClick={() => {
              handleCategoryClick(productList[11].category);
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
                image={productList[11].image}
                component="img"
                alt="Huge Gaming monitor"
                sx={{
                  objectFit: "scale-down",
                  height: 225,
                  overflow: "hidden",
                  marginTop: 4,
                }}
              />
            </Item>
          </NavLink>
        </Masonry>
      </Container>
    </Box>
  );
};

export default Home;

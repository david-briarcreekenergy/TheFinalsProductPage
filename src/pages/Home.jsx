/* The components used here, e.g. HugeMonitor, WomensCategory, MensClothingItem, are hard coded 
because I just needed to have content on the home page.  Real world these would be dynamic via a DB call */

import { useContext } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ProductsContext } from "../contexts/ProductsContext";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";
import MensClothingCategory from "../components/home/MensClothingCategory";
import HugeMonitor from "../components/home/HugeMonitor";
import WomensCategory from "../components/home/WomensCategory";
import TheRing from "../components/home/TheRing";
import WomensClothingItem from "../components/home/WomensClothingItem";
import ElectronicsCategory from "../components/home/ElectronicsCategory";

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

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleCategoryClick = category => {
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
        overflow: "hidden",
      }}
    >
      <Container>
        {isSmallScreen ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
            }}
          >
            <HugeMonitor product={productList[13]} />
            <WomensCategory
              product={productList[19]}
              handleCategoryClick={handleCategoryClick}
            />
            <TheRing product={productList[5]} />
            <MensClothingCategory
              product={productList[2]}
              handleCategoryClick={handleCategoryClick}
            />
            <ElectronicsCategory
              product={productList[11]}
              handleCategoryClick={handleCategoryClick}
            />
            <WomensClothingItem product={productList[15]} />
          </Box>
        ) : (
          // Render Masonry for larger screens
          <Masonry columns={3} spacing={2} sequential>
            <MensClothingCategory
              product={productList[2]}
              handleCategoryClick={handleCategoryClick}
            />
            <HugeMonitor product={productList[13]} />
            <WomensCategory
              product={productList[19]}
              handleCategoryClick={handleCategoryClick}
            />
            <TheRing product={productList[5]} />
            <WomensClothingItem product={productList[15]} />
            <ElectronicsCategory
              product={productList[11]}
              handleCategoryClick={handleCategoryClick}
            />
          </Masonry>
        )}
      </Container>
    </Box>
  );
};

export default Home;

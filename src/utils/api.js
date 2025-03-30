import axios from "axios";

// see vite.config to see the proxy server set up
const BASE_URL = "api/products";

export const getProductList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    error.message =
      "An error occurred retrieving the Product List. Please try again later.";
    throw error;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log("ERROR In getProduct:", error);
    error.message =
      "There was error retrieving this product. Please try again later.";
    throw error;
  }
};

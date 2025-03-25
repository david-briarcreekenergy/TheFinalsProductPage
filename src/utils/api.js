import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const getProductList = async () => {
  return await axios
    .get(`${BASE_URL}`)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("getProductList axios is done");
    });
};

export const getProduct = async (id) => {
  axios
    .get(`${BASE_URL}/${id}`)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("getProduct axios is done");
    });
};

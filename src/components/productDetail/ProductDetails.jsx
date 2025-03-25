import { useParams } from "react-router";

const ProductDetails = () => {
  let { productId } = useParams();
  return (
    <>
      <h1>Product Details</h1>
      <h2>{productId}</h2>
    </>
  );
};

export default ProductDetails;

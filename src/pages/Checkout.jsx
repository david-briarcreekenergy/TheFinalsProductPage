import Box from "@mui/material/Box";
import CheckoutOrderSummary from "../components/Checkout/CheckoutOrderSummary";
import CheckoutForm from "../components/Checkout/CheckoutForm";
const Checkout = () => {
  return (
    <Box
      sx={{
        marginTop: 0,
        marginBottom: 3,
        paddingTop: 0,
        paddingBottom: 3,
        display: "flex",
        flexWrap: "wrap",
        columnGap: 4,
        rowGap: 4,
        overflow: "hidden",
      }}
    >
      <CheckoutForm />
      <CheckoutOrderSummary />
    </Box>
  );
};

export default Checkout;

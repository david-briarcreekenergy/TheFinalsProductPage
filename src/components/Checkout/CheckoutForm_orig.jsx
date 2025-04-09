import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import CheckoutCountrySelect from "../CountrySelect";
import StateSelect from "../StateSelect";
import CreditCards from "../../assets/four-credit-card-logos.png";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
}));

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    notify: true,
    country: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    creditCardNumber: "",
    expirationDate: "",
    securityCode: "",
    nameOnCard: "",
  });

  const handleCheckboxChange = event => {
    const { name, checked } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: checked }));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form data being submitted", formData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        width: { xs: "100%", md: "45%" },
      }}
    >
      <form noValidate onSubmit={handleSubmit}>
        <Box>
          <StyledTypography>Contact</StyledTypography>
          <Box sx={{ display: "flex", flexDirection: "column", rowGap: 0 }}>
            <TextField
              id="email"
              label="Email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
            />
            <FormControlLabel
              label="Email me with news and offers."
              slotProps={{
                typography: { fontSize: "0.85em", fontWeight: "bold" },
              }}
              control={
                <Checkbox
                  name="notify"
                  checked={formData.notify}
                  onChange={handleCheckboxChange}
                />
              }
            />
          </Box>
        </Box>
        <Box>
          <StyledTypography>Delivery</StyledTypography>
          <Box sx={{ display: "flex", flexDirection: "column", rowGap: 0 }}>
            <CheckoutCountrySelect
              country={formData.country}
              handleChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <TextField
                name="firstName"
                label="First Name"
                variant="outlined"
                value={formData.firstName}
                required
                onChange={handleChange}
              />
              <Box display="flex">
                <TextField
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  value={formData.lastName}
                  required
                  onChange={handleChange}
                />
              </Box>
            </Box>
            <TextField
              name="company"
              label="Company (optional)"
              variant="outlined"
              value={formData.company}
              required
              onChange={handleChange}
            />
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              value={formData.address}
              required
              onChange={handleChange}
            />
            <TextField
              name="city"
              label="City"
              variant="outlined"
              value={formData.city}
              required
              onChange={handleChange}
            />
            <StateSelect state={formData.state} handleChange={handleChange} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <StyledTypography>Payment</StyledTypography>
          <Typography variant="body2">
            All transactions are secure and encrypted.
          </Typography>

          <Card
            sx={{
              flexWrap: "wrap",
              padding: 2,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <CardHeader title="Credit Card" />
              <Box>
                <CardMedia
                  image={CreditCards}
                  component="img"
                  height={75}
                  sx={{ objectFit: "contain" }}
                />
              </Box>
            </Box>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            >
              <TextField
                name="creditCardNumber"
                label="Card Number"
                variant="outlined"
                value={formData.creditCardNumber}
                required
                onChange={handleChange}
              />
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: 10,
                }}
              >
                <TextField
                  name="expirationDate"
                  label="Expiration Date (mm/yy)"
                  variant="outlined"
                  value={formData.expirationDate}
                  required
                  onChange={handleChange}
                />
                <TextField
                  name="securityCode"
                  label="Security Code"
                  variant="outlined"
                  value={formData.securityCode}
                  required
                  onChange={handleChange}
                />
              </Box>
              <TextField
                name="nameOnCard"
                label="Name on Card"
                variant="outlined"
                value={formData.nameOnCard}
                required
                onChange={handleChange}
              />
            </CardContent>
            <CardActions>
              <Button type="submit" variant="contained" sx={{ width: "100%" }}>
                Submit
              </Button>
            </CardActions>
          </Card>
        </Box>
      </form>
    </Box>
  );
};

export default CheckoutForm;

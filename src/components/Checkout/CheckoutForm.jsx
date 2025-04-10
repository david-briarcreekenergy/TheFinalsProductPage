import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useForm, FormProvider } from "react-hook-form";
import CountrySelect from "../CountrySelect";
import StateSelect from "../StateSelect";
import CreditCards from "../../assets/four-credit-card-logos.png";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: "bold",
}));

const CheckoutForm = () => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = methods;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset, formState]);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmit = data => {
    try {
      // here would be an axios call to submit the data
      setOpen(true);
      console.log(data);
    } catch (error) {
      console.error(`Error occurred submitting form data: `, error);
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "45%" },
        paddingLeft: 2,
        paddingRight: 2,
      }}
    >
      <FormProvider {...methods}>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* email field and notify checkbox */}
            <StyledTypography>Contact</StyledTypography>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: 5,
                padding: 3,
                marginBottom: 3,
              }}
            >
              <TextField
                id="email"
                label="Email"
                error={!!errors.email}
                helperText={errors?.email?.message}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email required",
                  },
                })}
              />
              <FormControlLabel
                label="Email me with news and offers."
                slotProps={{
                  typography: { fontSize: "0.85em", fontWeight: "bold" },
                }}
                control={<Checkbox {...register("notify")} />}
              />
              <TextField
                id="phone"
                label="Phone"
                error={!!errors.phone}
                helperText={errors?.phone?.message}
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone number required",
                  },
                })}
              />
            </Card>

            {/* delivery fields */}
            <StyledTypography>Delivery</StyledTypography>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: 3,
                rowGap: 3,
                borderRadius: 5,
                marginBottom: 3,
              }}
            >
              <CountrySelect />

              {/* name fields */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "48%" }}>
                  <TextField
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                    sx={{ width: "100%" }}
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "First name required",
                      },
                    })}
                  />
                </Box>
                <Box sx={{ width: "48%" }}>
                  <TextField
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Last name required",
                      },
                    })}
                  />
                </Box>
              </Box>
              <TextField
                name="company"
                label="Company (optional)"
                variant="outlined"
                {...register("company")}
              />
              <TextField
                name="address"
                label="Address"
                variant="outlined"
                error={!!errors.firstName}
                helperText={errors?.address?.message}
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address required",
                  },
                })}
              />
              <TextField
                name="city"
                label="City"
                variant="outlined"
                error={!!errors.firstName}
                helperText={errors?.firstName?.message}
                {...register("city", {
                  required: {
                    value: true,
                    message: "City required",
                  },
                })}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <StateSelect errors={errors} />
                <TextField
                  name="zipcode"
                  label="Zip Code"
                  variant="outlined"
                  sx={{ width: "48%" }}
                  error={!!errors.firstName}
                  helperText={errors?.firstName?.message}
                  {...register("zipcode", {
                    required: {
                      value: true,
                      message: "Zip code required",
                    },
                    minLength: {
                      value: 5,
                      message: "Zipcode must be at least 5 digits",
                    },
                  })}
                />
              </Box>
            </Card>

            <StyledTypography>Payment</StyledTypography>
            <Typography variant="body2">
              All transactions are secure and encrypted.
            </Typography>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: 3,
                borderRadius: 5,
                marginBottom: 3,
                rowGap: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4">Credit Card</Typography>
                <Box>
                  <CardMedia
                    image={CreditCards}
                    component="img"
                    height={60}
                    sx={{ objectFit: "contain" }}
                  />
                </Box>
              </Box>

              <TextField
                name="creditCardNumber"
                label="Card Number"
                variant="outlined"
                error={!!errors.creditCardNumber}
                helperText={errors?.creditCardNumber?.message}
                {...register("creditCardNumber", {
                  required: {
                    value: true,
                    message: "Credit card number required",
                  },
                  validate: value =>
                    isNaN(Number(value))
                      ? "Credit card number must be a number."
                      : true,
                  pattern: {
                    value: /\d{16}/,
                    message: "Credit card number must be exactly 16 digits",
                  },
                })}
              />

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  name="expirationDate"
                  label="Expiration Date (mm/yy)"
                  variant="outlined"
                  placeholder="mm/yy"
                  error={!!errors.expirationDate}
                  helperText={errors?.expirationDate?.message}
                  {...register("expirationDate", {
                    required: {
                      value: true,
                      message: "Expiration date required",
                    },
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                      message: "Expiration date format is mm/yy",
                    },
                  })}
                />
                <TextField
                  name="securityCode"
                  label="Security Code"
                  variant="outlined"
                  error={!!errors.securityCode}
                  helperText={errors?.securityCode?.message}
                  {...register("securityCode", {
                    required: {
                      value: true,
                      message: "Security code required",
                    },
                    pattern: {
                      value: /\d{3}/,
                      message: "Security code is 3 digits",
                    },
                  })}
                />
              </Box>
              <TextField
                name="nameOnCard"
                label="Name on Card"
                variant="outlined"
                error={!!errors.nameOnCard}
                helperText={errors?.nameOnCard?.message}
                {...register("nameOnCard", {
                  required: {
                    value: true,
                    message: "Name on card required",
                  },
                })}
              />
            </Card>
            <Box>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: "darkgreen",
                  "&:hover": { backgroundColor: "green" },
                }}
              >
                Pay Now
              </Button>
            </Box>
          </Box>
        </form>
      </FormProvider>
      <Snackbar
        open={open}
        onClose={handleCloseSnackbar}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert>Form data successfully submitted</Alert>
      </Snackbar>
    </Box>
  );
};

export default CheckoutForm;

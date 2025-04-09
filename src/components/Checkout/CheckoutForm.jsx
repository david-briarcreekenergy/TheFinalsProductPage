import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Card, CardMedia } from "@mui/material";
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
    formState: { errors },
  } = methods;

  const onSubmit = data => {
    console.log("DATA", data);
  };

  useEffect(() => {
    console.log("ERRORS", errors);
  }, [errors]);

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
                  error={!!errors.expirationDate}
                  helperText={errors?.expirationDate?.message}
                  {...register("expirationDate", {
                    required: {
                      value: true,
                      message: "Expiration date required",
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
              <Button type="submit" variant="contained" sx={{ width: "100%" }}>
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};

export default CheckoutForm;

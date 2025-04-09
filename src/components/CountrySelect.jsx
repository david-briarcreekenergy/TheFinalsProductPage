import { useEffect, useState } from "react";
import getCountries from "../utils/countryApi";
import FormControl from "@mui/material/FormControl";
import {
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  FormHelperText,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

const CountrySelect = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setValue("country", "");
  }, [setValue]);

  useEffect(() => {
    try {
      const fetchCountries = async () => {
        const response = await getCountries();

        // the get request didnt honor the parameters for region.
        // so filter for countries in North America to keep the list short
        const filtered = Object.values(response).filter(
          country => country.region === "North America",
        );
        setCountries(filtered);
      };
      fetchCountries();
    } catch (error) {
      console.error("ERROR in SELECT retrieving countries", error);
    }
  }, [setValue]);

  const selectedCountry = watch("country");

  const countryList = countries.map(country => (
    <MenuItem key={country.country} value={country.country}>
      <Typography variant="body1" color="initial">
        {country.country}
      </Typography>
    </MenuItem>
  ));

  return (
    <Box>
      <FormControl fullWidth required>
        <InputLabel id="country-select-label">Country</InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          label="Country"
          value={selectedCountry || ""}
          error={!!errors.country}
          {...register("country", {
            required: {
              value: true,
              message: "Country is required",
            },
          })}
        >
          {countryList}
        </Select>
        <FormHelperText>
          <Typography color="error" variant="caption">
            {errors?.country?.message}{" "}
          </Typography>
        </FormHelperText>
      </FormControl>
    </Box>
  );
};

export default CountrySelect;

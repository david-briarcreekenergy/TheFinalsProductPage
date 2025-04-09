import { useEffect, useState } from "react";
import getCountries from "../utils/countryApi";
import FormControl from "@mui/material/FormControl";
import { InputLabel, Select, MenuItem, Typography } from "@mui/material";

const CountrySelect = ({ country, handleChange }) => {
  const [countries, setCountries] = useState([]);

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
  }, []);

  const countryList = countries.map(country => (
    <MenuItem key={country.country} value={country.country}>
      <Typography variant="body1" color="initial">
        {country.country}
      </Typography>
    </MenuItem>
  ));

  return (
    <FormControl required>
      <InputLabel id="country-select-label">Country</InputLabel>
      <Select
        labelId="country-select-label"
        id="country-select"
        value={country}
        label="Country"
        onChange={handleChange}
        name="country"
      >
        {countryList}
      </Select>
    </FormControl>
  );
};

export default CountrySelect;

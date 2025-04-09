import states from "../utils/states";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Box,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { alpha } from "@mui/material/styles";
import { useFormContext } from "react-hook-form";

const StateSelect = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedState = watch("state");
  const theme = useTheme();
  const statesList = states.map(state => (
    <MenuItem key={state.abbreviation} value={state.abbreviation}>
      <Typography variant="body1" color="initial">
        {state.name}
      </Typography>
    </MenuItem>
  ));
  return (
    <>
      <FormControl sx={{ width: "50%" }} required error={!!errors.country}>
        <InputLabel id="state-select-label">State</InputLabel>
        <Select
          labelId="state-select-label"
          id="state=select"
          label="State"
          value={selectedState || ""}
          {...register("state", {
            required: {
              value: true,
              message: "State is required",
            },
          })}
          sx={{
            paddingLeft: "10px",
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            "&:hover": {
              backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            width: "100%",
          }}
        >
          {statesList}
        </Select>
      </FormControl>
      {errors.state && (
        <Typography color="error" variant="body2">
          {errors.state.message}
        </Typography>
      )}
    </>
  );
};

export default StateSelect;

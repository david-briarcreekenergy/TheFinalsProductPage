import states from "../utils/states";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { alpha } from "@mui/material/styles";

const StateSelect = ({ state, handleChange }) => {
  const theme = useTheme();
  const statesList = states.map(state => (
    <MenuItem key={state.abbreviation} value={state.abbreviation}>
      <Typography variant="body1" color="initial">
        {state.name}
      </Typography>
    </MenuItem>
  ));
  return (
    <FormControl required>
      <InputLabel id="state-select-label">State</InputLabel>
      <Select
        labelId="state-select-label"
        id="state=select"
        value={state}
        label="State"
        onChange={handleChange}
        name="state"
        sx={{
          paddingLeft: "10px",
          backgroundColor: alpha(theme.palette.common.white, 0.15),
          "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
          },
          height: "40px",
          width: "100%",
        }}
      >
        {statesList}
      </Select>
    </FormControl>
  );
};

export default StateSelect;

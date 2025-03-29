import { createTheme } from "@mui/material/styles";

const sundryTheme = createTheme({
  palette: {
    primary: {
      main: "#0D2A3C", // Custom primary color
    },
    secondary: {
      main: "#6387A3", // Custom secondary color
    },
    text: {
      primary: "#8A8220", // Primary text color
      secondary: "#511800", // Secondary text color
    },
  },
  /*  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Custom font
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
    },
  }, */
});

export default sundryTheme;

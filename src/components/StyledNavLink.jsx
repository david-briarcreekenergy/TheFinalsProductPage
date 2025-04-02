import _default from "@emotion/styled";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router";

const StyledNavLink = styled(NavLink, {
  shouldForwardProp: (prop) => prop !== "onWhiteBkgrd", // Prevent 'textOnly' from being passed to the DOM
})(({ theme, onWhiteBkgrd }) => ({
  color: onWhiteBkgrd ? theme.palette.primary.main : "white",
  textDecoration: "none",
  fontSize: "1.25em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem", // Smaller font size for small screens
    width: "20%",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem", // Larger font size for medium screens and up
  },
  "&:hover": {
    color: onWhiteBkgrd
      ? theme.palette.secondary.main
      : theme.palette.primary.main,
  },
}));

export default StyledNavLink;

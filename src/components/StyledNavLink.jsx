import _default from "@emotion/styled";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router";

const StyledNavLink = styled(NavLink, {
  shouldForwardProp: (prop) => prop !== "textOnly", // Prevent 'textOnly' from being passed to the DOM
})(({ textOnly }) => ({
  textDecoration: "none",
  "&:visited": { color: "darkblue" },
  "&:hover": { color: textOnly ? "ea910b" : "white" },
}));

export default StyledNavLink;

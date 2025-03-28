import { styled } from "@mui/material/styles";
import { NavLink } from "react-router";

export const StyledNavLink = styled(NavLink)(() => ({
  textDecoration: "none",
  "&:visited": { color: "darkblue" },
}));

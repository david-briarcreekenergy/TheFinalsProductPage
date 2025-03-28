import { useContext } from "react";
import { NavLink, useNavigate, useLocation } from "react-router";
import { styled, alpha } from "@mui/material/styles";

import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import { NavigationContext } from "../contexts/NavigationContext";
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  // borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  // backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  // boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
  height: 100,
}));

export default function AppNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleNavLinkClick } = useContext(NavigationContext);

  const handleBackBtnClick = () => {
    navigate(-1);
    handleNavLinkClick();
  };

  return (
    <AppBar enableColorOnDark>
      <PrimarySearchAppBar />

      <StyledToolbar>
        {location.pathname !== "/" && (
          <Button onClick={handleBackBtnClick}>Back</Button>
        )}
        <Button onClick={handleNavLinkClick}>
          <NavLink to="/">Home</NavLink>
        </Button>
        <Button onClick={handleNavLinkClick}>
          <NavLink to="/products">Products</NavLink>
        </Button>
        <Button onClick={handleNavLinkClick}>
          <NavLink to="/about">About Us</NavLink>
        </Button>
        <Button onClick={handleNavLinkClick}>
          <NavLink to="/contact">Contact</NavLink>
        </Button>
      </StyledToolbar>
    </AppBar>
  );
}

// export default NavBar;

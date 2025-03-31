import { useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import { NavigationContext } from "../contexts/NavigationContext";
import StyledNavLink from "./StyledNavLink";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.palette.secondary.main,
  padding: "8px 12px",
  height: 50,
}));

export const AppNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleNavLinkClick } = useContext(NavigationContext);

  const handleBackBtnClick = () => {
    navigate(-1);
    handleNavLinkClick();
  };

  // trying to call handleNavLink directly on the onCLick event doest work
  // have to wrap it is this
  const handleNavClick = () => {
    handleNavLinkClick();
  };

  return (
    <AppBar enableColorOnDark>
      <PrimarySearchAppBar />
      <StyledToolbar>
        {location.pathname !== "/" && (
          <StyledNavLink onClick={handleBackBtnClick}>Back</StyledNavLink>
        )}
        <StyledNavLink to="/" onClick={handleNavClick}>
          Home
        </StyledNavLink>
        <StyledNavLink to="/products" onClick={handleNavClick}>
          Products
        </StyledNavLink>
        <StyledNavLink to="/about" onClick={handleNavClick}>
          About Us
        </StyledNavLink>
        <StyledNavLink to="/contact" onClick={handleNavClick}>
          Contact
        </StyledNavLink>
      </StyledToolbar>
    </AppBar>
  );
};

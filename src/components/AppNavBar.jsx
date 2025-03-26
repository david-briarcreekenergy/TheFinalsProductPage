import { NavLink, useNavigate, useLocation } from "react-router";
import { styled, alpha } from "@mui/material/styles";

import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container>
        <StyledToolbar>
          {location.pathname !== "/" && (
            <Button onClick={() => navigate(-1)}>Back</Button>
          )}
          <Button>
            <NavLink to="/">Home</NavLink>
          </Button>
          <Button>
            <NavLink to="/products">Products</NavLink>
          </Button>
          <Button>
            <NavLink to="/about">About Us</NavLink>
          </Button>
          <Button>
            <NavLink to="/contact">Contact</NavLink>
          </Button>
          <IconButton>
            <NavLink to="/cart">
              <ShoppingCartIcon />
            </NavLink>
          </IconButton>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

// export default NavBar;

import { AppNavBar } from "./AppNavBar";
import Box from "@mui/material/Box";

import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "auto",
        overflow: "hidden",
      }}
    >
      <AppNavBar />
      <Box component="main" sx={{ flexGrow: 1, mt: { xs: 20, sm: 15 } }}>
        <Container maxWidth="xl">{children}</Container>
      </Box>
    </Box>
  );
};

export default Layout;

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
        height: { xs: "auto", sm: "100vh" },
        overflow: "hidden",
        backgroundColor: "linen",
      }}
    >
      <AppNavBar />
      <Box component="main" sx={{ flexGrow: 1, mt: { xs: 35, md: 25 } }}>
        <Container maxWidth="xl">{children}</Container>
      </Box>
    </Box>
  );
};

export default Layout;

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
    <>
      <AppNavBar />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "linen",
        }}
      >
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            mt: 0,
            paddingTop: { xs: 32, sm: 20 },
          }}
        >
          <Container maxWidth="xl">{children}</Container>
        </Box>
      </Box>
    </>
  );
};

export default Layout;

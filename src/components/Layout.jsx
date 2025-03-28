import AppNavBar from "./AppNavBar";
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
    <Box sx={{ display: "flex" }}>
      <AppNavBar />

      <Box component="main" sx={{ flexGrow: 1, mt: 25 }}>
        <Container maxWidth="xl">{children}</Container>
      </Box>

      {/* Sidebar */}
      {/*  <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Home", "About", "Contact"].map((text, index) => (
              <ListItem button key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer> */}

      {/* Main Content */}
    </Box>
  );
};

export default Layout;

{
  /* const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
        <header>
        <Button>
          <NavLink to="/">Dave's Doo Dads</NavLink>
        </Button>
      </header>
      <nav>
        <AppNavBar />
      </nav>
      <main>{children}</main>
      <footer>
        <p>&copy; 2025 Dave's Doo Dads. All rights reserved.</p>
      </footer>
    </Box>
  );
};

export default Layout;
 */
}

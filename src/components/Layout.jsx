import AppNavBar from "./AppNavBar";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
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
    </>
  );
};

export default Layout;

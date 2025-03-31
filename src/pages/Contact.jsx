import IconButton from "@mui/material/IconButton";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTheme } from "@emotion/react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const theme = useTheme();
  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            marginBottom: 4
          }}
        >
          <Typography variant="h3" component="h1">
            Contact Us
          </Typography>
          <Typography variant="h4" component="p">
            We'd love to hear from you!
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <LocalPhoneOutlinedIcon fontSize="large" />
            <Typography variant="h5" component="p">
              800.123.4567
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <EmailOutlinedIcon fontSize="large" />
            <Link
              variant="h5"
              underline="none"
              href="mailto:contact_us@sundry.com"
              sx={{ "&:hover": { color: theme.palette.secondary.main } }}
            >
              contact_us@sundry.com
            </Link>
            <IconButton />
          </Box>
          <Box>
            <Link
              href="https://www.google.com/maps?q=15+Ward+Ave+Right+Here,+TN+34567"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: theme.palette.secondary.main }
              }}
            >
              <PlaceOutlinedIcon fontSize="large" />
              <Typography variant="h5" component="p">
                15 Ward Ave Right Here, TN 34567
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start"
          }}
        >
          <Box sx={{ height: "10vh" }}></Box>
          <ContactForm />
        </Box>
      </Container>
    </Box>
  );
}

import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [open, setOpen] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setOpen(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          maxWidth: { xs: "80%", md: "100%" },
          margin: "0 auto",
        }}
      >
        <Grid container spacing={2}>
          <Grid>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              sx={{ backgroundColor: "white" }}
              slotProps={{
                inputLabel: {
                  sx: {
                    color: "black",
                  },
                },
              }}
            />
          </Grid>
          <Grid>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              sx={{ backgroundColor: "white" }}
              slotProps={{
                inputLabel: {
                  sx: {
                    color: "black",
                  },
                },
              }}
            />
          </Grid>
        </Grid>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ backgroundColor: "white" }}
          slotProps={{
            inputLabel: {
              sx: {
                color: "black",
              },
            },
          }}
        />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
          slotProps={{
            inputLabel: {
              sx: {
                color: "black",
              },
            },
          }}
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          required
          sx={{ backgroundColor: "white" }}
          slotProps={{
            inputLabel: {
              sx: {
                color: "black",
              },
            },
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ width: "30%" }}
          >
            Submit
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={open}
        onClose={handleCloseSnackbar}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert>Form data successfully submitted</Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;

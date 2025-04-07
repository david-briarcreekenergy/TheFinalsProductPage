import { CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        fontSize={{ xs: "2em", md: "2em", xl: "4em" }}
      >
        Who We Are
      </Typography>
      <Typography
        variant="h5"
        component={"div"}
        fontSize={{ xs: "1.5em", md: "1.3em", xl: "1.5em" }}
      >
        Sundry is a small, tight knit team of individuals who are searching the
        market at-large for the best products at the lowest prices and bringing
        them to you.
      </Typography>
      <Typography
        variant="h5"
        component={"div"}
        fontSize={{ xs: "1.5em", md: "1.3em", xl: "1.5em" }}
      >
        We began this enterprise in 2024 using cutting-edge technology and sound
        business practices to make shopping for deals easier. We actively search
        the web for the best deals on the highest quality products so you don't
        have to. We intentionally don't carry a lot of inventory or variety of
        products so that our costs are lower. With our costs lower, you cost is
        lower.
      </Typography>
      <CardMedia
        component={"img"}
        image="/brooke-cagle--uHVRvDr7pg-unsplash.jpg"
        alt="Team members collaborating"
        sx={{
          width: { xs: "70%", sm: "20%", xl: "30%" },
          alignSelf: "flex-end",
        }}
      />
      <Typography
        sx={{ width: "30%", alignSelf: "flex-end", textAlign: "right" }}
      >
        Photo by{" "}
        <a href="https://unsplash.com/@brookecagle?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Brooke Cagle{" "}
        </a>
        on{" "}
        <a href="https://unsplash.com/photos/a-group-of-friends-at-a-coffee-shop--uHVRvDr7pg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </Typography>
    </Box>
  );
};

export default About;

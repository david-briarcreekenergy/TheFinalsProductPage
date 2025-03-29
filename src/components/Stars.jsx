import Box from "@mui/material/Box";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";

const Stars = ({ rating }) => {
  const stars = [];
  // let rate = Math.round(rating.rate * 2) / 2;
  // const rateModulus = Math.abs(rate % 1);
  let rate = rating;
  let i = 5;
  while (i > 0) {
    if (rate >= 1) {
      stars.push(<StarIcon key={i} />);
    } else if (rate > 0) {
      stars.push(<StarHalfOutlinedIcon key={i} />);
    } else {
      stars.push(<StarBorderOutlinedIcon key={i} />);
    }
    rate -= 1;
    i--;
  }

  return (
    <Box sx={{ display: "flex", gap: 0.5 }}>
      {rating.rate}
      {stars}
    </Box>
  );
};

export default Stars;

import { Box, Typography, useMediaQuery } from "@mui/material";
import Marquee from "react-fast-marquee";
const HighlightedTypography = () => {
  const items = ["Forbes", "Intel", "VISA", "Google", "Nike"];
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: 2,
        mt: 5,
      }}
      maxWidth={isSmallScreen ? "100%" : "90%"}
    >
      <Marquee>
        {items.map((item) => (
          <Typography
            key={item}
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginX: 4,
              transition: "color 0.5s, font-size 0.5s",
            }}
          >
            {item}
          </Typography>
        ))}
      </Marquee>
    </Box>
  );
};

export default HighlightedTypography;

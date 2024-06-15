import { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

const HighlightedTypography = () => {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const items = ["Forbes", "Intel", "VISA", "Google", "Nike"];
  const isSmallScreen = useMediaQuery("(max-width: 960px)");
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1000); // Change the interval time as needed
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: 2,
        mt: 5,
        px: 1,
      }}
      maxWidth={isSmallScreen ? "100%" : "80%"}
    >
      {items.map((item, index) => (
        <Typography
          key={item}
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: highlightIndex === index ? "blue" : "inherit",
            fontSize: highlightIndex === index ? "1.2rem" : "1rem",
            transition: "color 0.5s, font-size 0.5s",
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default HighlightedTypography;

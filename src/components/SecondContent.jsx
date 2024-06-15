import { Card, Container, Box, Typography, useMediaQuery } from "@mui/material";

const SecondContent = () => {
  const isSmallScreen = useMediaQuery("(max-width: 960px)");
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        width: "100%",
        position: "relative",
      }}
    >
      {/* First part: Card with black background */}
      <Card
        sx={{
          backgroundColor: "black",
          color: "white",
          height: "300px",
          width: "95%",
          maxWidth: "95%",
          display: "flex",
          justifyContent: "center",
          paddingTop: isSmallScreen ? "50%" : "5%",
          position: "relative",
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5">We Made Banking Easier</Typography>
      </Card>

      {/* Second part: Overlay with three columns */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          width: "85%",
          maxWidth: "85%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: 2, // gap between columns
          height: "500px",
          backgroundColor: "transparent",
          padding: 2,
        }}
      >
        {/* Column 1 */}
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "whitesmoke",
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            mb: { xs: 2, md: 0 }, // margin bottom for spacing in mobile view
          }}
        >
          <img
            src="image1.jpg"
            alt="Image 1"
            style={{ width: "100%", borderRadius: "8px", height: "100%" }}
          />
        </Box>
        {/* Column 2 */}
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "whitesmoke",
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            mb: { xs: 2, md: 0 }, // margin bottom for spacing in mobile view
          }}
        >
          <img
            src="image2.jpg"
            alt="Image 2"
            style={{ width: "100%", borderRadius: "8px", height: "100%" }}
          />
        </Box>
        {/* Column 3 */}
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "whitesmoke",
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src="image3.jpg"
            alt="Image 3"
            style={{ width: "100%", borderRadius: "8px", height: "100%" }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default SecondContent;

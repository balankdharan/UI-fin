import { forwardRef } from "react";
import { Card, Container, Box, Typography, useMediaQuery } from "@mui/material";
import HomeImage from "../assets/business.svg";
import Computer from "../assets/comp.svg";
import Rem from "../assets/rem.svg";
const SecondContent = forwardRef((props, ref) => {
  const isSmallScreen = useMediaQuery("(max-width: 899px)");

  return (
    <Container
      ref={ref}
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        width: "100%",
        position: "relative",
        paddingBottom: isSmallScreen ? "1320px" : "300px",
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
          paddingTop: "50px",
          paddingX: "20px",
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
          top: isSmallScreen ? "5%" : "20%",
          width: "85%",
          maxWidth: "85%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: 2, // gap between columns
          height: isSmallScreen ? "100px" : "500px",
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
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            mb: { xs: 2, md: 0 }, // margin bottom for spacing in mobile view
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            sx={{
              width: "300px",
              height: isSmallScreen ? "450px" : "500px",
              padding: "20px",
            }}
          >
            <img
              src={HomeImage}
              alt="Image 1"
              style={{
                width: "100%",
                borderRadius: "20px",
                height: "300px",
                objectFit: "contain",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Empower your financial future with our expert investment advice
              and personalized wealth management solutions.
            </Typography>
          </Box>
        </Box>
        {/* Column 2 */}
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",

            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            mb: { xs: 2, md: 0 }, // margin bottom for spacing in mobile view
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            sx={{
              width: "300px",
              height: isSmallScreen ? "450px" : "500px",
              padding: "20px",
            }}
          >
            <img
              src={Computer}
              alt="Image 1"
              style={{
                width: "100%",
                borderRadius: "20px",
                height: "300px",
                objectFit: "contain",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Navigate the complexities of finance with confidence through
              strategic investments and robust financial planning
            </Typography>
          </Box>
          {/* <img
            src={Iphone}
            alt="Image 1"
            style={{ width: "200px", borderRadius: "20px", height: "300px" }}
          /> */}
        </Box>
        {/* Column 3 */}
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",

            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            sx={{
              width: "300px",
              height: isSmallScreen ? "450px" : "500px",
              padding: "20px",
            }}
          >
            <img
              src={Rem}
              alt="Image 1"
              style={{
                width: "100%",
                height: "300px",
                borderRadius: "20px",
                objectFit: "contain",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Unlock financial success through informed investments and
              comprehensive financial planning strategies
            </Typography>
          </Box>
          {/* <img
            src={Iphone}
            alt="Image 1"
            style={{ width: "200px", borderRadius: "20px", height: "300px" }}
          /> */}
        </Box>
      </Box>
    </Container>
  );
});

SecondContent.displayName = "SecondContent"; // Set display name for better debugging

export default SecondContent;

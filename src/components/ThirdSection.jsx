import { Typography } from "@mui/material";
import { Box, Container, useMediaQuery } from "@mui/system";
import Iphone from "../assets/bac.jpg";
import Footer from "./Footer";

const ThirdSection = () => {
  const isSmallScreen = useMediaQuery("(max-width: 899px)");

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mt: 4,
          width: "100%",
          position: "relative",
          paddingX: "25px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "relative",
          }}
        >
          <Typography variant="h3">
            To be released soon on Apple store
          </Typography>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              mt: 4,
              borderRadius: "20px",

              height: "400px",
              width: "100%",
            }}
          >
            <img
              src={Iphone}
              alt="Image 1"
              style={{
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",

                height: "100%",
                width: isSmallScreen ? "99%" : "60%",
              }}
            />
          </Box>
        </Box>
        <Footer />
      </Container>
    </>
  );
};

export default ThirdSection;

import {
  Container,
  Card,
  CardContent,
  Typography,
  //   TextField,
  //   Button,
  Box,
  useMediaQuery,
} from "@mui/material";

import HighlightedTypography from "./HighLightTypoGraphy";
import Bg from "../assets/bg.jpg";
// import { styled } from "@mui/system";
import animationData from "../assets/graph.json";
import Lottie from "react-lottie";
const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width: 960px)"); // Define a breakpoint for small screens
  const leftContainerWidth = isSmallScreen ? "100%" : "50%"; // Set width for left container based on screen size
  const paddingContain = isSmallScreen ? 0 : 2; // Set width for left container based on screen size
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // const walletOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: wallet,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  // const moneyOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: money,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  // const cardsOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: cards,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  // const graphOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: graph,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <Container
      maxWidth={false}
      sx={{ display: "flex", justifyContent: "center", mt: 4, width: "100%" }}
    >
      <Card
        sx={{
          borderRadius: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "whitesmoke",
          width: "95%",
          maxWidth: "95%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <CardContent
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            margin: "30px 0",
            padding: paddingContain,
            width: leftContainerWidth, // Set width of left container dynamically
          }}
        >
          <Box padding={isSmallScreen ? "5px" : "20px"}>
            <Box maxWidth={"100%"}>
              <Typography
                variant={isSmallScreen ? "h5" : "h3"}
                paddingX={isSmallScreen ? 2 : "0px"}
                component="div"
                sx={{ mb: 2 }}
              >
                <Box
                  maxWidth={isSmallScreen ? "100%" : "90%"}
                  color={"blue"}
                  display={"flex"}
                  style={{ alignItems: "center" }}
                >
                  <Box>Are you Ready </Box>
                  <Box sx={{ paddingX: "5%" }}>
                    <span
                      style={{
                        height: "50px",
                      }}
                    >
                      <Lottie
                        options={defaultOptions}
                        height={isSmallScreen ? 70 : 80}
                        width={isSmallScreen ? 70 : 80}
                      />
                    </span>{" "}
                  </Box>
                </Box>
                <Box>
                  <Typography variant={isSmallScreen ? "h5" : "h3"}>
                    for a revolution in
                  </Typography>
                </Box>
                <Typography variant={isSmallScreen ? "h5" : "h3"}>
                  {" "}
                  fintech industry ?
                </Typography>
                <Typography variant={isSmallScreen ? "h4" : "h3"}>
                  Explore Us
                </Typography>
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 2, mt: 2, color: "#a4a4a4" }}
                paddingX="5px"
              >
                This is a paragraph. It provides some information about the
                topic. Lorem ipsum dolor sit amet consectetur, elit. Magnam cum
                minima sit ipsum facilis error tenetur, blanditiis nesciunt
                consequatur odit optio minus Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Deserunt odio ab explicabo
                quaerat, sequi magnam reiciendis consequuntur impedit magni.
              </Typography>
            </Box>
            {/* <Box
              maxWidth={"100%"}
              sx={{ display: "flex", mb: 2, alignItems: "center" }}
            >
              <CustomInput
                variant="outlined"
                placeholder="Enter something..."
                fullWidth
              />
              <CustomButton variant="contained" color="primary">
                Submit
              </CustomButton>
            </Box> */}

            <HighlightedTypography />
          </Box>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            position: "relative",
            backgroundImage: `url(${Bg})`, // Add your background image URL here
            backgroundSize: "cover", // Ensures the image covers the entire box
            backgroundPosition: "center", // Centers the image
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Black color with 50% opacity
              zIndex: 1,
            },
          }}
        ></Box>
      </Card>
    </Container>
  );
};

export default Home;

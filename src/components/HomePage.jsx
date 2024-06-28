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
import Lottie from "react-lottie";
import animationData from "../assets/animationData.json";
import money from "../assets/money.json";
import wallet from "../assets/wallet.json";
import cards from "../assets/cards.json";
import graph from "../assets/graph.json";
import HighlightedTypography from "./HighLightTypoGraphy";
// import { styled } from "@mui/system";

// Create a custom button at last

// const CustomInput = styled(TextField)(() => ({
//   borderRadius: "20px",
//   borderTopRightRadius: 0,
//   borderBottomRightRadius: 0,
//   height: "60px",
//   "& .MuiOutlinedInput-root": {
//     borderRadius: "20px",
//     height: "100%",
//     borderTopRightRadius: 0,
//     borderBottomRightRadius: 0,
//   },
// }));

// const CustomButton = styled(Button)(() => ({
//   borderRadius: "20px",
//   borderTopLeftRadius: 0,
//   borderBottomLeftRadius: 0,
//   height: "60px",
// }));

const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width: 960px)"); // Define a breakpoint for small screens
  const leftContainerWidth = isSmallScreen ? "100%" : "50%"; // Set width for left container based on screen size
  const paddingContain = isSmallScreen ? 0 : 2; // Set width for left container based on screen size
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const walletOptions = {
    loop: true,
    autoplay: true,
    animationData: wallet,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const moneyOptions = {
    loop: true,
    autoplay: true,
    animationData: money,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const cardsOptions = {
    loop: true,
    autoplay: true,
    animationData: cards,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const graphOptions = {
    loop: true,
    autoplay: true,
    animationData: graph,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
                variant={"h3"}
                paddingX={isSmallScreen ? 2 : "0px"}
                component="div"
                sx={{ mb: 2 }}
              >
                <Box maxWidth={isSmallScreen ? "100%" : "70%"} color={"blue"}>
                  Are you Ready <span>icon </span>
                  for a revolution in
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
          // component="img"
          // src="https://via.placeholder.com/150"
          // alt="Placeholder Image"
          sx={{
            display: { xs: "none", md: "block" },
            width: "50%", // Set width of right container
            objectFit: "cover",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px",
          }}
        >
          <Box sx={{ width: "20%" }}>
            <Lottie options={defaultOptions} />
          </Box>
          <Box sx={{ width: "20%" }}>
            <Lottie options={moneyOptions} />
          </Box>
          <Box sx={{ width: "20%" }}>
            <Lottie options={walletOptions} />
          </Box>
          <Box sx={{ width: "20%" }}>
            <Lottie options={cardsOptions} />
          </Box>
          <Box sx={{ width: "20%" }}>
            <Lottie options={graphOptions} />
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Home;

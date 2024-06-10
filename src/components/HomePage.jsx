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
            padding: 2,
            width: leftContainerWidth, // Set width of left container dynamically
          }}
        >
          <Box padding={"20px"}>
            <Box maxWidth={"100%"}>
              <Typography variant="h3" component="div" sx={{ mb: 2 }}>
                <Box maxWidth={"70%"}>
                  Are you Ready <span>icon </span>
                  for a revolution in
                </Box>
                <Typography variant="h3"> fintech industry ?</Typography>
                <Typography variant="h2">Explore Us</Typography>
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 2, mt: 2, color: "#a4a4a4" }}
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

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2">Item 1</Typography>
              <Typography variant="body2">Item 2</Typography>
              <Typography variant="body2">Item 3</Typography>
            </Box>
          </Box>
        </CardContent>
        <Box
          component="img"
          src="https://via.placeholder.com/150"
          alt="Placeholder Image"
          sx={{
            display: { xs: "none", md: "block" },
            width: "50%", // Set width of right container
            objectFit: "cover",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px",
          }}
        />
      </Card>
    </Container>
  );
};

export default Home;

import {
  Card,
  Container,
  Grid,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth={false}
      sx={{
        position: "absolute",
        top: "85%",
        left: 0,
        justifyContent: "center",
        width: "100%",
        mt: 4,
      }}
    >
      <Card
        sx={{
          backgroundColor: "black",
          color: "white",
          justifyContent: "center",
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: 4,
          paddingTop: 7,
        }}
      >
        <Grid container spacing={4}>
          {/* Left Part */}
          <Grid item xs={12} sm={6} sx={{ padding: 2 }}>
            <Box sx={{ textAlign: isSmallScreen ? "center" : "left" }}>
              {/* <img
                src="/path/to/logo.png"
                alt="Logo"
                style={{ width: "100px" }}
              /> */}
              <Typography variant="h5">LOGO</Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Your company description goes here. This is a placeholder text
                that you can replace with your actual content.
              </Typography>
            </Box>
          </Grid>
          {/* Right Part */}
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ padding: 2, textAlign: "left" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    About Product
                  </Typography>
                  <br />
                  <Typography variant="body1">Patch</Typography>

                  <Typography variant="body1">Updates</Typography>
                  <Typography variant="body1">Career</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ padding: 2, textAlign: "left" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {" "}
                    Company
                  </Typography>
                  <br />
                  <Typography variant="body1">Patch</Typography>

                  <Typography variant="body1">Update</Typography>
                  <Typography variant="body1">Business</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ padding: 2, textAlign: "left" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Support
                  </Typography>
                  <br />
                  <Typography variant="body1">Help Center</Typography>

                  <Typography variant="body1">Account</Typography>
                  <Typography variant="body1">Early Access</Typography>
                  <Typography variant="body1">Talk to support</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Footer;

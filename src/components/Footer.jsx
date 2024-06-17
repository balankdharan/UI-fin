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
              <img
                src="/path/to/logo.png"
                alt="Logo"
                style={{ width: "100px" }}
              />
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
                <Box sx={{ padding: 2 }}>
                  <Typography variant="h6">Column 1</Typography>
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                      <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Item 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Item 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Item 3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Item 4
                      </a>
                    </li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ padding: 2 }}>
                  <Typography variant="h6">Column 2</Typography>
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                      <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Item 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Item 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Item 3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Item 4
                      </a>
                    </li>
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ padding: 2 }}>
                  <Typography variant="h6">Column 3</Typography>
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                      <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Item 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Item 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Item 3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Item 4
                      </a>
                    </li>
                  </ul>
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

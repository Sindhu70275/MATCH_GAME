import PropTypes from "prop-types";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = ({ score, secondsLeft }) => {
  return (
    <Grid container spacing={4} sx={{ justifyContent: "center" }}>
      <Grid item xs={12}>
        <AppBar
          position="fixed"
          sx={{
            width: "100%",
            paddingX: { xs: "0rem", md: "6.5rem" },
            background: "#2c0e3a",
          }}
        >
          <Container maxWidth="none">
            <Toolbar
              disableGutters
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
                  alt="website logo"
                  style={{ width: "160px", height: "auto" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "auto",
                }}
              >
                <Typography sx={{ marginRight: "2rem" }}>
                  Score: {score}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                    alt="timer"
                    style={{ width: "30px", height: "auto" }}
                  />
                  <Typography>{secondsLeft} sec</Typography>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
    </Grid>
  );
};

Navbar.propTypes = {
  score: PropTypes.number.isRequired,
  secondsLeft: PropTypes.number.isRequired,
};

export default Navbar;
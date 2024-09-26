import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const GameOver = ({ score, handlePlayAgain }) => {
  const onClickPlayAgain = () => {
    handlePlayAgain();
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundImage: {
            xs: `url("https://assets.ccbp.in/frontend/react-js/match-game-score-card-sm-bg.png")`,
            md: `url("https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png")`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: { xs: "250px", md: "500px" },
          height: { xs: "400px", md: "620px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <CardMedia
          component="img"
          image="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          sx={{
            width: "150px",
            height: "150px",
            marginBottom: "1.5rem",
            marginTop: { xs: "3rem", md: "7rem" },
          }}
        />
        <Typography
          variant="h3"
          component="h1"
          sx={{
            marginBottom: { xs: "0.5rem", md: "1rem" },
            fontSize: { xs: "1rem", md: "2.5rem" },
          }}
        >
          Your Score
        </Typography>
        <Typography
          variant="h4"
          component="p"
          sx={{
            marginBottom: { xs: "1rem", md: "2rem" },
            fontSize: { xs: "1rem", md: "2.5rem" },
          }}
        >
          {score}
        </Typography>
        <Button
          onClick={onClickPlayAgain}
          variant="contained"
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#cf60c8",
            color: "white",
            "&:hover": {
              backgroundColor: "#cf60c8",
            },
          }}
        >
          <CardMedia
            component="img"
            image="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            sx={{ width: "30px", height: "30px", marginRight: "0.5rem" }}
          />
          Play Again
        </Button>
      </Box>
    </Box>
  );
};

GameOver.propTypes = {
  score: PropTypes.number.isRequired,
  handlePlayAgain: PropTypes.func.isRequired,
};

export default GameOver;
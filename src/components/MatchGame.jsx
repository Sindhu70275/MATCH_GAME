import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { tabsList, imagesList } from "../constants/constants";

import GameOver from "./GameOver";
import Navbar from "./Navbar";
import TabItems from "./TabItems";
import ThumbnailItems from "./ThumbnailItems";

const MatchGame = () => {
  const [activeTab, setActiveTab] = useState(tabsList[0].tabId);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [randomIndex, setRandomIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(60);

  const handleTabId = (id) => {
    setActiveTab(id);
  };

  const filterdTabList = imagesList.filter(
    (eachItem) => eachItem.category === activeTab
  );

  const handleThumbnailClick = (id) => {
    if (imagesList[randomIndex].id === id) {
      setRandomIndex(Math.floor(Math.random() * imagesList.length));
      setScore((prevScore) => prevScore + 1);
    } else {
      setIsGameOver(true);
    }
  };

  const handlePlayAgain = () => {
    setScore(0);
    setIsGameOver(false);
    setSecondsLeft(60);
    setRandomIndex(Math.floor(Math.random() * imagesList.length));
  };

  useEffect(() => {
    if (isGameOver) return;

    const intervalId = setInterval(() => {
      setSecondsLeft((prevSeconds) => {
        if (prevSeconds !== 0) {
          return prevSeconds - 1;
        } else {
          setIsGameOver(true);
          clearInterval(intervalId);
          return prevSeconds;
        }
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isGameOver]);

  return (
    <Box
      sx={{
        paddingBottom: "2rem",
        backgroundImage: `url("https://assets.ccbp.in/frontend/react-js/match-game-bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {isGameOver ? (
        <GameOver score={score} handlePlayAgain={handlePlayAgain} />
      ) : (
        <>
          <Navbar score={score} secondsLeft={secondsLeft} />
          <Box sx={{ paddingTop: { xs: "6rem", sm: "8rem" } }}>
            <Container>
              <Grid container justifyContent="center">
                <CardMedia
                  component="img"
                  image={imagesList[randomIndex].imageUrl}
                  alt="match"
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "500px",
                    marginBottom: "2rem",
                  }}
                />
              </Grid>
              <Box sx={{ marginBottom: "2rem" }}>
                <Grid container spacing={2} justifyContent="center">
                  {tabsList.map((eachItem) => (
                    <Grid item key={eachItem.tabId}>
                      <TabItems
                        tabsList={eachItem}
                        isActive={eachItem.tabId === activeTab}
                        handleTabId={handleTabId}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Grid container justifyContent="center">
                <ThumbnailItems
                  items={filterdTabList}
                  handleThumbnailClick={handleThumbnailClick}
                />
              </Grid>
            </Container>
          </Box>
        </>
      )}
    </Box>
  );
};

export default MatchGame;

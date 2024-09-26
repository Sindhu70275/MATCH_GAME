import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

const ThumbnailItems = ({ items, handleThumbnailClick }) => {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid
          item
          xs={3}
          sm={3}
          md={2.3}
          lg={2.3}
          key={item.id}
          onClick={() => handleThumbnailClick(item.id)}
        >
          <Card
            sx={{
              boxShadow: "none",
              cursor: "pointer",
              "&:hover": {
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={item.thumbnailUrl}
              alt="thumbnail"
              sx={{ width: "100%", height: { xs: "60px", sm: "150px" } }}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

ThumbnailItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      category: PropTypes.string,
    })
  ).isRequired,
  handleThumbnailClick: PropTypes.func.isRequired,
};

export default ThumbnailItems;
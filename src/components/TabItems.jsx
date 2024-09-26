import PropTypes from "prop-types";

import { styled } from "@mui/material";
import Button from "@mui/material/Button";


const TabButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive', 
})(({ theme, isActive }) => ({
  textTransform: "none",
  padding: theme.spacing(1, 2),
  borderBottom: isActive ? `2px solid ${theme.palette.primary.main}` : "none",
  border: "none",
  background: "none",
  outline: "none",
  "&:hover": {
    background: "none",
    border: "none",
    outline: "none",
  },
  "&:focus": {
    outline: "none",
  },
  color: isActive ? "#fec653" : "white",
}));

const TabItems = ({ tabsList, isActive, handleTabId }) => {
  const { displayText, tabId } = tabsList;

  const onTabClick = () => {
    handleTabId(tabId);
  };

  return (
    <TabButton onClick={onTabClick} isActive={isActive} variant="text">
      {displayText}
    </TabButton>
  );
};

TabItems.propTypes = {
  tabsList: PropTypes.shape({
    displayText: PropTypes.string.isRequired,
    tabId: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  handleTabId: PropTypes.func.isRequired,
};

export default TabItems;
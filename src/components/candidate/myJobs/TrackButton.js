import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import SmallButton from "../../common/SmallButton";

const TrackButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        variant="contained"
        sx={{
          marginLeft: 1,
        }}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Track
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        elevation={2}
      >
        <Box
          sx={{
            padding: "10px",
          }}
        >
          <Box mb={2}>
            <strong>My Stage:</strong>
            <SmallButton color="lightGreenButton300" ml={1} label="Review" />
          </Box>
          <Box>
            <h4>
              <strong>Application Steps:</strong>
            </h4>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  width: "15rem",
                  borderRadius: "10px",
                }}
              >
                {" "}
                Q&A
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "15rem",
                  borderRadius: "10px",
                }}
              >
                {" "}
                Application video
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "15rem",
                  borderRadius: "10px",
                }}
              >
                {" "}
                My Profile
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "15rem",
                  borderRadius: "10px",
                }}
              >
                {" "}
                Crayon vitae
              </Button>
            </Box>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default TrackButton;

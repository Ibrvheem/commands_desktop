/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import navylogo from "../assets/navylogo.svg";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          position: "relative",
          zIndex: 2,
          paddingTop: "2em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: "1rem",
              color: "#fff",
              fontFamily: "'Lato', sans-serif",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "Lato",
              }}
            >
              NAVY COMMANDS
            </Link>
          </Typography>
          <img src={navylogo} alt="" style={{ width: "3.5rem" }} />
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default Header;

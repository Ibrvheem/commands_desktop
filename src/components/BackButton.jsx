import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
        color: "#fff",
        border: "1px solid #fff",
        position: "absolute",
        top: "85%",
        left: "75%",
        borderRadius: "15px",
        height: "4.25rem",
        width: "16.3125rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
      }}
    >
      <Box sx={{ textAlign: "center", fontSize: "1.25rem" }}>BACK TO HOME</Box>
    </Link>
  );
};

export default BackButton;

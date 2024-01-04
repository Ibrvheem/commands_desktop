import { Link } from "react-router-dom";
import central from "../assets/central.svg";
import nignavy from "../assets/nignavy.svg";
import western from "../assets/western.svg";
import quorra from "../assets/quorra.png";
import logistic from "../assets/logistic.svg";
import training from "../assets/training.svg";
import eastern from "../assets/eastern.svg";
import { Box, Typography } from "@mui/material";

const DisplayCard = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        {data.map((item) => (
          <Box key={item.id}>
            <Link
              to={`/about/${item.id}`}
              style={{
                textDecoration: "none",
                color: "#fff",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#FFFFFF80",
                height: "270px",
                borderRadius: "15px",
                width: "250px",
              }}
            >
              <img
                src={item.front}
                alt=""
                style={{
                  width: item.width,
                  height: item.height,
                  objectFit: "contain",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.5rem",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                {item.lowerText}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const data = [
  {
    id: 1,
    front: central,
    lowerText: "Central Naval Command",
    height: "9.1875rem",
    width: "6.25rem",
  },
  {
    id: 2,
    front: nignavy,
    lowerText: "Naval Doctrine Command",
    height: "9.2105rem",
    width: "6.25rem",
  },
  {
    id: 3,
    front: quorra,
    lowerText: "Naval Ship Quorra",
    height: "8.875rem",
    width: "7.375rem",
  },
  {
    id: 4,
    front: logistic,
    lowerText: "Logistics Command",
    height: "9.1875rem",
    width: "6.25rem",
  },
  {
    id: 5,
    front: training,
    lowerText: "Naval Training Command",
    height: "9.1875rem",
    width: "6.8125rem",
  },
  {
    id: 6,
    front: eastern,
    lowerText: "Eastern Naval Command",
    height: "9.1875rem",
    width: "6.8125rem",
  },
  {
    id: 7,
    front: western,
    lowerText: "Western Naval Command",
    height: "9.1875rem",
    width: "6.8125rem",
  },
];

export default DisplayCard;

import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import central from "../assets/central.svg";
import eastern from "../assets/eastern.svg";
import western from "../assets/western.svg";
import logistic from "../assets/logistic.svg";
import training from "../assets/training.svg";

const DisplayCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipAnimating, setIsFlipAnimating] = useState(false);

  const handleImageFlip = () => {
    if (!isFlipAnimating) {
      setIsFlipped(!isFlipped);
      setIsFlipAnimating(true);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          perspective: "1000px",
        }}
      >
        {data.map((item) => (
          <motion.div
            key={item.id}
            style={{
              transition: "transform 0.4s",
              transformStyle: "preserve-3d",
              width: "25%",
              cursor: "pointer",
              minHeight: "12em",
            }}
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.2 }}
            whileHover={{ rotateY: isFlipped ? 360 : 180 }}
            onAnimationComplete={() => setIsFlipAnimating(false)}
          >
            <div
              style={{
                position: "absolute",
                backfaceVisibility: "hidden",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "85%",
                  backgroundColor: "#FFFFFF80",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "1.5em 0",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                <img
                  src={item.front}
                  alt=""
                  style={{
                    width: "40%",
                    marginBottom: "1.5em",
                  }}
                />

                <Typography
                  variant="body2"
                  sx={{
                    color: "#fff",
                    textTransform: "uppercase",
                    textAlign: "center",
                    fontSize: "1rem",
                    width: "80%",
                  }}
                >
                  {item.lowerText}
                </Typography>
              </div>
            </div>
            <Link
              to={`/about/${item.id}`}
              style={{
                textDecoration: "none",
                position: "absolute",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "85%",
                  backgroundColor: "#FFFFFF80",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "1.5em 0",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                <img src={item.back} alt="" style={{ width: "40%", marginBottom: "2.5em" }} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    front: central,
    back: central,
    lowerText: "Central Naval Command",
  },
  {
    id: 2,
    front: eastern,
    back: eastern,
    lowerText: "Eastern Naval Command",
  },
  {
    id: 3,
    front: western,
    back: western,
    lowerText: "Western Naval Command",
  },
  {
    id: 4,
    front: logistic,
    back: logistic,
    lowerText: "Naval Logistics Command",
  },
  {
    id: 5,
    front: training,
    back: training,
    lowerText: "Nigerian Navy Training Command",
  },
];

export default DisplayCard;

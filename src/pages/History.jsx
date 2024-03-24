import { Box, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
// import Transition from "../components/transition";
import { centralData } from '../components/data';
import { useParams } from "react-router-dom";
import React from "react";
import BackButton from "../components/BackButton";
import { motion } from "framer-motion";

const History = () => {
  const { id } = useParams();

  const selectedItem = centralData[0]?.history.find(
    (item) => item.id === Number(id)
  );

  if (!selectedItem) {
    // Handle the case where the item is not found
    return (
      <motion.div
        sx={{
          marginLeft: "6em",
          display: "flex",
          position: "relative",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <Box></Box>
        <SideBar>
          {/* <DetailsHeader></DetailsHeader> */}
          <Box>
            <BackButton />
          </Box>
        </SideBar>
      </motion.div>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <SideBar>
          <motion.div
            style={{
              width: "78%",
              marginLeft: "4.5em",
              marginTop: "5em",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            key={selectedItem.id}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  fontSize: "4.375rem",
                  width: "850px",
                  textTransform: "uppercase",
                  fontFamily: "Perpetua Light",
                }}
              >
                {selectedItem.header}
              </Typography>
              <img
                src={selectedItem.image}
                alt=""
                style={{ width: "6.25rem", marginRight: "1em" }}
              />
            </Box>
            <Box
              sx={{
                width: "1300px",
                height: "50vh",
                overflow: "auto",
                scrollbarWidth: "thin", // For Firefox
                scrollbarColor: "transparent transparent", // For Firefox
                WebkitOverflowScrolling: "touch",
                marginTop: "2em",
              }}
            >
              <style>
                {`
                    /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
                    ::-webkit-scrollbar {
                      width: 0.2em;
                    }

                    ::-webkit-scrollbar-thumb {
                      background-color: transparent;
                    }

                    /* Optional: Add some styles for the scrollbar track */
                    ::-webkit-scrollbar-track {
                      // background-color: #f1f1f1;
                    }
                `}
              </style>
              <Typography
                variant="body2"
                component={"div"}
                sx={{
                  color: "#fff",
                  fontSize: "1.5rem",
                  width: "100%",
                  fontFamily: "Manrope",
                  lineHeight: "1.8",
                  // marginBottom: "18em",
                }}
              >
                {selectedItem.text.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <p style={{ display: "block", padding: ".2em 0" }}></p>
                  </React.Fragment>
                ))}
              </Typography>
            </Box>
          </motion.div>
        </SideBar>
      </Box>
      <BackButton />
    </Box>
  );
};

export default History;

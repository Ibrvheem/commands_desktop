/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from "@mui/material";
import DisplayCard from "../components/DisplayCard";
import Header from "../components/Header";
// import Transition from "../components/transition";
import { motion } from "framer-motion";

const HeroPage = () => {
  return (
    <Header>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "60%",
            width: "80%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "4.675rem",
                  color: "#D1C62A",
                  textAlign: "center",
                  fontWeight: 300,
                  fontFamily: "Perpetua Light",
                }}
              >
                THE NIGERIAN NAVY COMMANDS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontSize: "1.75rem",
                  lineHeight: "1.5",
                  textAlign: "center",
                  textTransform: "capitalize",
                  marginTop: "1.2em",
                  fontFamily: "ManropeSemiBold",
                }}
              >
                “From successful maritime operations to humanitarian missions,
                our naval forces continue to uphold the highest standards of
                professionalism and excellence."
              </Typography>
            </Box>

            <Box
              sx={{
                marginTop: "6em",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "95%",
                }}
              >
                <DisplayCard />
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Header>
  );
};

export default HeroPage;

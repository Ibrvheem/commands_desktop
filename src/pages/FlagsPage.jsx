import { Box, Typography } from "@mui/material";
import SideBar from "../components/SideBar";
// import Transition from "../components/transition";
import DetailsHeader from "../components/DetailsHeader";
import { Link, useParams } from "react-router-dom";
import { centralData } from "../data";
import BackButton from "../components/BackButton";
import { motion } from "framer-motion";

const FlagsPage = () => {
  const { id } = useParams();

  const selectedItem = centralData[0]?.flagsPage.find((item) => item.id === Number(id));

  if (!selectedItem) {
    // Handle the case where the item is not found
    return (
      <Box
        sx={{
          marginLeft: "6em",
          display: "flex",
          position: "relative",
        }}
      >
        <SideBar></SideBar>
        <DetailsHeader></DetailsHeader>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, ease: "easeIn" }}>
          <BackButton />
        </motion.div>
      </Box>
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
          <DetailsHeader>
            <motion.div
              style={{
                width: "80%",
                marginLeft: "4.5em",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              <Box
                sx={{
                  width: "70vw",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  height: "70vh",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF80",
                    height: "30em",
                    width: "40em",
                    borderRadius: "20px",
                  }}
                >
                  <Link
                    to={`/past-commanding/${selectedItem.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <img src={selectedItem.image1} alt="" style={{ width: "80px" }} />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#fff",
                          fontSize: "1.5rem",
                          textTransform: "uppercase",
                          width: "74%",
                          marginTop: "2em",
                        }}
                      >
                        Current Flag Officer Commanding
                      </Typography>
                    </Box>
                  </Link>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF80",
                    height: "30em",
                    width: "40em",
                    borderRadius: "20px",
                  }}
                >
                  <Link
                    to={`/past-commanding/${selectedItem.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textDecoration: "none",
                      fontSize: "1.5rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        textAlign: "center",
                      }}
                    >
                      <img src={selectedItem.image2} alt="" style={{ width: "75px" }} />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#fff",
                          fontSize: "1.5rem",
                          textTransform: "uppercase",
                          width: "74%",
                          marginTop: "2em",
                        }}
                      >
                        Past Flag Officers Commanding
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </Box>
            </motion.div>
          </DetailsHeader>
        </SideBar>
      </Box>
      <BackButton />
    </Box>
  );
};

export default FlagsPage;

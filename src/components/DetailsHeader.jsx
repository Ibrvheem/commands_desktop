/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { centralData } from "./data";
import { motion } from "framer-motion";
import BackButton from "./BackButton";

const DetailsHeader = ({ children }) => {
  const { id } = useParams();

  const selectedItem = centralData[0]?.about.find((item) => item.id === Number(id));

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
        {/* <SideBar> */}
        <Box>
          <BackButton />
        </Box>
        {/* </SideBar> */}
        {/* <DetailsHeader></DetailsHeader> */}
      </motion.div>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "95%",
        }}
      >
        <img src={selectedItem.image} alt="" style={{ width: "6.25rem", justifySelf: "end" }} key={selectedItem.id} />
      </Box>
      {children}
    </Box>
  );
};

export default DetailsHeader;

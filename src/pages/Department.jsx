import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import DetailsHeader from "../components/DetailsHeader";
import BackButton from "../components/BackButton";
import { motion } from "framer-motion";

const Department = () => {
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <BackButton />
      </motion.div>
    </Box>
  );
};

export default Department;

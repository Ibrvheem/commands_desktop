import { Box } from "@mui/material";
import SideBar from "../components/SideBar";
import DetailsHeader from "../components/DetailsHeader";
import { useParams } from "react-router-dom";
import { centralData } from '../components/data';
import BackButton from "../components/BackButton";
import { motion } from "framer-motion";
import "@splidejs/react-splide/css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import { EffectCoverflow } from "swiper/modules";

const PastCommanding = () => {
  const { id } = useParams();

  const selectedItem = centralData[0]?.pastCommanding.find(
    (item) => item.id === Number(id)
  );

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
        <SideBar />
        <DetailsHeader />
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
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}
      >
        <SideBar>
          <DetailsHeader>
            <motion.div
              style={{ width: "80%", marginLeft: "4.5em" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              <div
                className="splide_div"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "73vw",
                  justifyContent: "center",
                }}
              >
                <div className="container" style={{ marginTop: "6em" }}>
                  <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                    }}
                    spaceBetween={100}
                    modules={[EffectCoverflow]}
                    className="mySwiper"
                  >
                    {selectedItem.images.map(imageItem => (
                      <SwiperSlide key={imageItem.id}>
                        <img src={imageItem.image} alt={`Image ${imageItem.id}`} style={{ width: "auto", height: "500px" }} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </motion.div>
          </DetailsHeader>
        </SideBar>
      </Box>
      <BackButton />
    </Box>
  );
};

export default PastCommanding;

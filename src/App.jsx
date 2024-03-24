import HeroPage from "./pages/HeroPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
// import backgroundImage from "./assets/BackgroundImg.svg";
import AboutPage from "./pages/AboutPage";
import History from "./pages/History";
import Objectives from "./pages/Objectives";
import Gallery from "./pages/Gallery";
import { AnimatePresence } from "framer-motion";
import FlagsPage from "./pages/FlagsPage";
import PastCommanding from "./pages/PastCommanding";
import CurrentCommanding from "./pages/CurrentCommanding";
import Structures from "./pages/Structures";
import Department from "./pages/Department";
import AOR from "./pages/AOR";
import Organization from "./pages/Organization";
import Administration from "./pages/Administration";
import Finance from "./pages/Finance";

const App = () => {
  const location = useLocation();
  return (
    <Box
      sx={{
        // backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // paddingTop: "2em",
        position: "relative",
      }}
    >
      <video
        src="/flag.mp4"
        autoPlay
        muted
        loop
        style={{
          height: "100%",
          position: "absolute",
          zIndex: 1,
          width: "100%",
        }}
      ></video>
      <div
        style={{
          position: "absolute",
          zIndex: 2,
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: "rgba(000,000,000,0.6)",
          overflow: "hidden",
        }}
      ></div>
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HeroPage />} />
          <Route path="/about/:id" element={<AboutPage />} />
          <Route path="/history/:id" element={<History />} />
          <Route path="/departments/:id" element={<Department />} />
          <Route path="/objectives/:id" element={<Objectives />} />
          <Route path="/aor/:id" element={<AOR />} />
          <Route path="/structures/:id" element={<Structures />} />
          <Route path="/organizations/:id" element={<Organization />} />
          <Route path="/administration/:id" element={<Administration />} />
          <Route path="/finance/:id" element={<Finance />} />
          <Route path="/gallery/:id" element={<Gallery />} />
          <Route path="/flag/:id" element={<FlagsPage />} />
          <Route path={`/past-commanding/:id`} element={<PastCommanding />} />
          <Route path={`/current-commanding/:id`} element={<CurrentCommanding />} />
        </Routes>
      </AnimatePresence>
    </Box>
  );
};

export default App;

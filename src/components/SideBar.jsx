/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import { Link, useLocation, useParams } from "react-router-dom";
import { sidebarLinks } from "../data";
const SideBar = ({ children }) => {
  const location = useLocation();
  const { id } = useParams();

  // Find the corresponding sidebar links for the current page id
  const sidebarLinksForPage = sidebarLinks[0]?.linkId.find((item) => item.id === Number(id));

  if (!sidebarLinksForPage) {
    return (
      <Box>
        <h1>No details found</h1>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        marginLeft: "1em",
        position: "relative",
        zIndex: 2,
        paddingTop: "2em",
      }}
    >
      <Box sx={{ width: "15%" }}>
        {sidebarLinksForPage.link.map((pageLink, index) => (
          <Link
            to={`/${pageLink}/${id}`}
            style={{
              textDecoration: "none",
              width: "100%",
              height: "100%",
            }}
            key={pageLink}
          >
            <Button
              disableRipple
              variant="outlined"
              sx={{
                borderColor: "#fff",
                display: "flex",
                flexDirection: "column",
                width: "12.8125rem",
                height: "9.2125rem",
                padding: "2em 0",
                borderRadius: "20px",
                marginBottom: "2em",
                backgroundColor: location.pathname === `/${pageLink}/${id}` ? "#D1C62A" : "transparent",
                "&:hover": {
                  borderColor: "#D1C62A",
                  backgroundColor: "#D1C62A",
                },
              }}
            >
              <img
                key={index} // Assuming index is the correct key for images
                src={sidebarLinksForPage.image[index]}
                alt=""
                style={{ width: "3.2rem" }}
              />

              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  fontSize: "1.25rem",
                }}
              >
                {pageLink}
              </Typography>
            </Button>
          </Link>
        ))}
      </Box>

      {children}
    </Box>
  );
};

// const buttonItem = [
//   {
//     id: 1,
//     image: about,
//     text: "About",
//     pageLink: "about",
//   },
//   {
//     id: 2,
//     image: objectives,
//     text: "Objectives",
//     pageLink: "objectives",
//   },
//   {
//     id: 3,
//     image: departments,
//     text: "Departments",
//     pageLink: "departments",
//   },
//   {
//     id: 4,
//     image: structures,
//     text: "Structures",
//     pageLink: "structures",
//   },
//   {
//     id: 5,
//     image: flag,
//     text: "Flag Officer",
//     pageLink: "flag",
//   },
//   {
//     id: 6,
//     image: gallery,
//     text: "Gallery",
//     pageLink: "gallery",
//   },
// ];

export default SideBar;

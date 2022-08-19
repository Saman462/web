import React, { Component, useState } from "react";
import Carousel from "react-spring-3d-carousel-2";

// import { config } from "react-spring";

// import dynamic from 'next/dynamic'

// const {Carousel} = dynamic(
//   () => import('react-spring-3d-carousel-2'),
//   { ssr: false }
// )

import Image from "next/image";
import deeproad from "../public/assets/deeproad.png";
import assettag from "../public/assets/assettag.png";
import { Box, Card, Link, CardContent, Typography, Stack,Avatar } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
import banner1 from "../public/assets/Asset6_1.png";
import style from "../styles/Home.module.css";
// import Logo from "../public/assets/client.jpg"

const useStyles = makeStyles({
  customimg: {
    objectFit: "contain",
    position: "relative",
    height: "unset",
  },
  bannerContainer: {
    position: "relative",
    right: "2rem",
    height: "80rem",
    width: "60rem",
    bottom: "12rem",
  },
  bannerContainer1: {
    position: "relative",
    left: "20rem",
    bottom: "15rem",
  },
  bannerContainer2: {
    bottom: "8rem",
    left: "5rem",
    position: "relative",
  },
  card1: {
    position: "relative",
    cursor: "pointer",
    right: "8rem",
    margin: "auto",
    top: "6rem",
    borderColor: 'red'
  },
  card2: {
    left: "12rem",
    bottom: "16rem",
    position: "relative",
    border: "none",
    boxShadow: "none",
  },
  card3: {
    position: "relative",
    bottom: "10rem",
    right: "8rem",
    border: "none",
    boxShadow: "none",
  },
});
function Testimonials() {
  const classes = useStyles();
  const [goToSlide, setGoToSlide] = useState(0);
  const offsetRadius = 2;
  const showNavigation = false;
  // const config = config.gentle
  const autoPlay = true;
  const interval = 3;

  const slides = [
    {
      key: 1,
      content:
        <Card
          className={classes.card1}
          sx={{ width: "1000px", height: "600px" }}
        >
          <CardContent>
            <Avatar
              alt="Remy Sharp"
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCLcY8R5uG_R4vTKW1D7onTKjOMACYS7wGA&usqp=CAU'
              sx={{ width: 80, height: 80 }} />

            <Typography
              gutterBottom
              variant="h3"
              component="div"
              fontWeight="800"
              fontFamily="Open Sans "
              fontSize="4rem"
            >
              Luther Mark
            </Typography>

            {/* <Typography
              gutterBottom
              variant="h3"
              align="right"
              component="div"
              fontWeight="800"
              fontFamily="Open Sans "
              fontSize="4rem"
            >
              Jacobs
            </Typography> */}

            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Regional Manager
            </Typography>

            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Jacobs Construction Co.
            </Typography>
            <br />

            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta.
              Nulla laoreet orci nulla, in dictum ligula laoreet nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque vulputate adipiscing elit. Quisque vulputate
            </Typography>
            <br />

          </CardContent>
        </Card>
    },
    {
      key: 2,
      content: <img src="https://picsum.photos/800/802/?random" alt="2" />,
    },
    {
      key: 3,
      content: <img src="https://picsum.photos/600/803/?random" alt="3" />,
    },
    // {
    //   key: 14,
    //   content: <img src="https://picsum.photos/800/500/?random" alt="4" />,
    // },
    // {
    //   key: 15,
    //   content: <img src="https://picsum.photos/800/804/?random" alt="5" />,
    // },
    // {
    //   key: 16,
    //   content: <img src="https://picsum.photos/500/800/?random" alt="6" />,
    // },
    // {
    //   key: 17,
    //   content: <img src="https://picsum.photos/800/600/?random" alt="7" />,
    // },
    // {
    //   key: 18,
    //   content: <img src="https://picsum.photos/805/800/?random" alt="8" />,
    // },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  return (
    <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        //   animationConfig={config.gentle}
        autoPlay={autoPlay}
        interval={interval}
      />
    </div>
  );
}
export default Testimonials;

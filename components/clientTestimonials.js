import React, { Component, useState } from "react";
import Carousel from "react-spring-3d-carousel-2";
import useSWR from 'swr'
// import { config } from "react-spring";

// import dynamic from 'next/dynamic'

// const {Carousel} = dynamic(
//   () => import('react-spring-3d-carousel-2'),
//   { ssr: false }
// )

import Image from "next/image";
import deeproad from "../public/assets/deeproad.png";
import assettag from "../public/assets/assettag.png";
import {
  Box,
  Card,
  Link,
  CardContent,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
import banner1 from "../public/assets/Asset6_1.png";
import style from "../styles/Home.module.css";
// import Logo from "../public/assets/client.jpg"

const useStyles = makeStyles({
  circularsquare: { border: "solid #BF0000" },
  card1: {
    position: "relative",
    cursor: "pointer",

    margin: "auto",

    border: "solid #BF0000",
    boxShadow:
      "4px 0px 17px -7px rgba(0, 0, 0, 0.25), -4px 0px 18px -7px rgba(0, 0, 0, 0.25)",
    borderRadius: "15px",
  },
});
function Testimonials() {

  const classes = useStyles();
  const [goToSlide, setGoToSlide] = useState(0);

  const { data, error } = useSWR('/api/home/clients', (apiURL) => fetch(apiURL).then(res => res.json()))
  if (!data) return <div>loading...</div>;
  console.log(data, 'clients')
  const listOfTestimonials = [...data]
  const offsetRadius = 2;
  const showNavigation = false;
  // const config = config.gentle
  const autoPlay = true;
  const interval = 3;

  /* const slides = [
     {
       key: 1,
       content: (
         <Card
           className={classes.card1}
           sx={{ width: "1000px", height: "500px" }}
         >
           <CardContent>
             <Avatar
               className={classes.circularsquare}
               alt="Remy Sharp"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCLcY8R5uG_R4vTKW1D7onTKjOMACYS7wGA&usqp=CAU"
               sx={{ width: 80, height: 80 }}
             />
 
             <Typography
               gutterBottom
               variant="h3"
               component="div"
               fontWeight="800"
               fontFamily="Open Sans "
               fontSize="36px"
               style={{
                 position: "absolute",
                 bottom: "430px",
                 left: "120px",
                 fontFamily: "Inter",
               }}
             >
               Luther Mark
             </Typography>
 
             <Typography
               gutterBottom
               variant="h3"
               align="right"
               component="div"
               fontWeight="800"
               fontFamily="Open Sans "
               fontSize="64px"
               style={{
                 position: "relative",
                 right: "60px",
                 bottom: "70px",
               }}
             >
               Jacobs
             </Typography>
 
             <Typography
               variant="body1"
               color="text.primary"
               fontWeight="500"
               fontSize="30px"
               style={{
                 position: "absolute",
                 bottom: "410px",
                 left: "120px",
                 fontFamily: "Inter",
               }}
             >
               Regional Manager
             </Typography>
 
             <Typography
               variant="body1"
               color="text.primary"
               fontWeight="500"
               fontSize="30px"
               style={{
                 position: "absolute",
                 bottom: "380px",
                 fontFamily: "Inter",
                 left: "120px",
               }}
             >
               Jacobs Construction Co.
             </Typography>
             <br />
 
             <Typography
               variant="body1"
               color="text.primary"
               fontWeight="400"
               fontSize="40px"
               style={{
                 position: "absolute",
                 lineHeight: "50px",
                 top: "170px",
                 fontFamily: "Inter",
                 left: "120px",
                 height: "300px",
                 width: "700px",
               }}
             >
               Mauris eget varius sapien. Sed facilisis congue porta. Nulla
               laoreet orci nulla, in dictum ligula laoreet nec. Lorem ipsum
               dolor sit amet, consectetur adipiscing elit. Quisque vulputate
               adipiscing elit.
             </Typography>
             <br />
           </CardContent>
         </Card>
       ),
     },
 
   ].map((slide, index) => {
     return { ...slide, onClick: () => setGoToSlide(index) };
   }); 
   */

  const rslides = listOfTestimonials.map((e, i) => {
    const { clientName, clientImage, clientDesignation, clientCompany, clientDescription, clientCompanyLogo } = e;
    return (
      {
        key: i,
        content:
          <Card
            className={classes.card1}
            key={i}
            sx={{ width: "1000px", height: "500px" }}
          >
            <CardContent>
              <Avatar
                className={classes.circularsquare}
                alt={clientName}
                src={clientImage}
                sx={{ width: 80, height: 80 }}
              />

              <Typography
                gutterBottom
                variant="h3"
                component="div"
                fontWeight="800"
                fontFamily="Open Sans "
                fontSize="36px"
                style={{
                  position: "absolute",
                  bottom: "430px",
                  left: "120px",
                  fontFamily: "Inter",
                }}
              >
                {clientName}
              </Typography>

              <Typography
                gutterBottom
                variant="h3"
                align="right"
                component="div"
                fontWeight="800"
                fontFamily="Open Sans "
                fontSize="64px"
                style={{
                  position: "relative",
                  right: "60px",
                  bottom: "70px",
                }}
              >
                {clientCompanyLogo}
              </Typography>

              <Typography
                variant="body1"
                color="text.primary"
                fontWeight="500"
                fontSize="30px"
                style={{
                  position: "absolute",
                  bottom: "410px",
                  left: "120px",
                  fontFamily: "Inter",
                }}
              >
                {clientDesignation}
              </Typography>

              <Typography
                variant="body1"
                color="text.primary"
                fontWeight="500"
                fontSize="30px"
                style={{
                  position: "absolute",
                  bottom: "380px",
                  fontFamily: "Inter",
                  left: "120px",
                }}
              >
                {clientCompany}
              </Typography>
              <br />

              <Typography
                variant="body1"
                color="text.primary"
                fontWeight="400"
                fontSize="40px"
                style={{
                  position: "absolute",
                  lineHeight: "50px",
                  top: "170px",
                  fontFamily: "Inter",
                  left: "120px",
                  height: "300px",
                  width: "700px",
                }}
              >
                {clientDescription}
              </Typography>
              <br />
            </CardContent>
          </Card>
      }
    );
  })
  const slides = rslides.map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });
  console.log(slides)
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

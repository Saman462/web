import React from "react";
import Image from "next/image";
import deeproad from "../public/assets/deeproad.png";
import assettag from "../public/assets/assettag.png";
import { Box, Card, Link, CardContent, Typography, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
import banner1 from "../public/assets/Asset6_1.png";
import style from "../styles/Home.module.css";
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
    right: "8rem",
    margin: "auto",
    top: "6rem",
    border: "none",
    boxShadow: "none",
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
function banners() {
  const classes = useStyles();
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Container className={classes.bannerContainer}>
          <Image className={classes.customimg} src={banner1} layout="fill" />
        </Container>
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "18px",
            height: "170px",
            right: "8rem",
            top: "7.3rem",
            position: "relative",
          }}
        ></Box>
        <Card
          className={classes.card1}
          sx={{ width: "1000px", height: "800px" }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              fontWeight="800"
              fontFamily="Open Sans "
              fontSize="3 rem"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vulputate adipiscing elit. Quisque vulputate
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br />
            <br />
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br></br>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br />
            <br />
            <Typography color="text.primary" fontWeight="500" fontSize="2.5rem">
              Lorem ispum vestibulum.
              <Link href="#" fontWeight="600" fontSize="2.5rem" color="#d32f2f">
                Lorem ipsum vel nulla
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            backgroundColor: "#D70040",
            width: "18px",
            height: "170px",
            bottom: "15rem",
            left: "12rem",
            position: "relative",
          }}
        ></Box>
        <Card
          className={classes.card2}
          sx={{ width: "1000px", height: "800px" }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              fontWeight="800"
              fontFamily="Open Sans "
              fontSize="3rem"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vulputateadipiscing elit. Quisque vulputate
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br />
            <br />
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br></br>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br />
            <br />
            <Typography color="text.primary" fontWeight="500" fontSize="2.5rem">
              Lorem ispum vestibulum.
              <Link href="#" fontWeight="600" fontSize="2.5rem" color="#d32f2f">
                Lorem ipsum vel nulla
              </Link>
            </Typography>
          </CardContent>
        </Card>
        <Container className={classes.bannerContainer1}>
          <Image
            width=" 900px"
            height="700px"
            objectFit="fill"
            src={assettag}
          />
        </Container>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Container className={classes.bannerContainer2}>
          <Image
            width=" 900px"
            height="700px"
            objectFit="cover"
            src={deeproad}
          />
        </Container>
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "18px",
            height: "170px",
            right: "7rem",
            bottom: "8.5rem",
            position: "relative",
          }}
        ></Box>
        <Card
          className={classes.card3}
          sx={{ width: "1000px", height: "800px" }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              fontWeight="800"
              fontFamily="Open Sans "
              fontSize="3 rem"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              Lorem ipsum dolor sit amet, consectetur
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br />
            <br />
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br></br>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br />
            <br />
            <Typography color="text.primary" fontWeight="500" fontSize="2.5rem">
              Lorem ispum vestibulum.
              <Link href="#" fontWeight="600" fontSize="2.5rem" color="#d32f2f">
                Lorem ipsum vel nulla
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
}

export default banners;

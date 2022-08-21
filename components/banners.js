import React from "react";
import Image from "next/image";
import deeproad from "../public/assets/deeproad.png";
import assettag from "../public/assets/assettag.png";
import { Box, Card, Link, CardContent, Typography, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
import banner1 from "../public/assets/Asset6_1.png";
import useSWR from 'swr'
import style from "../styles/Home.module.css";
const useStyles = makeStyles({
  bannerContainer: {
    position: "relative",
    height: "1280px",
    bottom: "40px",
  },
  bannerContainer1: {
    position: "relative",
    left: "320px",
    bottom: "240px",
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
    bottom: "160px",
    right: "128px",
    border: "none",
    boxShadow: "none",
  },
});
function banners() {
  const classes = useStyles();
  const { data, error } = useSWR('/api/home/products', (apiURL) => fetch(apiURL).then(res => res.json()))
  console.log(data)
  if (!data) return <div>loading...</div>;

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
            right: "128px",
            top: "116.8px",
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
              fontFamily="Lao Sans Pro"
              fontSize="48px"
            >
              {data.name}
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="40px"
              fontFamily="Lao Sans Pro"
              lineHeight="40px"
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
              fontSize="40px"
              fontFamily="Lao Sans Pro"
              lineHeight="40px"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br></br>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="40px"
              fontFamily="Lao Sans Pro"
              lineHeight="40px"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br />
            <br />
            <Typography
              color="text.primary"
              fontWeight="500"
              fontSize="40px"
              fontFamily="Lao Sans Pro"
              lineHeight="40px"
            >
              Lorem ispum vestibulum.
              <Link
                href="#"
                fontWeight="600"
                fontSize="40px"
                color="#d32f2f"
                fontFamily="Lao Sans Pro"
                lineHeight="40px"
              >
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
            bottom: "240px",
            left: "192px",
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
              fontFamily="Lao Sans Pro"
              fontSize="48px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vulputateadipiscing elit. Quisque vulputate
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="40px"
              fontFamily="Lao Sans Pro"
              lineHeight="40px"
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
              fontFamily="Lao Sans Pro"
              fontSize="40px"
              lineHeight="40px"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br></br>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="40px"
              fontFamily="Lao Sans Pro"
              lineHeight="40px"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br />
            <br />
            <Typography
              color="text.primary"
              fontWeight="500"
              fontSize="40px"
              fontFamily="Lao Sans Pro"
              lineHeight="40px"
            >
              Lorem ispum vestibulum.
              <Link
                href="#"
                fontWeight="600"
                fontSize="40px"
                fontFamily="Lao Sans Pro"
                color="#d32f2f"
                lineHeight="40px"
              >
                Lorem ipsum vel nulla
              </Link>
            </Typography>
          </CardContent>
        </Card>
        <Container className={classes.bannerContainer1}>
          <Image
            width=" 850px"
            height="650px"
            objectFit="fill"
            src={assettag}
          />
        </Container>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Container className={classes.bannerContainer2}>
          <Image
            width=" 850px"
            height="650px"
            objectFit="cover"
            src={deeproad}
          />
        </Container>
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "18px",
            height: "170px",
            right: "112px",
            bottom: "136px",
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
              fontFamily="Lao Sans Pro"
              fontSize="48px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing Quisque Lorem
              ipsum dolor sit amet, consectetur
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="40px"
              fontFamily="Lao Sans Pro"
              lineHeight="40px"
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
              fontSize="40px"
              fontFamily="Lao Sans Pro"
              lineHeight="40px"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br></br>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="40px"
              fontFamily="Lao Sans Pro"
              lineHeight="40px"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br />
            <br />
            <Typography
              color="text.primary"
              fontWeight="500"
              fontSize="40px"
              fontFamily="Lao Sans Pro"
              lineHeight="40px"
            >
              Lorem ispum vestibulum.
              <Link
                href="#"
                fontWeight="600"
                fontSize="40px"
                color="#d32f2f"
                fontFamily="Lao Sans Pro"
                lineHeight="40px"
              >
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

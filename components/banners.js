import React from "react";
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
} from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
import banner1 from "../public/assets/Asset6_1.png";

const useStyles = makeStyles({
  bannerContainer: {
    position: "relative",
    right: "1000px",
  },
  bannerContainer1: {
    position: "relative",
    left: "1750px",
    top: "170px",
  },
  bannerContainer2: {
    top: "470px",
    right: "890px",
    position: "relative",
  },
  card1: {
    position: "relative",
    right: "5%",
    top: "210px",
  },
  card2: {
    left: "4.7%",
    top: "159px",
    position: "relative",
  },
  card3: {
    position: "relative",
    right: "5%",
    top: "369px",
  },
  sbanner: {
    position: "relative",
    top: "610px",
    right: "800px",
    height: "1000px",
    width: "1000px",
  },
  sbanner1: {
    position: "relative",
    top: "610px",
    right: "1900px",
    height: "1000px",
    width: "1000px",
  },
  sbanner2: {
    position: "relative",
    top: "610px",
    right: "2000px",
    height: "1000px",
    width: "1000px",
  },
});
function banners() {
    const classes = useStyles();
    return (
        <>
        <Stack direction="row" spacing={2}>
        <Container className={classes.bannerContainer}>
          <Image objectFit="cover" src={banner1} />
        </Container>
        <Box
          sx={{
            backgroundColor: "red",
            width: "30px",
            height: "340px",
            right: "240px",
            top: "210px",
            position: "relative",
          }}
        ></Box>
        <Card
          className={classes.card1}
          sx={{ width: "1500px", height: "1000px" }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              fontWeight="800"
              fontFamily="Open Sans "
              fontSize="5rem"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vulputate adipiscing elit. Quisque vulputate
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="3rem"
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
              fontSize="3rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br></br>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="3rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br />
            <br />
            <Typography color="text.primary" fontWeight="500" fontSize="3rem">
              Lorem ispum vestibulum.
              <Link href="#" fontWeight="600" fontSize="3rem" color="#d32f2f">
                Lorem ipsum vel nulla
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            backgroundColor: "red",
            width: "30px",
            height: "340px",
            top: "160px",
            left: "250px",
            position: "relative",
          }}
        ></Box>
        <Card
          className={classes.card2}
          sx={{ width: "1500px", height: "1000px" }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              fontWeight="800"
              fontFamily="Open Sans "
              fontSize="5rem"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vulputateadipiscing elit. Quisque vulputate
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="3rem"
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
              fontSize="3rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br></br>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="3rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br />
            <br />
            <Typography color="text.primary" fontWeight="500" fontSize="3rem">
              Lorem ispum vestibulum.
              <Link href="#" fontWeight="600" fontSize="3rem" color="#d32f2f">
                Lorem ipsum vel nulla
              </Link>
            </Typography>
          </CardContent>
        </Card>
        <Container className={classes.bannerContainer1}>
          <Image
            width=" 6000px"
            height="5000px"
            objectFit="fill"
            src={assettag}
          />
        </Container>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Container className={classes.bannerContainer2}>
          <Image objectFit="cover" src={deeproad} />
        </Container>
        <Box
          sx={{
            backgroundColor: "red",
            width: "30px",
            height: "340px",
            top: "370px",
            right: "240px",
            position: "relative",
          }}
        ></Box>
        <Card
          className={classes.card3}
          sx={{ width: "1500px", height: "1000px" }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              fontWeight="800"
              fontFamily="Open Sans "
              fontSize="5rem"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              Lorem ipsum dolor sit amet, consectetur
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="3rem"
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
              fontSize="3rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br></br>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="3rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla, in dictum ligula laoreet nec.
            </Typography>
            <br />
            <br />
            <Typography color="text.primary" fontWeight="500" fontSize="3rem">
              Lorem ispum vestibulum.
              <Link href="#" fontWeight="600" fontSize="3rem" color="#d32f2f">
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
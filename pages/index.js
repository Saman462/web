import Head from "next/head";
import Image from "next/image";
import deeproad from "../public/assets/deeproad.png";
import assettag from "../public/assets/assettag.png";
import {
  Box,
  Paper,
  Button,
  Card,
  Link,
  CardContent,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
// import style from "../styles/style.css";
import Logo from "../public/assets/Asset 1.png";
import sky from "../public/assets/BS.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import road from "../public/assets/Road.png";
import React from "react";
import first from "../public/assets/fm.png";
import middle from "../public/assets/MM.png";
import last from "../public/assets/LM.png";
import sign from "../public/assets/roadsign.png";
import clouds from "../public/assets/Clouds.png";
import style from "../styles/Home.module.css";
import banner1 from "../public/assets/Asset6_1.png";
import { margin } from "@mui/system";

const useStyles = makeStyles({
  // logo: {
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   width: "43px",
  //   height: "34px",
  //   color: "white",
  //   marginLeft: "5px",
  // },

  logoContainer: {
    width: 230,
    margin: "auto",
  },
  logoMedia: {
    height: "100%",
    width: "100%",
  },

  bannerContainer: {
    margin: "5%",
    position: "absolute",
    top: "38%",
  },
  bannerContainer1: {
    position: "absolute",
    border: "black solid 2px",
    left: "68%",
    top: "115%",
  },
  bannerContainer2: {
    left: "5%",
    position: "absolute",
    top: "172%",
  },

  card1: {
    position: "absolute",
    left: "68%",
    top: "58%",
  },
  card2: {
    left: "5%",
    position: "absolute",
    top: "115%",
  },
  card3: {
    position: "absolute",
    top: "172%",
    left: "69%",
  },
  sbanner: {
    position: "absolute",
    top: "220%",
    left: "5%",
    height: "20vh",
    width: "20vw",
  },
  sbanner1: {
    position: "absolute",
    top: "220%",
    left: "26%",
    height: "20vh",
    width: "20vw",
  },
  sbanner2: {
    position: "absolute",
    left: "47%",
    top: "220%",
    height: "20vh",
    width: "20vw",
  },
});

const styles = {
  appBar: {
    backgroundColor: "#FCFCFC",
  },
  centerLinks: {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    marginLeft: "50px",
  },
  rightLinks: {
    color: "#000000",
    textDecoration: "none",
    cursor: "pointer",
    marginRight: "30px",
    fontWeight: "600",
    fontSize: "15px",
    lineHeight: "22px",
  },
};

export default function Home() {
  const classes = useStyles();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <>
      <AppBar position="static" style={styles.appBar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                cursor: "pointer",
                color: "white",
                textDecoration: "none",
              }}
            >
              <Container className={classes.logoContainer}>
                <Image
                  src={Logo}
                  className={classes.logoMedia}
                  style={{ cursor: "pointer" }}
                />
              </Container>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer("left", true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, marginRight: '30px' }}
            >
              <img src={Logo} className={classes.logo} /> 
                          </Typography> */}

            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                marginLeft: "400px",
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                style={styles.rightLinks}
              >
                HOME
              </Typography>

              <Typography
                variant="body1"
                color="initial"
                style={styles.rightLinks}
              >
                BLOG
              </Typography>

              <Typography
                variant="body1"
                color="initial"
                style={styles.rightLinks}
              >
                PRODUCTS
              </Typography>

              <Typography
                variant="body1"
                color="initial"
                style={styles.rightLinks}
              >
                ABOUT
              </Typography>

              <Typography
                variant="body1"
                color="initial"
                style={styles.rightLinks}
              >
                CONTACT
              </Typography>
              {/* 
              <Box style={{backgroundColor: '#D42626',height: '30px'}}>
                <Button>
                CTA Button
                </Button>
              </Box> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* parallax effect */}

      <div className={style.container}>
        <div>
          <div className={style.sky}>
            <Image src={sky} alt="sky" />
          </div>
          <div className={style.clouds}>
            <Image src={clouds} alt="clouds" />
          </div>
        </div>
        <div className={style.road}>
          <Image src={road} alt="road" />
        </div>
        <div className={style.sign}>
          <Image src={sign} alt="sign" />
        </div>
        <Parallax pages={4} className={style.Parrallax}>
          <ParallaxLayer offset={2.5} speed={0} sticky={{ start: 3, end: 3 }}>
            <div className={style.last}>
              <Image src={last} alt="last mountain" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.5}
            speed={0.05}
            sticky={{ start: 2, end: 3 }}
          >
            <div className={style.middle}>
              <Image src={middle} alt="middle mountain" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.05} sticky={{ start: 1, end: 3 }}>
            <div className={style.first}>
              <Image src={first} alt="first mountain" />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>

      {/* banner portion */}

      <Stack direction="row" spacing={2}>
        <Container className={classes.bannerContainer}>
          <Image objectFit="cover" src={banner1} />
        </Container>
        <Box
          sx={{
            backgroundColor: "red",
            width: "0.5%",
            height: "14%",
            top: "58%",
            position: "absolute",
            left: "67.5%",
          }}
        ></Box>
        <Card className={classes.card1} sx={{ width: "30vw", height: "18vw" }}>
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
            width: "0.5%",
            height: "14%",
            top: "115%",
            position: "absolute",
            left: "4.8%",
          }}
        ></Box>
        <Card className={classes.card2} sx={{ width: "30vw", height: "18vw" }}>
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
          <Image objectFit="cover" src={assettag} />
        </Container>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Container className={classes.bannerContainer2}>
          <Image objectFit="cover" src={deeproad} />
        </Container>
        <Box
          sx={{
            backgroundColor: "red",
            width: "0.5%",
            height: "14%",
            top: "172%",
            position: "absolute",
            left: "68.42%",
          }}
        ></Box>
        <Card className={classes.card3} sx={{ width: "30vw", height: "18vw" }}>
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
              vulputate
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

      {/* logos sections */}

      <Stack direction="row" spacing={2}>
        <Container className={classes.sbanner}>
          <Image objectFit="cover" src={assettag} />
        </Container>
        <Container className={classes.sbanner1}>
          <Image objectFit="cover" src={assettag} />
        </Container>
        <Container className={classes.sbanner2}>
          <Image objectFit="cover" src={assettag} />
        </Container>
        <Box
          sx={{
            position: "absolute",
            left: "69%",
            Right: "5%",
            height: "100px",
            width: "30vw",
            top: "224%",
          }}
        >
          <Typography
            variant="h3"
            color="text.primary"
            fontWeight="650"
            fontSize="4rem"
          >
            Lörem ipsum mikrosel nyranade. Trigt nism i säns. Krovevåment sos
            inte homost.Krovevåment sos inte homost.
          </Typography>
        </Box>
      </Stack>
    </>
  );
}

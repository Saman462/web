import Head from "next/head";
import Image from "next/image";
import { Box, Paper, Button, IconButton, Typography } from "@mui/material";
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
import ground from "../public/assets/Ground.png";
import clouds from "../public/assets/Clouds.png";

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
      <div>
        <Parallax pages={4}>
          <ParallaxLayer offset={0} speed={0} sticky={{ start: 0, end: 3 }}>
            <div>
              <div style={{ zIndex: "1200" }}>
                <Image
                  src={sky}
                  alt="sky"
                  width="1100px"
                  height="1100px"
                  position="absolute"
                />
              </div>
              <div style={{ zIndex: "1300", top: 60, position: "absolute" }}>
                <Image
                  src={clouds}
                  alt="clouds"
                  width="1200px"
                  height="200px"
                />
              </div>
            </div>
            <div style={{ position: "absolute", top: "550px", zIndex: "1300" }}>
              <Image src={ground} alt="ground" width="1100px" height="481px" />
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: 0,
                  zIndex: 13100,
                }}
              >
                <Image src={road} alt="road" width="6990px" height="3050px" />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: 50,
                  zIndex: 132000,
                }}
              >
                <Image src={sign} alt="sign" width="240px" height="210px" />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={0} sticky={{ start: 3, end: 3 }}>
            <div style={{ position: "absolute", top: "280px", zIndex: 1000 }}>
              <Image
                src={last}
                alt="last mountain"
                width="1100px"
                height="180px"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.5}
            speed={0.05}
            sticky={{ start: 2, end: 3 }}
          >
            <div style={{ position: "absolute", top: "200px", zIndex: 1000 }}>
              <Image
                src={middle}
                alt="middle mountain"
                width="1100px"
                height="450px"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.05} sticky={{ start: 1, end: 3 }}>
            <div style={{ position: "absolute", top: "100px", zIndex: 1000 }}>
              <Image
                src={first}
                alt="first mountain"
                width="1100px"
                height="450px"
              />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

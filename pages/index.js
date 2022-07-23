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
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: { sky },
        }}
      >
        <Image src={road} id="road" />
        <Image src={ground} id="ground" />
        {/* <image src={sky} style={{ width: "200px", height: "200px" }} /> */}
        <Parallax pages={3}>
          <ParallaxLayer
            offset={3}
            speed={0.05}
            sticky={{ start: 2.8, end: 3 }}
          >
            <Image src={last} id="last" />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.05} sticky={{ start: 2, end: 3 }}>
            <Image src={middle} id="middle" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.05}
            sticky={{ start: 1.5, end: 3 }}
          >
            <Image src={first} id="first" />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}

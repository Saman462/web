import Image from "next/image";
import { Box, IconButton, Typography, Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
import Logo from "../public/assets/Asset 1.png";
import React from "react";

const useStyles = makeStyles({
  logoContainer: {
    width: 330,
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
  rightLinks: {
    color: "#000000",
    textDecoration: "none",
    cursor: "pointer",
    marginRight: "30px",
    fontWeight: "600",
    fontSize: "2vmin",
    lineHeight: "22px",
  },
};

const Header = () => {
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
  console.log("hello world");
  return (
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
            <Typography variant="body1" color="initial">
              <Link href="#" style={styles.rightLinks}>
                HOME
              </Link>
            </Typography>

            <Typography variant="body1" color="initial">
              <Link href="#" style={styles.rightLinks}>
                BLOG
              </Link>
            </Typography>

            <Typography variant="body1" color="initial">
              <Link href="#" style={styles.rightLinks}>
                PRODUCTS
              </Link>
            </Typography>

            <Typography variant="body1" color="initial">
              <Link href="#" style={styles.rightLinks}>
                ABOUT
              </Link>
            </Typography>

            <Typography variant="body1" color="initial">
              <Link href="#" style={styles.rightLinks}>
                CONTACT
              </Link>
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
  );
};
export default Header;

import Head from 'next/head'
import Image from 'next/image'
import { Box, Paper, Button, IconButton, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core';
import Logo from '../../strada-web/public/assets/Asset 1.png'
const useStyles = makeStyles({
  logo: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "43px",
    height: "38px",
    color: "white",
    marginLeft: "5px",
  },
})

const styles = {
  appBar: {
    backgroundColor: '#FCFCFC'
  },
  centerLinks: {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
    marginLeft: '50px'
  },
  rightLinks: {
    color: '#000000',
    textDecoration: 'none',
    cursor: 'pointer',
    marginRight: '30px',
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '22px'
  }
}

export default function Home() {
  const classes = useStyles()
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
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, cursor: 'pointer', color: 'white', textDecoration: 'none' }}
            >
              <Image src={Logo} className={classes.logo} style={{ cursor: 'pointer' }} />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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

            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, marginLeft: '400px' }}>
              <Typography variant="body1" color="initial" style={styles.rightLinks}>
                HOME
              </Typography>

              <Typography variant="body1" color="initial" style={styles.rightLinks}>
                BLOG
              </Typography>

              <Typography variant="body1" color="initial" style={styles.rightLinks}>
                PRODUCTS
              </Typography>

              <Typography variant="body1" color="initial" style={styles.rightLinks}>
                ABOUT
              </Typography>

              <Typography variant="body1" color="initial" style={styles.rightLinks}>
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
    </>
  )
}

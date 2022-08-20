import React from "react";
import {
  Box,
  Card,
  Link,
  CardContent,
  Grid,
  Typography,
  Stack,
  styled,
  Paper,
} from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
import Logo from "../public/assets/Asset 1.png";
import Image from "next/image";
import assettag from "../public/assets/assettag.png";
const useStyles = makeStyles({
  bannerContainer: {
    position: "relative",
    bottom: "890px",
    left: "95px",
    padding: "30px",
  },
  bannerContainer1: {
    position: "relative",
    bottom: "890px",
    right: "100px",
  },
  logoContainer: {
    width: "650px",
    margin: "auto",
    position: "relative",
    right: "105px",
    bottom: "90px",
    padding: "30px",
  },
  logoMedia: {
    height: "100%",
    width: "100%",
  },
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  border: "none",
  boxShadow: "none",
}));
function footer() {
  const classes = useStyles();
  return (
    <Stack direction="row" spacing={2}>
      <Container className={classes.bannerContainer}>
        <Container className={classes.logoContainer}>
          <Image
            src={Logo}
            className={classes.logoMedia}
            style={{ cursor: "pointer" }}
          />
        </Container>

        <Typography
          gutterBottom
          variant="h3"
          component="div"
          fontWeight="800"
          fontFamily="Open Sans "
          fontSize="68px"
          color=" #555555
           "
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            textDecorationColor: " #BF0000",
          }}
        >
          HOME
        </Typography>
        <br />
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          fontWeight="800"
          fontFamily="Open Sans "
          fontSize="68px"
          color=" #555555
          "
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            textDecorationColor: " #BF0000",
          }}
        >
          BLOG
        </Typography>
        <br />
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          fontWeight="800"
          fontFamily="Open Sans "
          fontSize="68px"
          color=" #555555
          "
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            textDecorationColor: " #BF0000",
          }}
        >
          PRODUCTS
        </Typography>
        <br />
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          fontWeight="800"
          fontFamily="Open Sans "
          fontSize="68px"
          color=" #555555
          "
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            textDecorationColor: " #BF0000",
          }}
        >
          ABOUT
        </Typography>
        <br />
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          fontWeight="800"
          fontFamily="Open Sans "
          fontSize="68px"
          color=" #555555
          "
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            textDecorationColor: " #BF0000",
          }}
        >
          CONTACT
        </Typography>
      </Container>

      <Container className={classes.bannerContainer}>
        <Typography
          variant="h3"
          color="text.primary"
          fontWeight="500"
          fontSize="35px"
          style={{
            fontFamily: "Lato",

            lineHeight: "45px",
            color: " #000000",
            position: "absolute",
            width: "807px",
            height: "42px",
            left: "2px",
          }}
        >
          Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet
          orci nulla, in dictum ligula laoreet nec.
        </Typography>
        <br />
        <br />
        <br />
        <br />

        <Typography
          variant="body1"
          color="text.primary"
          fontWeight="600"
          fontSize="35px"
          style={{
            position: "absolute",
            bottom: "10px",
            width: "707px",
            height: "42px",

            fontFamily: "Lato",

            lineHeight: "45px",
            color: " #000000",
          }}
        >
          Mauris eget varius sapien. Sed facilisis congue porta. Nulla laoreet
          orci nulla, in dictum ligula laoreet nec.
        </Typography>
      </Container>
      <Container className={classes.bannerContainer}>
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "20px",
            height: "100px",
            position: "relative",
            bottom: "60px",
            left: "160px",
          }}
        />
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "20px",
            height: "250px",
            position: "relative",
            top: "60px",
            left: "160px",
          }}
        />
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "20px",
            height: "250px",
            position: "relative",
            top: "200px",
            left: "160px",
          }}
        />
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "20px",
            height: "150px",
            position: "relative",
            top: "340px",
            left: "160px",
          }}
        />
      </Container>
      <Container className={classes.bannerContainer1}>
        <Typography
          variant="body1"
          color="text.primary"
          fontWeight="700"
          fontSize="35px"
          style={{ position: "absolute", top: "100px", left: "60px" }}
        >
          Leading the industry with our
          <br />
          <Link
            href="#"
            fontWeight="600"
            fontSize="35px"
            color="#d32f2f"
            style={{ position: "absolute", left: "150px" }}
          >
            Top Products
          </Link>
        </Typography>
        <Grid
          container
          rowSpacing={11}
          columnSpacing={{ xs: 1, sm: 2, md: 9 }}
          style={{ position: "absolute", top: "300px" }}
        >
          <Grid item xs={6}>
            <Item>
              <Image src={assettag} />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Image src={assettag} />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Image src={assettag} />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Image src={assettag} />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default footer;

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
import style from "../styles/Home.module.css";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
import Logo from "../public/assets/Asset 1.png";
import Image from "next/image";
import assettag from "../public/assets/assettag.png";
import useSWR from "swr";

const useStyles = makeStyles({
  bannerContainer: {
    position: "relative",
    padding: "30px",
    marginLeft: "80px",
    marginTop: "80px",
  },
  bannerContainer2: {
    border: "black solid 4px",
    width: "40%",
    height: "70vh",
  },

  logoContainer: {
    width: "550px",
    position: "relative",
    marginBottom: "80px",
    right: "60px",
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
  const { data, error } = useSWR("/api/home/footerSection", (apiURL) =>
    fetch(apiURL).then((res) => res.json())
  );
  if (!data) return <div>loading...</div>;
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
          fontSize="55px"
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
          fontSize="55px"
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
          fontSize="55px"
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
          fontSize="55px"
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
          fontSize="55px"
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
          fontSize="3vmin"
          style={{
            fontFamily: "Lato",
            position: "relative",
            marginTop: "100px",
            lineHeight: "45px",
            color: " #000000",

            width: "150%",
            height: "20vh",
            left: "2px",
          }}
        >
          {data.footerText1}
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
            position: "relative",
            top: "330px",
            width: "150%",
            height: "20vh",

            fontFamily: "Lato",

            lineHeight: "4vmin",
            color: " #000000",
          }}
        >
          {data.footerText2}
        </Typography>
      </Container>
      <Container className={classes.bannerContainer}>
        <Box
          style={{
            marginLeft: "205px ",
            marginTop: "70px",
          }}
          sx={{
            backgroundColor: "#C41E3A",
            width: "3%",
            height: "8vh",
            position: "relative",
          }}
        />
        <Box
          style={{
            marginLeft: "205px ",
            marginTop: "70px",
          }}
          sx={{
            backgroundColor: "#C41E3A",
            width: "3%",
            height: "18vh",
            position: "relative",
          }}
        />
        <Box
          style={{
            marginLeft: "205px ",
            marginTop: "70px",
          }}
          sx={{
            backgroundColor: "#C41E3A",
            width: "3%",
            height: "18vh",
            position: "relative",
          }}
        />
        <Box
          style={{
            marginLeft: "205px ",
            marginTop: "70px",
          }}
          sx={{
            backgroundColor: "#C41E3A",
            width: "3%",
            height: "8vh",
            position: "relative",
          }}
        />
      </Container>
      <Container className={style.bannerContainer1}>
        <Typography
          variant="body1"
          color="text.primary"
          fontWeight="700"
          fontSize="35px"
          style={{ position: "absolute", top: "100px", left: "160px" }}
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

        <Container className={style.container1}>
          {data.footerLogos.map((eachData) => (
            <Image src={eachData.footerLogo} width="250px" height="250px" />
          ))}
        </Container>
      </Container>
    </Stack>
  );
}

export default footer;

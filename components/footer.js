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
import { WrapText } from "@material-ui/icons";

const useStyles = makeStyles({
  bannerContainer: {
    // border: "solid black 4px",
    position: "relative",
    marginLeft: "40px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    width: "780px",
  },
  bannerContainer1: {
    // border: "solid black 4px",
    width: "30px",
    // position: "relative",
    // right: "120px",
  },

  logoContainer: {
    width: "550px",
    position: "relative",
    marginBottom: "80px",
    right: "160px",
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
function Footer() {
  const classes = useStyles();
  const { data, error } = useSWR("/api/home/footerSection", (apiURL) =>
    fetch(apiURL).then((res) => res.json())
  );
  if (!data) return <div>loading...</div>;
  return (
    <div
      style={{
        // border: "solid black 4px",
        display: "flex",
        flexDirection: " row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
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
            fontSize="4.5vmin"
            style={{
              cursor: "pointer",
            }}
          >
            <Link
              href="#"
              color="#555555
          "
              style={{
                textDecoration: "underline",
                textDecorationColor: " #BF0000",
              }}
            >
              HOME
            </Link>
          </Typography>
          <br />
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            fontWeight="800"
            fontFamily="Open Sans "
            fontSize="4.5vmin"
            style={{
              cursor: "pointer",
            }}
          >
            <Link
              href="#"
              color="#555555
          "
              style={{
                textDecoration: "underline",
                textDecorationColor: " #BF0000",
              }}
            >
              BLOG
            </Link>
          </Typography>
          <br />
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            fontWeight="800"
            fontFamily="Open Sans "
            fontSize="4.5vmin"
            style={{
              cursor: "pointer",
            }}
          >
            <Link
              href="#"
              color="#555555
          "
              style={{
                textDecoration: "underline",
                textDecorationColor: " #BF0000",
              }}
            >
              PRODUCTS
            </Link>
          </Typography>
          <br />
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            fontWeight="800"
            fontFamily="Open Sans "
            fontSize="4.5vmin"
            color=" #555555
          "
            style={{
              cursor: "pointer",
            }}
          >
            <Link
              href="#"
              color="#555555
          "
              style={{
                textDecoration: "underline",
                textDecorationColor: " #BF0000",
              }}
            >
              ABOUT
            </Link>
          </Typography>
          <br />
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            fontWeight="800"
            fontFamily="Open Sans "
            fontSize="4.5vmin"
            style={{
              cursor: "pointer",
            }}
          >
            <Link
              href="#"
              color="#555555
          "
              style={{
                textDecoration: "underline",
                textDecorationColor: " #BF0000",
              }}
            >
              CONTACT
            </Link>
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
              width: "700px",
            }}
          >
            {data.footerText1}
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            fontWeight="600"
            fontSize="3.2vmin"
            style={{
              position: "relative",
              top: "500px",
              fontFamily: "Lato",

              lineHeight: "3vmin",
              color: " #000000",
            }}
          >
            {data.footerText2}
          </Typography>
        </Container>
        <Container className={classes.bannerContainer1}>
          <Box
            sx={{
              backgroundColor: "#C41E3A",
              width: "13px",
              height: "8vh",
              position: "relative",
            }}
          />
          <Box
            style={{
              marginTop: "80px",
            }}
            sx={{
              backgroundColor: "#C41E3A",
              width: "13px",
              height: "18vh",
              position: "relative",
            }}
          />
          <Box
            style={{
              marginTop: "80px",
            }}
            sx={{
              backgroundColor: "#C41E3A",
              width: "13px",
              height: "18vh",
              position: "relative",
            }}
          />
          <Box
            style={{
              marginTop: "70px",
            }}
            sx={{
              backgroundColor: "#C41E3A",
              width: "13px",
              height: "8vh",
              position: "relative",
            }}
          />
        </Container>
        <Container className={classes.bannerContainer}>
          <br />
          <br />
          <br />
          <br />

          <Typography
            variant="body1"
            color="text.primary"
            fontWeight="700"
            fontSize="35px"
            align="center"
          >
            Leading the industry with our
            <br />
            <Link href="#" fontWeight="600" fontSize="35px" color="#d32f2f">
              Top Products
            </Link>
          </Typography>
          <Container className={style.container1}>
            {data.footerLogos.map((eachData) => (
              <Image src={eachData.footerLogo} key={eachData.id} width="250px" height="250px" />
            ))}
          </Container>
        </Container>
      </Stack>
    </div>
  );
}

export default Footer;

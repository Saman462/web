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
  if (!data) return <div>loading...</div>;

  return (
    <>
      {data.map((data) =>
        <Stack direction="row" spacing={2}>
          <Container className={classes.bannerContainer}>
            <Image className={classes.customimg} src={data.productImage} layout="fill" />
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
                {data.productName}
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
                {data.productDescription}
              </Typography>
              <br />
              <br />
              <Link
                href="#"
                fontWeight="600"
                fontSize="40px"
                color="#d32f2f"
                fontFamily="Lao Sans Pro"
                lineHeight="40px"
              >
                {data.productLink}
              </Link>
            </CardContent>
          </Card>
        </Stack>
      )}
    </>
  );
}

export default banners;

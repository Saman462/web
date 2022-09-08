import React from "react";
import Image from "next/image";
import deeproad from "../public/assets/deeproad.png";
import assettag from "../public/assets/assettag.png";
import { Box, Card, Link, CardContent, Typography, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
import banner1 from "../public/assets/Asset6_1.png";
import useSWR from "swr";
import style from "../styles/Home.module.css";
const useStyles = makeStyles({
  bannerContainer: {
    position: "relative",

    margin: "100px 150px",
    padding: "20px",
    width: "40%",
    height: "60vh",
    // border: "solid black 4px",
  },

  card1: {
    width: "40%",
    padding: "90px",
    margin: "90px 120px",
    border: "none",
    boxShadow: "none",
  },
});
function banners() {
  const classes = useStyles();
  const { data, error } = useSWR("/api/home/products", (apiURL) =>
    fetch(apiURL).then((res) => res.json())
  );
  if (!data) return <div>loading...</div>;

  return (
    <>
      {data.map((data, index) => (
        <Stack
          direction="row"
          spacing={2}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Container className={classes.bannerContainer}>
            <Image src={data.productImage} layout="fill" objectFit="fill" />
          </Container>

          <Box
            sx={{
              backgroundColor: "#C41E3A",
              height: "160px",
              padding: "10px",
              position: "relative",
              top: "110px",
              left: "100px",
            }}
          ></Box>

          <Card className={classes.card1} sx={{ height: "700px" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                fontWeight="800"
                fontFamily="Lato"
                fontSize="4vmin"
              >
                {data.productName}
              </Typography>
              <br />
              <Typography
                variant="body1"
                color="text.primary"
                fontWeight="500"
                fontSize="3vmin"
                fontFamily="Lato"
                lineHeight="3vmin"
              >
                {data.productDescription}
              </Typography>
              <br />
              <br />
              <Link
                href="#"
                fontWeight="600"
                fontSize="3vmin"
                color="#d32f2f"
                fontFamily="Lato"
                lineHeight="3vmin"
              >
                {data.productLink}
              </Link>
            </CardContent>
          </Card>
        </Stack>
      ))}
    </>
  );
}

export default banners;

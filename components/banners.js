import React from "react";
import Image from "next/image";
import deeproad from "../public/assets/deeproad.png";
import assettag from "../public/assets/assettag.png";
import {
  Box,
  Card,
  Link,
  CardContent,
  Typography,
  Stack,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  createBreakpoints,
} from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
import banner1 from "../public/assets/Asset6_1.png";
import useSWR from "swr";
import style from "../styles/Home.module.css";
let theme = createTheme();
theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};
theme.typography.body1 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};
const useStyles = makeStyles({
  card1: {
    border: "none",
    boxShadow: "none",
  },
});
function Banners() {
  const classes = useStyles();
  const { data, error } = useSWR("/api/home/products", (apiURL) =>
    fetch(apiURL).then((res) => res.json())
  );
  if (!data) return <div>loading...</div>;

  return (
    <>
      {data.map((eachData, index) => (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1, sm: 4, md: 8 }}
          m="120px 80px"
        >
          {/* src={eachData.productImage} */}
          <Box
            sx={{
              position: "relative",
              border: "black solid 5px",
              width: { xl: 550, lg: 450, md: 450, sm: 280, xs: 200 },
              height: { xl: 450, lg: 450, md: 370, sm: 300, xs: 200 },
            }}
          >
            <Image
              src={eachData.productImage}
              layout="fill"
              objectFit="fill"
              alt="banner"
            ></Image>
          </Box>
          <Box
            sx={{
              border: "black solid 5px",
              width: { xl: 550, lg: 450, md: 450, sm: 280, xs: 200 },
              height: { xl: 450, lg: 450, md: 370, sm: 300, xs: 200 },
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                fontFamily="Lato"
              >
                {eachData.productName}
              </Typography>

              <Typography
                variant="body1"
                color="text.primary"
                fontFamily="Lato"
                style={{ wordWrap: " break-word" }}
              >
                {eachData.productDescription}
              </Typography>
              <br />
              <Link href="#" fontWeight="600" color="#d32f2f" fontFamily="Lato">
                {eachData.productLink}
              </Link>
            </ThemeProvider>
          </Box>
        </Stack>
      ))}
    </>
  );
}

export default Banners;

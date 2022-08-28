import React from "react";
import Image from "next/image";
import assettag from "../public/assets/assettag.png";
import { Box, Typography, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
import useSWR from "swr";

const useStyles = makeStyles({
  sbanner: {
    height: "25vh",
    width: "12vw",
    position: "relative",
    border: "solid black 2px ",
    right: "230px",
    // margin: "30px auto",
    top: "60px",
  },
});
function partnerLogos() {
  const classes = useStyles();
  const { data, error } = useSWR("/api/home/partners", (apiURL) =>
    fetch(apiURL).then((res) => res.json())
  );
  if (!data) return <div>loading...</div>;
  return (
    <Stack direction="row" spacing={2}>
      {data.partnerLogos.map((eachData) => (
        <Container className={classes.sbanner}>
          <Image src={eachData.partnerLogo} layout="fill" />
        </Container>
      ))}
      {/* <Container className={classes.sbanner}>
        <Image src={assettag} layout="fill" />
      </Container>

      <Container className={classes.sbanner1}>
        <Image src={assettag} layout="fill" />
      </Container>

      <Container className={classes.sbanner2}>
        <Image src={assettag} layout="fill" />
      </Container> */}

      <Box
        sx={{
          position: "relative",

          top: "120px",
          height: "20vh",
          width: "30vw",
        }}
      >
        <Typography
          variant="h3"
          color="text.primary"
          fontWeight="650"
          font-family="Lato"
          fontSize="3.5vmin"
        >
          {data.partnerText}
        </Typography>
      </Box>
    </Stack>
  );
}

export default partnerLogos;

import React from "react";
import Image from "next/image";
import assettag from "../public/assets/assettag.png";
import { Box, Typography, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
import useSWR from "swr";

const useStyles = makeStyles({
  sbanner: {
    width: "50vw",
    position: "relative",
    // border: "solid black 2px ",
    display: "flex",
    justifyContent: "space-evenly",
    margin: "30px 30px",
  },
});
function PartnerLogos() {
  const classes = useStyles();
  const { data, error } = useSWR("/api/home/partners", (apiURL) =>
    fetch(apiURL).then((res) => res.json())
  );
  if (!data) return <div>loading...</div>;
  return (
    <Stack direction="row" spacing={2}>
      <Container className={classes.sbanner}>
        {data.partnerLogos.map((eachData) => (
          <Image height="250px" width="250px " src={eachData.partnerLogo} key={eachData.id} />
        ))}
      </Container>

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
        style={{
          margin: "30px 180px",
        }}
        sx={{
          position: "relative",
          top: "30px",
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

export default PartnerLogos;

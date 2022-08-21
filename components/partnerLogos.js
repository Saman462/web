import React from "react";
import Image from "next/image";
import assettag from "../public/assets/assettag.png";
import { Box, Typography, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  sbanner: {
    position: "relative",
    right: "608px",
    bottom: "32px",
    height: "900px",
    width: "350px",
  },
  sbanner1: {
    position: "relative",
    right: "1320px",
    bottom: "32px",
    height: "900px",
    width: "350px",
  },
  sbanner2: {
    position: "relative",
    right: "1312px",
    bottom: "32px",
    height: "900px",
    width: "350px",
  },
});
function partnerLogos() {
  const classes = useStyles();
  return (
    <Stack direction="row" spacing={2}>
      <Container className={classes.sbanner}>
        <Image objectFit="cover" src={assettag} />
      </Container>
      <Container className={classes.sbanner1}>
        <Image objectFit="cover" src={assettag} />
      </Container>
      <Container className={classes.sbanner2}>
        <Image objectFit="cover" src={assettag} />
      </Container>
      <Box
        sx={{
          position: "absolute",
          left: "1392px",
          height: "20px",
          width: "900px",
        }}
      >
        <Typography
          variant="h3"
          color="text.primary"
          fontWeight="650"
          font-family="Lato"
          fontSize="40px"
        >
          Lörem ipsum mikrosel nyranade. Trigt nism i säns. Krovevåment sos inte
          homost.Krovevåment sos inte homost.
        </Typography>
      </Box>
    </Stack>
  );
}

export default partnerLogos;

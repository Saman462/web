import React from "react";
import Image from "next/image";
import assettag from "../public/assets/assettag.png";
import { Box, Typography, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  sbanner: {
    position: "relative",
    top: "610px",
    right: "800px",
    height: "1000px",
    width: "1000px",
  },
  sbanner1: {
    position: "relative",
    top: "610px",
    right: "1900px",
    height: "1000px",
    width: "1000px",
  },
  sbanner2: {
    position: "relative",
    top: "610px",
    right: "2000px",
    height: "1000px",
    width: "1000px",
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
          left: "3200px",
          height: "100px",
          width: "1500px",
          top: "5800px",
        }}
      >
        <Typography
          variant="h3"
          color="text.primary"
          texAtlign="center"
          fontWeight="650"
          fontSize="5rem"
        >
          Lörem ipsum mikrosel nyranade. Trigt nism i säns. Krovevåment sos inte
          homost.Krovevåment sos inte homost.
        </Typography>
      </Box>
    </Stack>
  );
}

export default partnerLogos;

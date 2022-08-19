import React from "react";
import Image from "next/image";
import assettag from "../public/assets/assettag.png";
import { Box, Typography, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  sbanner: {
    position: "relative",
    right: "38rem",
    bottom: "2rem",
    height: "900px",
    width: "350px",
  },
  sbanner1: {
    position: "relative",
    right: "82.5rem",
    bottom: "2rem",
    height: "900px",
    width: "350px",
  },
  sbanner2: {
    position: "relative",
    right: "82rem",
    bottom: "2rem",
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
          left: "87rem",
          height: "20px",
          width: "900px",
        }}
      >
        <Typography
          variant="h3"
          color="text.primary"
          texAtlign="center"
          fontWeight="650"
          fontSize="2.5rem"
        >
          Lörem ipsum mikrosel nyranade. Trigt nism i säns. Krovevåment sos inte
          homost.Krovevåment sos inte homost.
        </Typography>
      </Box>
    </Stack>
  );
}

export default partnerLogos;

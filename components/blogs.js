import React from "react";
import { Box, Card, Link, CardContent, Typography, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  bannerContainer: {
    position: "relative",
    bottom: "25rem",
    left: "5rem",
  },
});

function blogs() {
  const classes = useStyles();
  return (
    <Stack direction="row" spacing={2}>
      <Container className={classes.bannerContainer}>
        <Card
          className={classes.card1}
          sx={{
            width: "800px",
            height: "800px",
            border: "none",
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Box
              sx={{
                width: "770px",
                height: "650px",
                backgroundColor: "#DCDCDC",
              }}
            ></Box>
            <Typography
              variant="body1"
              color="text.primary"
              backgroundColor="#C0C0C0"
              fontWeight="600"
              fontSize="40px"
              fontFamily="Lato"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
            </Typography>
          </CardContent>
        </Card>
      </Container>

      <Container className={classes.bannerContainer1}>
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "15px",
            height: "150px",
            position: "relative",
            bottom: "384px",
            left: "80px",
          }}
        />
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "15px",
            height: "150px",
            position: "relative",
            bottom: "320px",
            left: "80px",
          }}
        />
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "15px",
            height: "150px",
            position: "relative",
            bottom: "272px",
            left: "80px",
          }}
        />
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "15px",
            height: "150px",
            position: "relative",
            bottom: "208px",
            left: "80px",
          }}
        />
        <Card
          className={classes.card3}
          sx={{
            width: "800px",
            height: "785px",
            border: "none",
            boxShadow: "none",
            position: "relative",
            bottom: "1008px",
            left: "96px",
          }}
        >
          <CardContent>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="40px"
              fontFamily="Lato"
            >
              Mauris eget varius sapien. Sed facilisis congue porta.
            </Typography>

            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="40px"
              position="relative"
              fontFamily="Lato"
              top="96px"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet laoreet nec.
            </Typography>

            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="40px"
              position="relative"
              top="176px"
              fontFamily="Lato"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet
            </Typography>

            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="40px"
              fontFamily="Lato"
              position="relative"
              top="272px"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet orci nulla,
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <Container className={classes.bannerContainer}>
        <Card
          className={classes.card3}
          sx={{
            width: "650px",
            height: "800px",
            border: "none",
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Typography
              position="relative"
              top="160px"
              gutterBottom
              variant="h3"
              component="div"
              fontWeight="800"
              fontFamily="Lato"
              fontSize="48px"
            >
              Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Typography>

            <Typography
              color="text.primary"
              position="relative"
              fontFamily="Lato"
              fontWeight="400"
              fontSize="40px"
              top="300px"
              left="40px"
            >
              Lorem ispum vestibulum.
              <br />
              <Link
                href="#"
                fontWeight="600"
                fontSize="40px"
                color="#d32f2f"
                fontFamily="Lato"
              >
                Lorem ipsum vel
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Stack>
  );
}

export default blogs;

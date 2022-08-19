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
              fontSize="2.5rem"
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
            bottom: "24rem",
            left: "5rem",
          }}
        ></Box>
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "15px",
            height: "150px",
            position: "relative",
            bottom: "20rem",
            left: "5rem",
          }}
        ></Box>
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "15px",
            height: "150px",
            position: "relative",
            bottom: "17rem",
            left: "5rem",
          }}
        ></Box>
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "15px",
            height: "150px",
            position: "relative",
            bottom: "13rem",
            left: "5rem",
          }}
        ></Box>
        <Card
          className={classes.card3}
          sx={{
            width: "800px",
            height: "785px",
            border: "none",
            boxShadow: "none",
            position: "relative",
            bottom: "63rem",
            left: "6rem",
          }}
        >
          <CardContent>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta.
            </Typography>
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet laoreet nec.
            </Typography>
            <div>
              <br />
              <br />
              <br />
              <br />
            </div>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Mauris eget varius sapien. Sed facilisis congue porta. Nulla
              laoreet
            </Typography>
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight="500"
              fontSize="2.5rem"
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
              top="10rem"
              gutterBottom
              variant="h3"
              component="div"
              fontWeight="800"
              fontFamily="Open Sans "
              fontSize="3rem"
            >
              Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Typography>
            <div>
              <br />
              <br />
            </div>
            <Typography
              color="text.primary"
              position="relative"
              top="10rem"
              fontWeight="500"
              fontSize="2.5rem"
            >
              Lorem ispum vestibulum.
              <Typography
                color="text.primary"
                fontWeight="500"
                fontSize="2.5rem"
              >
                <Link
                  href="#"
                  fontWeight="600"
                  fontSize="2.5rem"
                  color="#d32f2f"
                >
                  Lorem ipsum vel
                </Link>
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Stack>
  );
}

export default blogs;

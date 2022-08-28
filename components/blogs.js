import React from "react";
import { Box, Card, Link, CardContent, Typography, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
import useSWR from "swr";

const useStyles = makeStyles({
  bannerContainer: {
    position: "relative",
  },
});

function blogs() {
  const classes = useStyles();
  const { data, error } = useSWR("/api/home/news", (apiURL) =>
    fetch(apiURL).then((res) => res.json())
  );
  // console.log(data ? data[0].newsTitle : 'not found', 'news')
  console.log(data);
  if (!data) return <div>loading...</div>;

  return (
    <Stack direction="row" spacing={2}>
      <Container className={classes.bannerContainer}>
        <Card
          className={classes.card1}
          sx={{
            width: "35vw",
            height: "70vh",
            border: "none",
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Box
              sx={{
                width: "100%",
                height: "56vh",
                backgroundColor: "#DCDCDC",
              }}
            ></Box>
            {/* {data.map((eachData) => */}
            <Typography
              variant="body1"
              color="text.primary"
              backgroundColor="#C0C0C0"
              fontWeight="600"
              fontSize="3.6vmin"
              fontFamily="Lato"
              height="20vh"
            >
              {data.newsTitle}
              {/* {Object.values(eachData[0].newsHeadlines)} */}
              {/* {eachData ? eachData[index].newsHeadlines : 'not found'} */}
            </Typography>
            {/* )} */}
          </CardContent>
        </Card>
      </Container>

      <Container className={classes.bannerContainer}>
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "15px",
            height: "13vh",
            position: "relative",
            top: "20px",
            left: "30px",
          }}
        />
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "15px",
            height: "13vh",
            position: "relative",
            top: "80px",
            left: "30px",
          }}
        />
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "15px",
            height: "13vh",
            position: "relative",
            top: "140px",
            left: "30px",
          }}
        />
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "15px",
            height: "13vh",
            position: "relative",
            top: "200px",
            left: "30px",
          }}
        />
        <Card
          style={{
            position: "relative",
            bottom: "600px",
            left: "50px",
          }}
          sx={{
            width: "100%",
            height: "70vh",
            border: "none",
            boxShadow: "none",
          }}
        >
          {data.newsHeadlines.map((eachData) => (
            <CardContent>
              <Typography
                variant="body1"
                color="text.primary"
                fontWeight="500"
                fontSize="3.5vmin"
                fontFamily="Lato"
              >
                {eachData.newsHeadline}
              </Typography>
              <br />
              <br />
              <br />
            </CardContent>
          ))}
        </Card>
      </Container>
      <Container className={classes.bannerContainer}>
        <Card
          className={classes.card3}
          sx={{
            width: "100%",
            height: "66vh",
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
              fontSize="4vmin"
            >
              {data.newsText1}
            </Typography>

            <Typography
              color="text.primary"
              position="relative"
              fontFamily="Lato"
              fontWeight="400"
              fontSize="3.5vmin"
              top="300px"
              left="40px"
            >
              {data.newsText2}
              <br />
              <Link
                href="#"
                fontWeight="600"
                fontSize="3.5vmin"
                color="#d32f2f"
                fontFamily="Lato"
              >
                {data.newsLink}
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Stack>
  );
}

export default blogs;

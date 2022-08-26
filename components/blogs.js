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
            {/* {data.map((eachData) => */}
            <Typography
              variant="body1"
              color="text.primary"
              backgroundColor="#C0C0C0"
              fontWeight="600"
              fontSize="40px"
              fontFamily="Lato"
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
          }}
        />
        <Box
          sx={{
            backgroundColor: "#C41E3A",
            width: "15px",
            height: "150px",
            position: "relative",
          }}
        />
        <Card
          style={{
            position: "absolute",
          }}
          sx={{
            width: "800px",
            height: "785px",
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
                fontSize="40px"
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
              {data.newsText1}
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
              {data.newsText2}
              <br />
              <Link
                href="#"
                fontWeight="600"
                fontSize="40px"
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

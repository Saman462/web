import React from 'react';
import { Box, Card, Link, CardContent, Typography, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    customimg: {
        objectFit: "contain",
        width: "2000px",
        position: "relative",
        height: "unset",
    },
    bannerContainer: {
        position: "relative",
        right: "620px",
        height: "1400px",
        width: "100%",
    },
    bannerContainer1: {
        position: "relative",
        left: "1200px",
        top: "170px",
    },
    bannerContainer2: {
        top: "470px",
        right: "600px",
        position: "relative",
    },
    card1: {
        position: "relative",
        right: "400px",
        margin: "auto",
        top: "100px",
        border: "none",
        boxShadow: "none",
    },
    card2: {
        left: "4.7%",
        top: "159px",
        position: "relative",
        border: "none",
        boxShadow: "none",
    },
    card3: {
        position: "relative",
        right: "7.5%",
        top: "369px",
        border: "none",
        boxShadow: "none",
    },
    sbanner: {
        position: "relative",
        top: "510px",
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
        top: "910px",
        right: "2000px",
        height: "1000px",
        width: "1000px",
    },
});

function blogs() {
    const classes = useStyles();
    return (
        <Stack direction="row" spacing={2}>

            <Container className={classes.bannerContainer}>
                <Card
                    className={classes.card1}
                    sx={{ width: "2000px", height: "1300px", backgroundColor: 'grey' }}
                >
                    <CardContent>

                        <Typography
                            variant="body1"
                            color="text.primary"
                            fontWeight="500"
                            fontSize="4rem"
                        >
                            Mauris eget varius sapien. Sed facilisis congue porta. Nulla
                            laoreet orci nulla, in dictum ligula laoreet nec.
                        </Typography>
                    </CardContent>

                </Card>
            </Container>


            <Container className={classes.bannerContainer}>
                <Card
                    className={classes.card3}
                    sx={{ width: "2000px", height: "1300px" }}
                >
                    <CardContent>
                        <Typography
                            variant="body1"
                            color="text.primary"
                            fontWeight="500"
                            fontSize="4rem"
                        >
                            Mauris eget varius sapien. Sed facilisis congue porta. Nulla
                            laoreet orci nulla, in dictum ligula laoreet nec.
                        </Typography>
                        <br />
                        <br />
                        <Typography
                            variant="body1"
                            color="text.primary"
                            fontWeight="500"
                            fontSize="4rem"
                        >
                            Mauris eget varius sapien. Sed facilisis congue porta. Nulla
                            laoreet orci nulla, in dictum ligula laoreet nec.
                        </Typography>
                        <br></br>
                        <Typography
                            variant="body1"
                            color="text.primary"
                            fontWeight="500"
                            fontSize="4rem"
                        >
                            Mauris eget varius sapien. Sed facilisis congue porta. Nulla
                            laoreet orci nulla, in dictum ligula laoreet nec.
                        </Typography>
                        <br />
                        <br />
                        <Typography
                            variant="body1"
                            color="text.primary"
                            fontWeight="500"
                            fontSize="4rem"
                        >
                            Mauris eget varius sapien. Sed facilisis congue porta. Nulla
                            laoreet orci nulla, in dictum ligula laoreet nec.
                        </Typography>
                    </CardContent>
                </Card>
            </Container>


            <Card
                className={classes.card3}
                sx={{ width: "2000px", height: "1300px" }}
            >
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h3"
                        component="div"
                        fontWeight="800"
                        fontFamily="Open Sans "
                        fontSize="5.5rem"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                        Lorem ipsum dolor sit amet, consectetur
                    </Typography>
                    <br />
                    <br />
                    <Typography color="text.primary" fontWeight="500" fontSize="4rem">
                        Lorem ispum vestibulum.
                        <Link href="#" fontWeight="600" fontSize="4rem" color="#d32f2f">
                            Lorem ipsum vel nulla
                        </Link>
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
    );
}

export default blogs;
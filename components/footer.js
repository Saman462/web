import React from 'react';
import { Box, Card, Link, CardContent, Typography, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core";
import Logo from "../public/assets/Asset 1.png";
import Image from "next/image";

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
    logoContainer: {
        width: 230,
        margin: "auto",
    },
    logoMedia: {
        height: "100%",
        width: "100%",
    }
});
function footer() {
    const classes = useStyles();
    return (
        <Stack direction="row" spacing={2}>
            <Container className={classes.bannerContainer2}>

                <Container className={classes.logoContainer}>
                    <Image
                        src={Logo}
                        className={classes.logoMedia}
                        style={{ cursor: "pointer" }}
                    />
                </Container>

                <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    fontWeight="800"
                    fontFamily="Open Sans "
                    fontSize="5.5rem"
                    style={{ cursor: "pointer" }}
                >
                    HOME
                </Typography>
                <br />
                <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    fontWeight="800"
                    fontFamily="Open Sans "
                    fontSize="5.5rem"
                    style={{ cursor: "pointer" }}
                >
                    BLOG
                </Typography>
                <br />
                <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    fontWeight="800"
                    fontFamily="Open Sans "
                    fontSize="5.5rem"
                    style={{ cursor: "pointer" }}
                >
                    PRODUCTS
                </Typography>
                <br />
                <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    fontWeight="800"
                    fontFamily="Open Sans "
                    fontSize="5.5rem"
                    style={{ cursor: "pointer" }}
                >
                    ABOUT
                </Typography>
                <br />
                <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    fontWeight="800"
                    fontFamily="Open Sans "
                    fontSize="5.5rem"
                    style={{ cursor: "pointer" }}
                >
                    CONTACT
                </Typography>
            </Container>

            <Container className={classes.bannerContainer2}>
                <Typography
                    variant="body1"
                    color="text.primary"
                    fontWeight="500"
                    fontSize="2.5rem"
                >
                    Mauris eget varius sapien. Sed facilisis congue porta. Nulla
                    laoreet orci nulla, in dictum ligula laoreet nec.
                </Typography>
                <br />
                <br />
                <br />
                <br />

                <Typography
                    variant="body1"
                    color="text.primary"
                    fontWeight="500"
                    fontSize="2.5rem"
                >
                    Mauris eget varius sapien. Sed facilisis congue porta. Nulla
                    laoreet orci nulla, in dictum ligula laoreet nec.
                </Typography>

            </Container>

            <Container className={classes.bannerContainer2}>
                <Typography
                    variant="body1"
                    color="text.primary"
                    fontWeight="500"
                    fontSize="2.5rem"
                >
                    Leading the industry with our
                    <br />
                    <Link href="#" fontWeight="600" fontSize="2.5rem" color="#d32f2f">
                        Top Products
                    </Link>
                </Typography>
            </Container>

        </Stack>
    );
}

export default footer;
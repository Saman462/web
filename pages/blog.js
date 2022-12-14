import React from "react";
import Line from "../components/lines";
import assettag from "../public/assets/assettag.png";
import Image from "next/image";
import {
  Box,
  Card,
  Link,
  CardContent,
  Typography,
  Stack,
  Container,
} from "@mui/material";

import style from "../styles/Home.module.css";
import BlogCards from "../components/blogCards";
function blog(props) {
  const sliderClick = (slider) => {
    alert("hello world");
  };

  const slides = [
    {
      image: assettag.src,
      title:
        "Lörem ipsum biogt jektig. Far ålingar multill.Rär bydat även om ner för att",
      description: "dd/mm/yy",
      clickEvent: sliderClick,
    },
    {
      image: assettag.src,
      title:
        "Lörem ipsum biogt jektig. Far ålingar multill.Rär bydat även om ner för att ",
      description: "dd/mm/yy",
      clickEvent: sliderClick,
    },
    {
      image: assettag.src,
      title:
        "Lörem ipsum biogt jektig. Far ålingar multill. Rär bydat även om ner för att.",
      description: "dd/mm/yy",
      clickEvent: sliderClick,
    },
    {
      image: assettag.src,
      title:
        "Lörem ipsum biogt jektig. Far ålingar multill. Rär bydat även om ner för att.",
      description: "dd/mm/yy",
      clickEvent: sliderClick,
    },
    {
      image: assettag.src,
      title:
        "Lörem ipsum biogt jektig. Far ålingar multill. Rär bydat även om ner för att.",
      description: "dd/mm/yy",
      clickEvent: sliderClick,
    },
    {
      image: assettag.src,
      title:
        "Lörem ipsum biogt jektig. Far ålingar multill. Rär bydat även om ner för att.",
      description: "dd/mm/yy",
      clickEvent: sliderClick,
    },
    {
      image: assettag.src,
      title:
        "Lörem ipsum biogt jektig. Far ålingar multill. Rär bydat även om ner för att.",
      description: "dd/mm/yy",
      clickEvent: sliderClick,
    },
  ];
  return (
    <div>
      <Typography
        gutterBottom
        variant="h1"
        component="div"
        fontWeight="800"
        fontFamily="Poppins"
        fontSize="10.5vmin"
        align="center"
      >
        BLOGS
      </Typography>
      <div className={style.line}>
        <Line />
      </div>
      <div className={style.blogBanner}>
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              backgroundColor: "#C41E3A",
              height: "70vh",
              width: "8px",
            }}
          />

          <Container
            style={{
              position: "relative",
              margin: "0px 30px",
              height: "810px",
              width: "1000px",
            }}
          >
            <Image
              src={assettag}
              objectFit="fill"
              layout="fill"
              alt="page"
            ></Image>
          </Container>
          <Box
            style={{
              marginTop: "80px",
              position: "relative",
              left: "120px",
            }}
            sx={{
              backgroundColor: "#C41E3A",
              height: "120px",
              padding: "8px",
            }}
          ></Box>
          <Card
            style={{ marginLeft: "130px", border: "none", boxShadow: "none" }}
            sx={{ width: "1000px", height: "805px" }}
          >
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Typography
                  style={{
                    position: "relative",
                    bottom: "20px",
                  }}
                  gutterBottom
                  variant="h4"
                  component="div"
                  fontWeight="800"
                  color="#BF0000"
                  fontFamily="Roboto"
                  fontSize="2.5vmin"
                >
                  Featured News
                </Typography>
                <Typography
                  style={{
                    position: "relative",
                    bottom: "20px",
                    marginLeft: "600px",
                  }}
                  gutterBottom
                  variant="h4"
                  component="div"
                  fontWeight="800"
                  fontFamily="Roboto"
                  fontSize="2.5vmin"
                >
                  5/07/2022
                </Typography>
              </Stack>
              <br />
              <Typography
                variant="h3"
                color="text.primary"
                fontWeight="800"
                fontSize="5vmin"
                fontFamily="Lato"
                lineHeight="5vmin"
              >
                Lörem ipsum mik tir. Dyvis negt och Dyvis negt och
              </Typography>
              <br />
              <Typography
                variant="body1"
                color="text.primary"
                fontWeight="500"
                fontSize="3.5vmin"
                fontFamily="Poppins"
                lineHeight="4vmin"
              >
                Lörem ipsum mik tir. Dyvis negt och popresade i pseudongen.
                Seregt prer vifirad byling ebelt. An hexatt tining innan pobel
                soren. Milig fosade desat. Ebygt osk rease vyde inte preling.
                Nys prologi. Treliga tilig. Poktig kasös epigt eller yl. Vypp
                tikrongen. Debelt råling. Tetrakana devåvis. Tekafel dåll att
                euron. Gigt malogi polyrtad, fast sov. Geoligen ivis för doligen
                åsam: detilig. Prerade bäd salogi tetrahuk vabel. Euktiga
                bivatir med falig. Doliga karar. Dost fan tertad halig mikroväs.
              </Typography>
              <br />
              <Typography align="right">
                <Link
                  href="#"
                  fontWeight="600"
                  fontSize="3vmin"
                  color="#000000"
                  fontFamily="Lato"
                  lineHeight="3vmin"
                >
                  Read the full article
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </div>
      <BlogCards slides={slides} />
    </div>
  );
}

export default blog;

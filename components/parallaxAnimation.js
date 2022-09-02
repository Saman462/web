import React from "react";
import Image from "next/image";
import sky from "../public/assets/BS.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import road from "../public/assets/Road.png";
import first from "../public/assets/fm.png";
import middle from "../public/assets/MM.png";
import last from "../public/assets/LM.png";
import sign from "../public/assets/roadsign.png";
import clouds from "../public/assets/Clouds.png";
import style from "../styles/Home.module.css";

function parallaxAnimation() {
  return (
    <>
      <div>
        <div className={style.sky}>
          <Image src={sky} alt="sky" />
        </div>
        <div className={style.clouds}>
          <Image src={clouds} alt="clouds" />
        </div>
      </div>
      <div className={style.road}>
        <Image src={road} alt="road" />
      </div>
      <div className={style.sign}>
        <Image src={sign} alt="sign" />
      </div>
      <Parallax pages={4} className={style.Parrallax}>
        <ParallaxLayer offset={2.5} speed={0} sticky={{ start: 3, end: 3 }}>
          <div className={style.last}>
            <Image src={last} alt="last mountain" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.05} sticky={{ start: 2, end: 3 }}>
          <div className={style.middle}>
            <Image src={middle} alt="middle mountain" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.05} sticky={{ start: 1, end: 3 }}>
          <div className={style.first}>
            <Image src={first} alt="first mountain" />
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default parallaxAnimation;

import React from "react";
import style from "../styles/Home.module.css";
import Animation from '../components/parallaxAnimation'
import Banners from '../components/banners'
import Partners from '../components/partnerLogos'

export default function Home() {
  return (
    <>
      {/* parallax effect */}

      <div className={style.container}>
        <Animation />
      </div>

      {/* banner portion */}

      <div>
        <Banners />
      </div>

      {/* logos sections */}

      <div>
        <Partners />
      </div>
    </>
  );
}

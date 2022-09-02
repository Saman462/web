import React from "react";
import style from "../styles/Home.module.css";
import Animation from "../components/parallaxAnimation";
import Banners from "../components/banners";
import Line from "../components/lines";
import Partners from "../components/partnerLogos";
// import Testimonials from '../components/clientTestimonials'
import dynamic from "next/dynamic";
import Blogs from "../components/blogs";
// reference: https://stackoverflow.com/questions/53139884/next-js-disable-server-side-rendering-on-some-pages

const Testimonials = dynamic(() => import("../components/clientTestimonials"), {
  ssr: false,
});

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
        <br />
        <br />
        <br />
        <Testimonials />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Line />
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
      </div>
      <div
        style={{
          height: "870px",
        }}
      >
        <Blogs />
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

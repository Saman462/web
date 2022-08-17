
import React, { Component, useState } from "react";
import Carousel from "react-spring-3d-carousel-2";
// import { config } from "react-spring";

// import dynamic from 'next/dynamic'

// const {Carousel} = dynamic(
//   () => import('react-spring-3d-carousel-2'),
//   { ssr: false }
// )

function Testimonials() {

    const [goToSlide, setGoToSlide] = useState(0)
    const offsetRadius =  2
    const showNavigation = false
    // const config = config.gentle
    const autoPlay = true
    const interval = 3
 
  const slides = [
    {
      key: 11,
      content: <img src="https://picsum.photos/800/801/?random" alt="1" />
    },
    {
      key: 12,
      content: <img src="https://picsum.photos/800/802/?random" alt="2" />
    },
    {
      key: 13,
      content: <img src="https://picsum.photos/600/803/?random" alt="3" />
    },
    {
      key: 14,
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />
    },
    {
      key: 15,
      content: <img src="https://picsum.photos/800/804/?random" alt="5" />
    },
    {
      key: 16,
      content: <img src="https://picsum.photos/500/800/?random" alt="6" />
    },
    {
      key: 17,
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />
    },
    {
      key: 18,
      content: <img src="https://picsum.photos/805/800/?random" alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index)  };
  });


    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showNavigation}
        //   animationConfig={config.gentle}
          autoPlay={autoPlay}
          interval={interval}
        />
      </div>
    );
  
}
export default Testimonials
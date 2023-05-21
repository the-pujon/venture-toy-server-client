import React from "react";

import { Gallery } from "react-grid-gallery";

import banner1 from "../../assets/Banner/banner1.jpg";
import banner2 from "../../assets/Banner/banner2.jpg";
import banner3 from "../../assets/Banner/banner3.jpg";
import banner4 from "../../assets/Banner/banner4.jpg";
import banner5 from "../../assets/Banner/banner5.jpeg";
import banner6 from "../../assets/Banner/banner6.webp";

import AOS from "aos";

AOS.init();

const Gallery1 = () => {
  const images = [
    {
      src: `${banner1}`,
      width: 270,
      height: 320,
    },
    {
      src: `${banner2}`,
      width: 340,
      height: 190,
    },
    {
      src: `${banner3}`,
      width: 321,
      height: 148,
    },
    {
      src: `${banner4}`,
      width: 314,
      height: 213,
    },
    {
      src: `${banner5}`,
      width: 320,
      height: 213,
    },
    {
      src: `${banner6}`,
      width: 320,
      height: 190,
    },

    {
      src: `${banner1}`,
      width: 320,
      height: 113,
    },
    {
      src: `${banner2}`,
      width: 315,
      height: 320,
    },
    {
      src: `${banner3}`,
      width: 305,
      height: 340,
    },
    {
      src: `${banner4}`,
      width: 320,
      height: 190,
    },
    {
      src: `${banner5}`,
      width: 320,
      height: 148,
    },
    {
      src: `${banner6}`,
      width: 320,
      height: 213,
    },
    {
      src: `${banner1}`,
      width: 320,
      height: 213,
    },
    {
      src: `${banner2}`,
      width: 248,
      height: 320,
    },
    {
      src: `${banner3}`,
      width: 230,
      height: 113,
    },
  ];
  return (
    <div
      data-aos="fade-left"
      className="h-96 overflow-y-scroll shadow-2xl md:flex-1 flex-none md:w-12"
    >
      <Gallery images={images} enableImageSelection={false} />
    </div>
  );
};

export default Gallery1;

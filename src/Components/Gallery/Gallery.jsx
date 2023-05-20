import React from "react";

import { Gallery } from "react-grid-gallery";

import banner1 from "../../assets/Banner/banner1.jpg";
import banner2 from "../../assets/Banner/banner2.jpg";
import banner3 from "../../assets/Banner/banner3.jpg";

const Gallery1 = ({ loadedToys }) => {
  const allImg = loadedToys.map((toy) => toy.photoURL);

  console.log(allImg);

  const images = [
    {
      src: `${banner2}`,
      width: 270,
      height: 320,
    },
    {
      src: `${banner2}`,
      width: 340,
      height: 190,
    },
    {
      src: `${banner2}`,
      width: 321,
      height: 148,
    },
    {
      src: `${banner2}`,
      width: 314,
      height: 213,
    },
    {
      src: `${banner2}`,
      width: 320,
      height: 213,
    },
    {
      src: `${banner2}`,
      width: 320,
      height: 190,
    },

    {
      src: `${banner2}`,
      width: 320,
      height: 113,
    },
    {
      src: `${banner2}`,
      width: 315,
      height: 320,
    },
    {
      src: `${banner2}`,
      width: 305,
      height: 340,
    },
    {
      src: `${banner2}`,
      width: 320,
      height: 190,
    },
    {
      src: `${banner2}`,
      width: 320,
      height: 148,
    },
    {
      src: `${banner2}`,
      width: 320,
      height: 213,
    },
    {
      src: `${banner2}`,
      width: 320,
      height: 213,
    },
    {
      src: `${banner2}`,
      width: 248,
      height: 320,
    },
    {
      src: `${banner2}`,
      width: 230,
      height: 113,
    },
  ];
  return (
    <div className="h-96 overflow-y-scroll shadow-2xl flex-1">
      <Gallery images={images} enableImageSelection={false} />
    </div>
  );
};

export default Gallery1;

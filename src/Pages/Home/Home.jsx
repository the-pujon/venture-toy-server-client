import React from "react";
import Header from "../../Components/Header/Header";

import Gallery1 from "../../Components/Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center gap-3 sm:flex-col md:flex-row mx-3 h-screen ">
        <div className="text-6xl">Our Toy Gallery</div>
        <Gallery1 />
      </div>
    </div>
  );
};

export default Home;

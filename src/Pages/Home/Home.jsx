import React from "react";
import Header from "../../Components/Header/Header";

import Gallery1 from "../../Components/Gallery/Gallery";
import Shop from "../../Components/Shop/Shop";
import { useLoaderData } from "react-router-dom";
import About from "../../Components/About/About";
import WeProvide from "../../Components/WeProvide/WeProvide";

const Home = () => {
  const loadedToys = useLoaderData();

  //console.log(toys);

  return (
    <div>
      <Header />
      <div className="h-screen">
        <About />
      </div>
      <div className="flex justify-center items-center gap-3 sm:flex-col md:flex-row mx-3 h-screen ">
        <div className="text-6xl">Our Toy Gallery</div>
        <Gallery1 loadedToys={loadedToys} />
      </div>
      <div>
        <Shop loadedToys={loadedToys} />
      </div>
      <div className="h-96 flex justify-center items-center">
        <WeProvide />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Header from "../../Components/Header/Header";

import Gallery1 from "../../Components/Gallery/Gallery";
import Shop from "../../Components/Shop/Shop";
import { useLoaderData } from "react-router-dom";
import About from "../../Components/About/About";
import WeProvide from "../../Components/WeProvide/WeProvide";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const loadedToys = useLoaderData();

  //console.log(toys);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Header />
      <div className="h-screen">
        <About />
      </div>
      <div className="flex justify-center items-center gap-3 sm:flex-col md:flex-row mx-3 h-screen ">
        <div className="text-6xl">Our Toy Gallery</div>
        <Gallery1 />
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

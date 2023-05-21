import React from "react";
import Header from "../../Components/Header/Header";

import Gallery1 from "../../Components/Gallery/Gallery";
import Shop from "../../Components/Shop/Shop";
import { useLoaderData } from "react-router-dom";
import About from "../../Components/About/About";
import WeProvide from "../../Components/WeProvide/WeProvide";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../Hook/useTitle";
import AOS from "aos";

AOS.init();

const Home = () => {
  const loadedToys = useLoaderData();

  useTitle("Home");

  return (
    <div>
      {/* For Toaster */}
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

      {/* Header */}
      <Header />

      {/* About */}
      <div className="h-screen my-16 md:my-8">
        <About />
      </div>

      {/* Gallery */}
      <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-3 sm:flex-col md:flex-row mx-3 mt-16 md:my-8 h-screen ">
        <div className="text-6xl" data-aos="fade-right">
          Our Toy Gallery
        </div>

        <Gallery1 />
      </div>

      {/* Shop by Category */}
      <div>
        <Shop loadedToys={loadedToys} />
      </div>
      <div className="h-fit my-8 flex justify-center items-center">
        <WeProvide />
      </div>
    </div>
  );
};

export default Home;

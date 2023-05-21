import React from "react";
import "./About.scss";
import image from "../../assets/Banner/banner1.jpg";
import AOS from "aos";

AOS.init();
const About = () => {
  return (
    <div>
      <div className="sm:flex sm:flex-col md:relative">
        <div className="text-7xl sm:mb-6 sm:text-center md:absolute md:top-28 md:left-4 text-[#263238]">
          About us
        </div>
        <img
          src={image}
          alt=""
          className="md:w-3/5 md:absolute md:right-12 md:top-[4.5rem]"
        />

        <div
          data-aos="fade-right"
          className="md:absolute md:w-2/6 p-8  md:h-96 md:z-20 md:top-60 md:left-36 md:backdrop-blur-sm md:rounded-md bg-[#a8adafd7] flex justify-center items-center"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          mollitia magnam, ratione cum commodi dignissimos iure pariatur
          inventore doloribus id ut vel quibusdam aut dolorum necessitatibus
          nemo? Alias aliquid modi rem non, dolores corrupti blanditiis
          voluptatem sapiente eaque velit voluptatibus. Doloribus, molestiae
          laborum. Tenetur tempora placeat molestiae, distinctio maiores
          asperiores.
        </div>
      </div>
    </div>
  );
};

export default About;

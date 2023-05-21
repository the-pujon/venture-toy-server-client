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
          className="md:absolute md:w-2/6 p-8  md:h-fit md:z-20 md:top-60 md:left-36 md:backdrop-blur-sm md:rounded-md bg-[#a8adafd7] flex justify-center items-center"
        >
          Welcome to Venture Toy Verse, the ultimate destination for toy
          enthusiasts and collectors. Our e-commerce website is a haven for
          adventure seekers, offering an unparalleled collection of toys from
          various genres and universes. Step into a world of limitless
          possibilities as you explore our vast catalog, featuring action
          figures, board games, collectibles, and more. Immerse yourself in the
          thrilling narratives of iconic franchises, from epic superhero sagas
          to fantastical realms and galactic battles. With stunning visuals,
          detailed descriptions, and customer ratings, Venture Toy Verse is your
          gateway to endless fun and excitement. Unleash your imagination and
          embark on unforgettable adventures with Venture Toy Verse.
        </div>
      </div>
    </div>
  );
};

export default About;

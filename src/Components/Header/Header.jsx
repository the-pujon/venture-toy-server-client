import React from "react";
import "./Header.scss";

import banner1 from "../../assets/Banner/banner1.jpg";
import banner2 from "../../assets/Banner/banner2.jpg";
import banner3 from "../../assets/Banner/banner3.jpg";

const Header = () => {
  return (
    <div>
      <div className="carousel w-full h-screen">
        <div
          id="slide1"
          className="carousel-item relative w-full header__slider-image"
          style={{
            backgroundImage: `url(${banner1}),linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.4) 30%,  rgba(255,255,255,.9) 100%)`,
          }}
        >
          <div className="absolute text-white top-56 left-12 space-y-4    ">
            <div className=" text-6xl font-bold">
              Venture <br />
              Toy Verse
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
              rem.
            </p>
            <button className="btn bg-[#192023] border-0">See All Toys</button>{" "}
            <div className=" flex   ">
              <a href="#slide4" className="btn btn-circle bg-white/5 border-0">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-white/5 border-0">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full header__slider-image"
          style={{
            backgroundImage: `url(${banner2}),linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.6) 40%,  rgba(255,255,255,1) 100%)`,
          }}
        >
          <div className="absolute text-white top-56 left-12 space-y-4    ">
            <div className=" text-6xl">
              Venture <br />
              Toy Verse
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
              rem.
            </p>
            <button className="btn bg-[#192023] border-0">See All Toys</button>{" "}
            <div className=" flex   ">
              <a href="#slide1" className="btn btn-circle bg-white/5 border-0">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-white/5 border-0">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full header__slider-image"
          style={{
            backgroundImage: `url(${banner3}),linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.6) 40%,  rgba(255,255,255,1) 100%)`,
          }}
        >
          <div className="absolute text-white top-56 left-12 space-y-4    ">
            <div className=" text-6xl">
              Venture <br />
              Toy Verse
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
              rem.
            </p>
            <button className="btn bg-[#192023] border-0">See All Toys</button>{" "}
            <div className=" flex   ">
              <a href="#slide2" className="btn btn-circle bg-white/5 border-0">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle bg-white/5 border-0">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

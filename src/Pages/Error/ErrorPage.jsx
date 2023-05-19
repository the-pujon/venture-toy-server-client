import React from "react";

import errorPage1 from "../../assets/404page.png";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div
        className="h-screen w-screen  flex relative justify-center content-center flex-wrap"
        //style={{ background: " #a8adaf" }}
      >
        {/*<p
          className="font-sans text-white error-text text-[400px] font-bold"
          style={{ color: "#263238" }}
        >
          404
        </p>*/}
        <img src={errorPage1} className="w-1/2" alt="" />

        <Link
          to="/"
          className="btn  absolute bottom-14"
          style={{ background: "#263238" }}
        >
          Back to HOME
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

import React from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ toy }) => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 h-64 shadow-xl">
        <figure className=" w-1/2">
          <img src={toy.photoURL} alt="Album" className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy.name}</h2>
          <div>Price: ${toy.price}</div>
          <div>Rating:{toy.rating}</div>
          <div className="card-actions justify-end">
            <Link to={`/toys/${toy._id}`} className="btn bg-[#263238]">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;

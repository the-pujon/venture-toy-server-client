import React from "react";

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
            <button className="btn bg-[#263238]">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;

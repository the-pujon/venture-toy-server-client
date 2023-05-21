import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hook/useTitle";

const SingleToy = () => {
  useTitle("Toy Details");
  const singleLoadedToy = useLoaderData();

  //destructuring
  const {
    photoURL,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
  } = singleLoadedToy;

  //  console.log(singleLoadedToy);

  return (
    <div>
      <div className="hero h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={photoURL} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold mb-3"> {name}</h1>
            <div className="flex flex-col gap-2">
              <div>Seller Name: {sellerName}</div>
              <div>Seller Email: {sellerEmail}</div>
              <div>Price: {price}</div>
              <div>Rating: {rating}</div>
              <div>Quantity: {quantity}</div>
              <div>Description: {description}</div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;

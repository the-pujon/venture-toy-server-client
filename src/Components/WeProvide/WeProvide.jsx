import React from "react";
import { FaShippingFast, FaShoppingCart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const WeProvide = () => {
  return (
    <div>
      <h1 className="text-center text-6xl mb-16">We Provide</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col justify-center items-center border-2 border-[#263238] p-8 rounded-lg text-2xl w-60 text-center">
          <FaShippingFast />
          <p>Fastest and safest Delivery</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-[#263238] p-8 rounded-lg text-2xl w-60 text-center">
          <FaShoppingCart />
          <p>Genuine Product</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-[#263238] p-8 rounded-lg text-2xl w-60 text-center">
          <BiSupport />
          <p>24/7 Support</p>
        </div>
      </div>
    </div>
  );
};

export default WeProvide;

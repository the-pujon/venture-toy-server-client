import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const ShopCard = ({ toy }) => {
  const { loggedUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log(id);
    //return <NavLink to={`/toys/${id}`}></NavLink>;
    if (!loggedUser) {
      toast.warning("You have to log in first to view details", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        navigate(`/login`);
      }, 2000);
    } else {
      navigate(`/toys/${id}`);
    }
  };

  return (
    <div>
      <div className="card card-side bg-base-100 h-64 shadow-xl">
        <figure className=" w-1/2 ">
          <img src={toy.photoURL} alt="Album" className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toy.name}</h2>
          <div>Price: ${toy.price}</div>
          <div>Rating:{toy.rating}</div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleClick(toy._id)}
              className="btn bg-[#263238]"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;

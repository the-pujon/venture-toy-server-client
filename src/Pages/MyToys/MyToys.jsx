import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../Hook/useTitle";

import banner from "../../assets/Banner/banner3.jpg";

const MyToys = () => {
  const { loggedUser } = useContext(AuthContext);

  useTitle("Registration");

  useTitle("My Toys");

  const [myToys, setMyToys] = useState([]);
  const [sort, setSort] = useState(1);

  //gor getting data based on userEmail
  const url = `https://venture-toy-verse-server.vercel.app/myToys?email=${loggedUser.email}&sortBy=${sort}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      })
      .catch((err) => console.error(err));
  }, []);

  //for delete
  const handleDelete = (id) => {
    fetch(`https://venture-toy-verse-server.vercel.app/myToys/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("delete");
        toast.success("Deleted Successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const remainingToys = myToys.filter((myToy) => myToy._id !== id);
        setMyToys(remainingToys);
        console.log(remainingToys);
      })
      .catch((err) => console.error(err));
  };

  //for ascending data sort
  const handleAscending = (sort) => {
    setSort(sort);
    const URL = `https://venture-toy-verse-server.vercel.app/myToys?email=${loggedUser.email}&sortBy=${sort}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      })
      .catch((err) => console.error(err));
  };

  //for descending data sort
  const handleDescending = (sort) => {
    setSort(sort);
    const URL = `https://venture-toy-verse-server.vercel.app/myToys?email=${loggedUser.email}&sortBy=${sort}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {/* toast */}
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
      <div
        className="hero h-48"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">My Toy</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center m-4">
        {/* ascending */}
        <button
          className="btn bg-[#263238]   me-4"
          onClick={() => handleAscending(1)}
        >
          Ascending sort
        </button>
        {/* descending */}
        <button
          className="btn bg-[#263238]  "
          onClick={() => handleDescending(-1)}
        >
          Descending sort
        </button>
      </div>

      {/* table */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Picture</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myToys.map((myToy) => (
              <tr key={myToy._id}>
                <td>
                  <div className="flex items-center ">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16">
                        <img
                          src={myToy.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{myToy.name}</td>
                <td>{myToy.sellerName}</td>
                <td>{myToy.sellerEmail}</td>
                <td>{myToy.subCategory}</td>
                <td>{myToy.price}</td>
                <td>{myToy.rating}</td>
                <td>{myToy.quantity}</td>
                <td>{myToy.description.slice(0, 20)}...</td>
                <th>
                  <button
                    className="btn bg-[#263238] me-2 btn-xs"
                    onClick={() => handleDelete(myToy._id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/myToys/${myToy._id}`}
                    className="btn bg-[#263238] btn-xs"
                    state={{ myToy: myToy }}
                  >
                    Edit
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;

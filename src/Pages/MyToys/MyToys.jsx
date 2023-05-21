import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyToys = () => {
  const { loggedUser } = useContext(AuthContext);

  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:5000/myToys?email=${loggedUser.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      })
      .catch((err) => console.error(err));
  }, [myToys]);

  //console.log(loggedUser);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/myToys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remainingToys = myToys.filter((myToy) => myToy._id !== id);
        setMyToys(remainingToys);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {/* Header */}
      <div
        className="hero h-48"
        style={{
          backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          </div>
        </div>
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
                <td className="w-28 overflow-x-auto">
                  <div className="">{myToy.description}</div>
                </td>
                <td>{myToy.subCategory}</td>
                <td>{myToy.price}</td>
                <td>{myToy.rating}</td>
                <td>{myToy.quantity}</td>
                <th>
                  <button
                    className="btn bg-[#263238] me-2 btn-xs"
                    onClick={() => handleDelete(myToy._id)}
                  >
                    Delete
                  </button>
                  <button className="btn bg-[#263238] btn-xs">Edit</button>
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

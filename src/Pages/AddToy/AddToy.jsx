import React from "react";

import addToy from "../../assets/addToy.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

const AddToy = () => {
  const navigate = useNavigate();

  const handleAddToy = (e) => {
    e.preventDefault();
    //console.log("clicked");
    const form = e.target;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const photoURL = form.photoURL.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const addedToy = {
      name,
      sellerName,
      sellerEmail,
      photoURL,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };

    fetch("https://venture-toy-verse-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Added Successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/myToys");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <>
        <div className="hero min-h-screen bg-none ">
          <div className="hero-content flex-col lg:flex-row mx-8">
            <img src={addToy} alt="" className="w-[35rem]   " />

            <div className="card flex-1 w-[60rem]  shadow-2xl bg-transparent ">
              <div
                className="text-6xl text-center mt-7"
                style={{ color: "#263238" }}
              >
                Add a toy
              </div>
              <form
                className="card-body bg-transparent flex flex-col items-center"
                onSubmit={handleAddToy}
              >
                <div className="flex flex-row justify-around gap-4">
                  <div>
                    <div className="form-control relative ">
                      <input
                        autoComplete="off"
                        id="name"
                        name="name"
                        type="name"
                        className="peer placeholder-transparent h-10 w-[18rem]   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                        placeholder="name"
                        style={{ borderBottom: "2px solid #a8adaf" }}
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                      >
                        Name
                      </label>
                    </div>
                    <div className="form-control relative my-5">
                      <input
                        autoComplete="off"
                        id="sellerName"
                        name="sellerName"
                        type="text"
                        className="peer placeholder-transparent h-10 w-[18rem]   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                        placeholder="sellerName"
                        style={{ borderBottom: "2px solid #a8adaf" }}
                        required
                      />
                      <label
                        htmlFor="sellerName"
                        className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                      >
                        Seller Name
                      </label>
                    </div>
                    <div className="form-control relative ">
                      <input
                        autoComplete="off"
                        id="sellerEmail"
                        name="sellerEmail"
                        type="email"
                        className="peer placeholder-transparent h-10 w-[18rem]   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                        placeholder="sellerEmail"
                        style={{ borderBottom: "2px solid #a8adaf" }}
                        required
                      />
                      <label
                        htmlFor="sellerEmail"
                        className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                      >
                        Seller Email
                      </label>
                    </div>

                    <div className="form-control relative mt-5">
                      <input
                        autoComplete="off"
                        id="photoURL"
                        name="photoURL"
                        type="url"
                        className="peer placeholder-transparent h-10 w-[18rem]   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                        placeholder="photoURL"
                        style={{ borderBottom: "2px solid #a8adaf" }}
                        required
                      />
                      <label
                        htmlFor="photoURL"
                        className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                      >
                        PhotoURL
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="form-control relative">
                      <input
                        autoComplete="off"
                        id="subCategory"
                        name="subCategory"
                        type="text"
                        className="peer placeholder-transparent h-10 w-[18rem]   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                        placeholder="subCategory"
                        style={{ borderBottom: "2px solid #a8adaf" }}
                        required
                      />
                      <label
                        htmlFor="subCategory"
                        className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                      >
                        Sub-Category
                      </label>
                    </div>
                    <div className="form-control relative my-5">
                      <input
                        autoComplete="off"
                        id="price"
                        name="price"
                        type="number"
                        className="peer placeholder-transparent h-10 w-[18rem]   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                        placeholder="price"
                        style={{ borderBottom: "2px solid #a8adaf" }}
                        required
                      />
                      <label
                        htmlFor="price"
                        className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                      >
                        Price
                      </label>
                    </div>
                    <div className="form-control relative ">
                      <input
                        autoComplete="off"
                        id="rating"
                        name="rating"
                        type="number"
                        className="peer placeholder-transparent h-10 w-[18rem]   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                        placeholder="rating"
                        style={{ borderBottom: "2px solid #a8adaf" }}
                        required
                      />
                      <label
                        htmlFor="rating"
                        className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                      >
                        Rating
                      </label>
                    </div>
                    <div className="form-control relative mt-5">
                      <input
                        autoComplete="off"
                        id="quantity"
                        name="quantity"
                        type="number"
                        className="peer placeholder-transparent h-10 w-[18rem]   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                        placeholder="quantity"
                        style={{ borderBottom: "2px solid #a8adaf" }}
                        required
                      />
                      <label
                        htmlFor="quantity"
                        className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                      >
                        Quantity
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-control relative mt-3">
                  <input
                    autoComplete="off"
                    id="description"
                    name="description"
                    type="text"
                    className="peer placeholder-transparent h-10 w-[37rem]   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                    placeholder="description"
                    style={{ borderBottom: "2px solid #a8adaf" }}
                    required
                  />
                  <label
                    htmlFor="description"
                    className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
                  >
                    Description
                  </label>
                </div>
                <div className="w-full mt-8">
                  <button type="submit" className="btn bg-[#263238] w-full">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddToy;

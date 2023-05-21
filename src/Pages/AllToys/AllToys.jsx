import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import banner from "../../assets/Banner/banner3.jpg";
import "./AllToys.scss";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

export const AllToys = () => {
  const { loggedUser } = useContext(AuthContext);

  const allLoadedToys = useLoaderData();

  const navigate = useNavigate();

  const [filteredToys, setFilteredToys] = useState(allLoadedToys);
  const [search, setSearch] = useState("");

  const shortListedToy = allLoadedToys.slice(0, 20);
  //setFilteredToys(shortListedToy);
  const [loadedToys, setLoadedToys] = useState(shortListedToy);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let value = search.toLowerCase();
    let toySearch = loadedToys.filter((data) => {
      const name = data.name.toLowerCase();
      return name.startsWith(value);
    });
    setFilteredToys(toySearch);
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let value = search.toLowerCase();

    let toySearch = loadedToys.filter((data) => {
      const name = data.name.toLowerCase();
      return name === value;
    });
    console.log(toySearch);
    setFilteredToys(toySearch);
  };

  const handleShowMore = () => {
    setFilteredToys(allLoadedToys);
  };

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
            <h1 className="mb-5 text-6xl font-bold">All Toys</h1>
          </div>
        </div>
      </div>

      {/* search */}
      <form
        className="flex justify-center items-center gap-4 m-4"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          placeholder="search country"
          value={search}
          onChange={handleChange}
          className="search"
        />
        <button type="submit" className="btn bg-[#263238]">
          Search
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              {/*<th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>*/}
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {filteredToys.map((loadedToy) => (
              <tr key={loadedToy._id}>
                {/*<th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>*/}
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="font-bold">
                      {loadedToy.sellerName && loadedToy.sellerName}
                    </div>
                  </div>
                </td>
                <td>{loadedToy.name}</td>
                <td>{loadedToy.subCategory}</td>
                <td>${loadedToy.price}</td>
                <td>{loadedToy.quantity}</td>
                <td>
                  <button
                    onClick={() => handleClick(loadedToy._id)}
                    className="btn bg-[#263238] btn-xs"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}

            {/* row 2 */}

            {/* row 3 */}

            {/* row 4 */}
          </tbody>
          {/* foot */}
        </table>
        {allLoadedToys.length > 20 ? (
          <button className="btn bg[#263238]  " onClick={handleShowMore}>
            Show more
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

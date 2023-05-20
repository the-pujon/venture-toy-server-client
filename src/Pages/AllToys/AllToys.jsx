import React from "react";
import { useLoaderData } from "react-router-dom";
import banner from "../../assets/Banner/banner3.jpg";

export const AllToys = () => {
  const allLoadedToys = useLoaderData();

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

            {allLoadedToys.map((loadedToy) => (
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
                  <button className="btn bg[#263238] btn-xs">
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
      </div>
    </div>
  );
};

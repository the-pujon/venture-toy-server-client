import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/logo.png";

import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { loggedUser, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("log out"))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="navbar bg-black/20 text-white fixed z-40 backdrop-blur-sm">
        <div className="navbar-start">
          {/* Icon for nav in mobile */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            {/* for mobile */}
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black/70 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/toys">All Toys</NavLink>
              </li>
              {loggedUser && (
                <li>
                  <NavLink to="/myToys">My Toys</NavLink>
                </li>
              )}
              {loggedUser && (
                <li>
                  <NavLink to="/addToy">Add a Toy</NavLink>
                </li>
              )}

              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
            </ul>
          </div>
          {/* There Will be website logo */}
          <img src={logo} alt="" className="w-16" />
          <div className="text-xs md:text-xl font-semibold -ms-1 mt-3">
            Venture Toy Verse
          </div>
        </div>

        {/* desktop screen nav menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/toys">All Toys</NavLink>
            </li>
            {loggedUser && (
              <li>
                <NavLink to="/myToys">My Toys</NavLink>
              </li>
            )}
            {loggedUser && (
              <li>
                <NavLink to="/addToy">Add a Toy</NavLink>
              </li>
            )}
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </ul>
        </div>

        {/* Avatar dropdown menu */}
        <div className="navbar-end  md:me-0">
          {/*<Link to="/login">
            <button className="btn border-white btn-outline  btn-sm text-white hover:border-amber-600 hover:bg-transparent">
              Login
            </button>
          </Link>*/}

          {/*<div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={loggedUser?.photoURL && loggedUser?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black/60 rounded-box w-52"
            >
              <li>
                <button className="btn bg-amber-500">Logout</button>
              </li>
            </ul>
          </div>*/}
          {!loggedUser && (
            <Link to="/login">
              <button className="btn border-white btn-outline  btn-sm text-white hover:border-amber-600 hover:bg-transparent">
                Login
              </button>
            </Link>
          )}
          {loggedUser && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div
                  className="w-10 rounded-full"
                  title={loggedUser?.displayName && loggedUser?.displayName}
                >
                  <img src={`${loggedUser?.photoURL}`} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black/60 rounded-box w-52"
              >
                <li>
                  <button onClick={handleLogOut} className="btn bg-[#263238]">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

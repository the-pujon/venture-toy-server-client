import React, { useContext, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import login1 from "../../assets/LoginPic/login2.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../../Hook/useTitle";

const Login = () => {
  const { loginWithEmail, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);
  useTitle("Login");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.email.value;

    loginWithEmail(email, password)
      .then((result) => {
        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleGithubLogin = () => {
    loginWithGithub()
      .then((res) => {
        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="hero min-h-screen bg-none">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={login1} alt="" className="w-1/2" />

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent ">
            <form onSubmit={handleLogin} className="card-body bg-transparent">
              <div
                className="text-3xl text-center  font-semibold"
                style={{ color: "#263238" }}
              >
                Please Login
              </div>
              <div className="form-control relative my-6">
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="email"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                  placeholder="email"
                  style={{ borderBottom: "2px solid #a8adaf" }}
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  Email
                </label>
              </div>
              <div className="form-control relative ">
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                  placeholder="Password"
                  style={{ borderBottom: "2px solid #a8adaf" }}
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              <div className="text-xs text-black">
                Don't have an account?{" "}
                <Link to="/register" className="hover:text-gray-400">
                  Register
                </Link>
              </div>
              {/*{error && <div className="text-xs text-warning">{error}</div>}*/}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn   "
                  style={{ background: "#263238" }}
                >
                  Login
                </button>
              </div>

              <div className="divider">OR</div>
              <div className="form-control flex flex-row justify-center gap-4 ">
                {/* login with github button */}
                <div
                  className="btn btn-circle  "
                  style={{ background: "#263238" }}
                  onClick={handleGithubLogin}
                >
                  <FaGithub className="text-3xl" />
                </div>
                <div
                  //login with google button

                  className="btn btn-circle  "
                  style={{ background: "#263238" }}
                  onClick={handleGoogleLogin}
                >
                  <FcGoogle className="text-3xl" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

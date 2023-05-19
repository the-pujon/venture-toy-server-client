import React, { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import signup1 from "../../assets/LoginPic/signup1.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

const Registration = () => {
  const { registrationWithEmail, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.email.value;
    const photoURL = form.photoURL.value;

    registrationWithEmail(email, password)
      .then((res) => {
        console.log(res.user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then((res) => {
            console.log("updated");
            navigate("/");
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };

  const handleGithubLogin = () => {
    loginWithGithub()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="hero min-h-screen bg-none">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={signup1} alt="" className="w-1/2" />

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent ">
            <form onSubmit={handleSubmit} className="card-body bg-transparent">
              <div
                className="text-3xl text-center  font-semibold"
                style={{ color: "#263238" }}
              >
                Please Register
              </div>
              <div className="form-control relative mt-5">
                <input
                  autoComplete="off"
                  id="name"
                  name="name"
                  type="name"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                  placeholder="name"
                  style={{ borderBottom: "2px solid #a8adaf" }}
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  Name
                </label>
              </div>
              <div className="form-control relative my-5">
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
              <div className="form-control relative mt-5">
                <input
                  autoComplete="off"
                  id="photoURL"
                  name="photoURL"
                  type="url"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600"
                  placeholder="photoURL"
                  style={{ borderBottom: "2px solid #a8adaf" }}
                  required
                />
                <label
                  htmlFor="photoURL"
                  className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  PhotoURL
                </label>
              </div>
              <div className="text-xs text-black">
                Already have an account?
                <Link to="/login" className="hover:text-gray-400">
                  Login
                </Link>
              </div>
              {/*{error && <div className="text-xs text-warning">{error}</div>}*/}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn   "
                  style={{ background: "#263238" }}
                >
                  Register
                </button>
              </div>

              <div className="divider">OR</div>
              <div className="form-control flex flex-row justify-center gap-4 ">
                {/* login with github button */}
                <div
                  className="btn btn-circle  "
                  style={{ background: "#263238" }}
                  //onClick={handleGithubLogin}
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

export default Registration;

import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loggedUser, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (!loggedUser) {
    return <Navigate to="/login"></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;

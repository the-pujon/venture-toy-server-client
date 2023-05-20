import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Root from "./Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import { AllToys } from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "allToys",
        element: <AllToys />,
      },
      {
        path: "myToys",
        element: <MyToys />,
      },
      {
        path: "addToy",
        element: <AddToy />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
]);

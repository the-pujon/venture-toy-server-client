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
import SingleToy from "../Pages/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://venture-toy-verse-server.vercel.app/toys"),
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "toys/:id",
        element: (
          <PrivateRoute>
            <SingleToy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://venture-toy-verse-server.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "toys",
        element: <AllToys />,
        loader: () => fetch("https://venture-toy-verse-server.vercel.app/toys"),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "myToys/:id",
        element: (
          <PrivateRoute>
            <UpdateToy />
          </PrivateRoute>
        ),
      },
      {
        path: "addToy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
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

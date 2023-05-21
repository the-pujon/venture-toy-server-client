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
        path: "toys/:id",
        element: <SingleToy />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "toys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:5000/toys"),
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

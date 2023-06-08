import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instractor from "../Pages/Insctractor/Instractor/Instractor"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'instractor',
          element:<Instractor></Instractor>
        }
    ]
  },
]);


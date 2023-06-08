import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instractor from "../Pages/Insctractor/Instractor/Instractor"
import Login from "../Pages/Login/Login"
import Registration from "../Pages/Registration/Registration"


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
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'registration',
          element: <Registration></Registration>
        }

    ]
  },
]);


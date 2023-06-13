import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instractor from "../Pages/Insctractor/Instractor/Instractor"
import Login from "../Pages/Login/Login"
import Registration from "../Pages/Registration/Registration"
import Classes from "../Pages/Classes/Classes";
import Dashbord from "../Pages/Dasbord/Dashbord";
import MyClasses from "../Pages/Dasbord/MyClasses";
import PrivetRoutes from "./PrivetRoutes";
import AllUsers from "../Pages/Dasbord/All Users/AllUsers";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'instractor',
        element: <Instractor></Instractor>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      },
      {
        path: 'class',
        element: <Classes></Classes>
      },

    ]
  },

  {
    path: 'dasbord',
    element: <PrivetRoutes>
      <Dashbord></Dashbord>
    </PrivetRoutes>,
    children: [
      {
        path: 'myclass',
        element: <MyClasses></MyClasses>
      },
      {
        path: 'allusers',
        element: <AllUsers></AllUsers>
      }
    ]
  }
]);


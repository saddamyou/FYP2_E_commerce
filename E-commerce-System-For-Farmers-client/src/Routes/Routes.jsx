import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Product from "../Pages/Product/Product/Product";
import Order from "../Pages/Order/Order/Order";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/Details/Details";
import AdminRoute from "./AdminRoute";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Review from "../Pages/Dashboard/Review/Review";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "/orderedProduct/:id",
        element: <PrivateRoute><Details/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
        
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },

  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      // normal user routes
      {
        path:'userHome',
        element:<UserHome/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'payment',
        element:<Payment/>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory/>
      },
      {
        path:'review',
        element:<Review/>
      },
      // admin only routes

      {
        path:'adminHome',
        element:<AdminRoute><AdminHome/></AdminRoute>
        
      },
      {
        path:'addItems',
        element:<AdminRoute><AddItems/></AdminRoute>
        
      },
      {
        path:'manageItems',
        element:<AdminRoute><ManageItems/></AdminRoute>
        
      },
      {
        path:'updateItem/:id',
        element:<AdminRoute><UpdateItem/></AdminRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
  
      },
      {
        path:'users',
        element:<AdminRoute><AllUsers/></AdminRoute>
      },
    ]
  }
]);

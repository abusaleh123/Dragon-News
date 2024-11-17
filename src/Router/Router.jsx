import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layout/Home";
import CategoryNews from "../page/CategoryNews";
import AuthLayOut from "../Layout/AuthLayOut";
import Login from "../page/Login";
import Register from "../page/Register";
import NewsDetails from "../page/NewsDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path: "/",
            element: <Navigate to={'category/01'}></Navigate>
        },
        {
            path: "/category/:id",
            element: <CategoryNews></CategoryNews>,
            loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
      ]
    },
    {
      path: "/news/:id",
      element: <NewsDetails></NewsDetails>,
      loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: "/auth",
        element:<AuthLayOut></AuthLayOut>,
        children: [
          {
            path: "/auth/login",

            element:<Login></Login>
          },
          {
            path: "/auth/register",
            element: <Register></Register>
          }
        ]
    },
    // {
    //     path: "*",
    //     element: <h1>Error</h1>
    // }
 
  ]);
  export default router;
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Featured from "./Components/Featured/Featured";
import Details from "./Components/Details/Details";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home></Home>,
      children: [
         {
            path: "/",
            element: <Banner></Banner>,
            loader: () => fetch("joblist.json"),
         },

         {
            path: "statistics",
            element: <Statistics></Statistics>,
         },
         {
            path: "details/:detailsId",
            element: <Details></Details>,
            loader: () => fetch("featured.json"),
         },
         {
            path: "footer",
            element: <Footer></Footer>,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>
);

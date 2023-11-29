import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import "./styles/global.scss";
import Layout from "./components/layout/Layout";
import Intro from "./pages/intro/Intro";
import Home from "./pages/home/Home";
import Result from "./pages/result/Result";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Intro />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/result",
          element: <Result />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

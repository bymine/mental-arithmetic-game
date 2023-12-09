import React from "react";
import "./layout.scss";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="contentContainer">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

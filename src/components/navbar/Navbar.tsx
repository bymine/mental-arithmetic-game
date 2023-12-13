import React from "react";
import "./navbar.scss";
import {
  GithubOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { GithubAdress } from "../../data";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Math.io</div>
      <div className="icons">
        <a href={GithubAdress} target="_blank" rel="noreferrer">
          <GithubOutlined className="icon" />
        </a>
        <a href={GithubAdress} target="_blank" rel="noreferrer">
          <TwitterOutlined className="icon" />
        </a>
        <a href={GithubAdress} target="_blank" rel="noreferrer">
          <FacebookOutlined className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

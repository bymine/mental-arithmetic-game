import React from "react";
import "./intro.scss";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="intro">
      <span>암산력을 기르기 위한 게임입니다</span>
      <div className="optionContainer">옵션 컨테이너</div>

      <Link to={"/home"}>
        <button>시작하기</button>
      </Link>
    </div>
  );
};

export default Intro;

import React from "react";

import circle from "./img/circle.png";
import js from "./img/js.png";
import react from "./img/react.png";
import ts from "./img/ts.png";

import "./About.css";

const About = () => {
  return (
    <div id="About" className="About">
      <div className="content">
        <p className="coffee-txt">team Coffee</p>
        <h1>
          프론트엔드 개발
          <br />
          스터디팀이 전하는 기술 이야기
        </h1>
        <p class="description">
          <b>Coffee Tech Seminar</b>는 team Coffee 팀원들이 프론트엔드를
          개발하고
          <br />
          공부하며 알게된 다양한 지식들을 나누고자 시작한{" "}
          <b>프론트엔드 테크 세미나</b>입니다.
        </p>
      </div>
      <div className="skill-area">
        <img src={js} className="skill" />
        <img src={react} className="skill" />
        <img src={ts} className="skill no-margin" />
      </div>
      <div className="bg-circle">
        <img src={circle} className="circle" />
      </div>
    </div>
  );
};

export default About;

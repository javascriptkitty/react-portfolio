import React from "react";
import Burger from "../burger";
import "./style.css";

const Intro = () => {
  return (
    <section className="intro">
      <Burger />
      <div className="menu">
        <ul className="animated pulse delay-2s">
          <li>
            <a href="#about">About</a>
          </li>{" "}
          <span> / </span>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>{" "}
          <span> / </span>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="info">
        <h1 className="animated fadeIn slow">Kristina Alekseeva</h1>
        <h2 className="animated fadeIn delay-1s slow">Junior web developer</h2>
      </div>
    </section>
  );
};

export default Intro;

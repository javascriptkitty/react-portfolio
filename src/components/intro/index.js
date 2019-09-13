import React from "react";
import "./style.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="menu">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>{" "}
          <span> / </span>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>{" "}
          <span> / </span>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="info">
        <h1>Kristina Alekseeva</h1>
        <h2>Junior web developer</h2>
      </div>
    </section>
  );
};

export default Intro;

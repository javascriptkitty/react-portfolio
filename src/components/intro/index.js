import React from "react";
import "./style.css";

const Intro = () => {
  return (
    <section class="intro">
      <div class="menu">
        <ul>
          <li>
            <a href="#about">About </a>
          </li>{" "}
          /
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>{" "}
          /
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div class="info">
        <h1>Kristina Alekseeva</h1>
        <h2>Junior web developer</h2>
      </div>
    </section>
  );
};

export default Intro;

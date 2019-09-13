import React from "react";
import logo from "../../assets/images/catsketch.png";
import "./style.css";
import Contacts from "../contacts";

const Burger = () => {
  return (
    <section className="xs">
      <div className="inf">
        <h1>Kristina Alekseeva</h1>
        <h2>Junior web developer</h2>
      </div>
      <div className="burger">
        {" "}
        <img src={logo} />{" "}
      </div>
    </section>
  );
};

export default Burger;

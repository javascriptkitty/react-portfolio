import React from "react";
import Intro from "./components/intro";
import Burger from "./components/burger";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contacts from "./components/contacts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Intro />
      <Burger />
      <About />

      {/*
       <Portfolio />
      <Contacts /> */}
    </div>
  );
}

export default App;

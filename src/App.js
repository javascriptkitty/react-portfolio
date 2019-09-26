import React from "react";
import Intro from "./components/intro";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contacts from "./components/contacts";
//import Burger from "./components/burger";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;

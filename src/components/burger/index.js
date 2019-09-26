import React from "react";
import logo from "../../assets/images/catsketch.png";
import logoClose from "../../assets/images/catclose.png";
import "./style.css";

export default class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);

    this.state = {
      isNavOpen: false
    };
  }
  openNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  closeNav() {
    this.setState({
      isNavOpen: false
    });
  }

  render() {
    return (
      <section className="xs">
        <div
          className="burger animated infinite pulse slow"
          onClick={this.openNav}
        >
          {" "}
          <img src={!this.state.isNavOpen ? logo : logoClose} />{" "}
        </div>
        {this.state.isNavOpen ? (
          <div className="hidden">
            <ul>
              <li>
                <a href="#about" onClick={this.closeNav}>
                  About
                </a>
                <p>&#3859;</p>
              </li>{" "}
              <li>
                <a href="#portfolio" onClick={this.closeNav}>
                  Portfolio
                </a>
              </li>{" "}
              <li>
                <p>&#3859;</p>
                <a href="#contacts" onClick={this.closeNav}>
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </section>
    );
  }
}

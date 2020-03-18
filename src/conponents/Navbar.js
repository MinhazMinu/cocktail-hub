import React from "react";
import logo from "../logo.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/Home">Home</a>
        </li>

        <li>
          <a href="/About">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

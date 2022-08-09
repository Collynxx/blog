import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import odesign from "../../odesign.png";

const Navbar = () => {
  return (
    <nav-header>
      <div className="nav-logo">
        <h1>
          <Link className="nav-text" to={"/"}>
            GENESYS BL
            <img src={odesign} alt="odesign" />G{" "}
          </Link>
        </h1>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#News">NEWS</a>
          </li>
          <li>
            <a href="#Politics">POLITICS</a>
          </li>
          <li>
            <a href="#Entertainment">ENTERTAINMENT</a>
          </li>
          <li>
            <a href="#Technology">TECHNOLOGY</a>
          </li>
          <li>
            <a href="#Sports">SPORTS</a>
          </li>
          <li>
            <a href="#Education">EDUCATION</a>
          </li>
          <li>
            <Link to={`/Post`}><a href="#Login">LOGIN</a></Link>
          </li>
        </ul>
      </nav>
    </nav-header>
  );
};

export default Navbar;

import React from "react";
import { capitalizeFirstLetter } from '../utils/helpers';
import { Link } from "react-router-dom";

function Nav(props) {

//make sure links to are exact path
  return (
    <header className="flex-row px-1">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css"></link>
      <nav>
        <div className="nav-wrapper 1a237e 1a237e indigo darken-4">
          <a href="#" className="brand-logo center">
          🚀Aimee Jesso 🚀
          </a>
          
          <ul id="nav-mobile" className="right">
            <li>
            <Link to="/aboutme">About</Link>
            </li>
            <li>
            <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </div>
        <div className="banner"></div>
      </nav>

    </header>
  );
}

export default Nav;


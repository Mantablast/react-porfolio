import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {


  return (
    <header className="flex-row px-1">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css"></link>
      <nav>
        <div class="nav-wrapper 1a237e 1a237e indigo darken-4">
          <a href="#" class="brand-logo center">
          🚀Aimee Jesso🚀
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="#aboutme">About Me</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>
        <div class="banner"></div>
      </nav>

    </header>
  );
}

export default Nav;


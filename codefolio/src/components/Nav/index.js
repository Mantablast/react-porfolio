import React from "react";

function Nav() {
    return (
        <header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css"></link>
            <nav>
                <div class="nav-wrapper 1a237e #283593 indigo darken-3">
                    <a href="#" class="brand-logo center-align">
                        Aimee Jesso
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
            </nav>
            <div class="banner">
            </div>
            

        </header>
    );
}

export default Nav;

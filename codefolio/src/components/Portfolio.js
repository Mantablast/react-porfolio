import React from "react";
import myProjects from "./CodeCards";
import Codecards from "./CodeCards";
import carddata from "./CodeCards";

function Portfolio() {
  return (
    <div className="row mx-auto">
  <div className="project">
    <h3 className="top-title center">Code Projects</h3>
    <hr></hr>
  </div>

  <div class="row wrapper bottom-pad">
    <div class="col s4 center">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <img src="https://user-images.githubusercontent.com/71906988/125128589-327dfd80-e0cc-11eb-991c-fe3dbab3afc0.png" className="projectImg"></img> 
        </div>
        <span class="card-title">Run Buddy</span>
        <div class="card-action">
          <a href="https://github.com/MissAimeeJay/Run-Buddy">Repo</a>
          <a href="https://missaimeejay.github.io/Run-Buddy/">Live Link</a>
        </div>
      </div>
    </div>

    <div class="col s4 center">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <img src="https://user-images.githubusercontent.com/71906988/127776022-6b6fd782-53fc-4503-917e-acf333bed199.png" className="projectImg"></img> 
        </div>
        <span class="card-title">PocketWatch.io</span>
        <div class="card-action">
          <a href="https://github.com/fraudwheeldrive/tracker">Repo</a>
          <a href="https://w4tch-tow3r.herokuapp.com/">Live Link</a>
        </div>
      </div>
    </div>

    <div class="col s4 center">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <img src="https://user-images.githubusercontent.com/71906988/125128531-242fe180-e0cc-11eb-97c1-216fba21ba4d.png" className="projectImg"></img> 
        </div>
        <span class="card-title">LocalShop</span>
        <div class="card-action">
          <a href="https://github.com/chaitalizn/localshop">Repo</a>
          <a href="https://shop-local-with-localshop.herokuapp.com">Live Link</a>
        </div>
      </div>
    </div>

    <div class="col s4 center">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <img src="https://user-images.githubusercontent.com/71906988/125128478-15e1c580-e0cc-11eb-936b-521d6f96fb7f.png" className="projectImg"></img> 
        </div>
        <span class="card-title">Drinkspo</span>
        <div class="card-action">
          <a href="https://github.com/PrimalOrB/find_your_drink">Repo</a>
          <a href="https://primalorb.github.io/find_your_drink/">Live Link</a>
        </div>
      </div>
    </div>

    <div class="col s4 center">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <img src="https://user-images.githubusercontent.com/71906988/125128610-37db4800-e0cc-11eb-97cb-7f363057075a.png" className="projectImg"></img> 
        </div>
        <span class="card-title">Weather Reporter</span>
        <div class="card-action">
          <a href="https://github.com/MissAimeeJay/WeatherDashboardAPI">Repo</a>
          <a href="https://missaimeejay.github.io/WeatherDashboardAPI/">Live Link</a>
        </div>
      </div>
    </div>

    <div class="col s4 center">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <img src="https://user-images.githubusercontent.com/71906988/125128569-2d20b300-e0cc-11eb-9314-6c5fda20bef5.png" className="projectImg"></img> 
        </div>
        <span class="card-title">Express Note Taker</span>
        <div class="card-action">
          <a href="https://github.com/MissAimeeJay/Express-Note-Taker">Repo</a>
          <a href="https://express-note-takr.herokuapp.com/">Live Link</a>
        </div>
      </div>
    </div>

    <div class="col s4 center">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <img src="https://user-images.githubusercontent.com/71906988/125128617-3a3da200-e0cc-11eb-9892-de17ac126116.png" className="projectImg"></img> 
        </div>
        <span class="card-title">Work Day Scheduler</span>
        <div class="card-action">
          <a href="https://github.com/MissAimeeJay/WorkDaySchedulerChallenge">Repo</a>
          <a href="https://missaimeejay.github.io/WorkDaySchedulerChallenge/">Live Link</a>
        </div>
      </div>
    </div>

    <div class="col s4 center">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <img src="https://user-images.githubusercontent.com/71906988/125128577-2f830d00-e0cc-11eb-846f-bf92eb7229cf.png" className="projectImg"></img> 
        </div>
        <span class="card-title">Password Generator</span>
        <div class="card-action">
          <a href="https://github.com/MissAimeeJay/PasswordGeneratorChallenge">Repo</a>
          <a href="https://missaimeejay.github.io/PasswordGeneratorChallenge/">Live Link</a>
        </div>
      </div>
    </div>

    <div class="col s4 center">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <img src="https://user-images.githubusercontent.com/71906988/125128505-1c703d00-e0cc-11eb-87e1-bb659e4bac00.png" className="projectImg"></img> 
        </div>
        <span class="card-title">Horiseon Code Refactor</span>
        <div class="card-action">
          <a href="https://github.com/MissAimeeJay/HoriseonSocialSolutionServices">Repo</a>
          <a href="https://missaimeejay.github.io/HoriseonSocialSolutionServices/">Live Link</a>
        </div>
      </div>
    </div>



  </div>
</div>
  );
}

export default Portfolio;



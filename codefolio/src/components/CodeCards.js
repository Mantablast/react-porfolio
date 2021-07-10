import React, { useState } from 'react';

//Materialize import

// create cards to map and display
// function myProjects() {
//     <div class="col s4">
//         <div class="card">
//             <div class="card-image">
//                 <img src={props.image} />
//                 <span class="card-title">{props.name}</span>
//             </div>
//             <div class="card-content">
//                 <p>{props.description}</p>
//             </div>
//             <div class="card-action">
//                 <a href={props.github}>Repo</a>
//                 <a href={props.livelink}>Live Link</a>
//             </div>
//         </div>
//     </div>
// }

// function Codecards() {
//     const [carddata] = [
//         {
//           id: 1,
//           name: "Run Buddy",
//           image: "react-porfolio/codefolio/src/assets/img/runbuddy.png",
//           github: "https://github.com/MissAimeeJay/Run-Buddy",
//           livelink: "https://missaimeejay.github.io/Run-Buddy/"
//       },
//       {
//           id: 2,
//           name: "Horoscopes",
//           image: "react-porfolio/codefolio/src/assets/img/horoscopes.png",
//           github: "https://github.com/MissAimeeJay/myFirstHoroscopeApi",
//           livelink: "https://missaimeejay.github.io/myFirstHoroscopeApi/"
//       },
//       {
//           id: 3,
//           name: "LocalShop",
//           image: "react-porfolio/codefolio/src/assets/img/localshop.png",
//           github: "https://github.com/chaitalizn/localshop",
//           livelink: "https://shop-local-with-localshop.herokuapp.com"
//       },
//       {
//           id: 4,
//           name: "Drinkspo",
//           image: "react-porfolio/codefolio/src/assets/img/drinkspo.png",
//           github: "https://github.com/PrimalOrB/find_your_drink",
//           livelink: "https://primalorb.github.io/find_your_drink/"
//       },
//       {
//           id: 5,
//           name: "Weather Reporter",
//           image: "react-porfolio/codefolio/src/assets/img/weatherreporter.png",
//           github: "https://github.com/MissAimeeJay/WeatherDashboardAPI",
//           livelink: "https://missaimeejay.github.io/WeatherDashboardAPI/"
//       },
//       {
//           id: 6,
//           name: "Express Note Taker",
//           image: "react-porfolio/codefolio/src/assets/img/notetaker.png",
//           github: "https://github.com/MissAimeeJay/Express-Note-Taker",
//           livelink: "https://express-note-takr.herokuapp.com/"
//       },
//       {
//           id: 7,
//           name: "Work Day Scheduler",
//           image: "rreact-porfolio/codefolio/src/assets/img/workday.png",
//           github: "https://github.com/MissAimeeJay/WorkDaySchedulerChallenge",
//           livelink: "https://missaimeejay.github.io/WorkDaySchedulerChallenge/"
//       },
//       {
//           id: 8,
//           name: "Password Generator",
//           image: "react-porfolio/codefolio/src/assets/img/passgen.png",
//           github: "https://github.com/MissAimeeJay/PasswordGeneratorChallenge",
//           livelink: "https://missaimeejay.github.io/PasswordGeneratorChallenge/"
//       },
//       {
//           id: 9,
//           name: "Horiseon Social Services Code Refactor",
//           image: "react-porfolio/codefolio/src/assets/img/horiseon.png",
//           github: "https://github.com/MissAimeeJay/HoriseonSocialSolutionServices",
//           livelink: "https://missaimeejay.github.io/HoriseonSocialSolutionServices/"
//       }
//   ];
// }


// export default myProjects;
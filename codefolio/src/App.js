import React, { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Porfolio';
import Resume from './components/Resume';

function App() {


  return (
    <div>
      <Nav

      ></Nav>
      <main>
        <AboutMe></AboutMe>
        <Contact></Contact>
        <Portfolio></Portfolio>
        {/* <Resume></Resume> */}
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

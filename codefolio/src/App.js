import React, { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Porfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <main>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/contact" component={Contact} />
            {/* <Route path="/portfolio" component={Portfolio} /> */}
            {/* <Route path="/resume" component={Resume}/> */}
          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

const Home = () => (
  <div>
    <h4 className="center">Welcome</h4>
  </div>
);

export default App;

import React from 'react';
import logo from './img/logo.svg';
import './App.css';
import './scss/header.scss';
import './scss/hero.scss';
import './scss/page.scss';
import map from './img/map.svg';
import mappy from './img/monster.svg';
function App() {
  return (
    <div className="App">
        <header className="header">
            <div className="row">
                <div className="logo">
                    <img src={logo}></img> 
                </div>
            </div>
        </header>
        <section className="heroshot">
            <div className="hero-graphics">
                  <div className="mappy">
                    <img src={mappy}></img> 
                  </div>
                  <div className="map">
                      <img src={map}></img> 
                  </div>
            </div>
        </section>
        <section className="page-content">
            <div className="row"> 
                <div className="caption">
                    <h1><span>react-mappy-monster</span> is a react.js component blah blah blah</h1> 
                </div>
                <div className="iconset">
                    <ul>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;

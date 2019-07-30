import React from 'react';
import logo from './img/logo.svg';
import './App.css';
import './scss/header.scss';
import './scss/hero.scss';
import './scss/page.scss';
import './scss/footer.scss';
import map from './img/map.svg';
import mappy from './img/monster.png';
import iconGoogle from './img/icon-google.svg';
import iconDesign from './img/icon-design.svg';
import iconRelax from './img/icon-relax.svg';
import CarbonAds from "react-carbon-ads"

function App() {
  return (
    <div className="App">
        <header className="header">
            <div className="row">
                <div className="logo">
                    <img src={logo}></img> 
                </div>
                <div className="navigation">
                    <ul>
                        <li><a href="#how-to">How to use</a></li>
                        <li><a href="#demo">Demo</a></li>
                    </ul>
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
                        <li>
                            <div className="iconset-wrapper">
                                    <div className="iconset-content">
                                        <div className="icon">
                                            <img src={iconGoogle}></img> 
                                        </div>
                                        <div className="title">
                                            <h3>Google Maps API</h3>
                                        </div>
                                    </div>
                            </div>
                        </li>
                        <li>
                            <div className="iconset-wrapper">
                                <div className="iconset-content">
                                    <div className="icon">
                                        <img src={iconDesign}></img>
                                    </div>
                                    <div className="title">
                                        <h3>Clean Design</h3>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="iconset-wrapper">
                                <div className="iconset-content">
                                    <div className="icon">
                                        <img src={iconRelax}></img>
                                    </div>
                                    <div className="title">
                                        <h3>Easy to use</h3>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <section className="code-section">
                <div className="row">
                    <div className="title">
                          <h1>Instalation</h1>
                    </div>
                    <div className="code-content">
                        <code>
                            yarn add react-mappy-monster
                            <br></br>or<br></br>
                            npm i react-mappy-monster
                        </code>
                    </div> 
                </div>
            </section>
            <section className="code-section">
                <div className="row">
                    <div className="title">
                        <h1>Usage</h1>
                    </div>
                    <div className="code-content">
                        <code>
                        yarn add react-mappy-monster
                        <br></br>or<br></br>
                        npm i react-mappy-monster
                    </code>
                    </div>
                </div>
            </section>
              <section className="code-section">
                  <div className="row">
                      <div className="title">
                          <h1>Props</h1>
                      </div>
                      <div className="code-content">

                      </div>
                  </div>
              </section>
        </section>
        <footer className="footer">
            <div className="row">
                <div className="ads-wrapper-content">
                      <CarbonAds carbonUrl={'//cdn.carbonads.com/carbon.js?serve=CK7DLK3E&placement=joaopereirawdgithubio'} />
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;

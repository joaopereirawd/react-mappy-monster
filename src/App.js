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
import MappyMonster, { InfoWindow, Content, Youtube } from 'react-mappy-monster';

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
                        <div className="ads-place">
                            <CarbonAds carbonUrl={'//cdn.carbonads.com/carbon.js?serve=CK7DLK3E&placement=joaopereirawdgithubio'} />
                        </div>
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
                    <h1><span>react-mappy-monster</span> blah blah blah</h1> 
                </div>
                <div className="iconset">
                      <ul id="how-to">
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
                        <code></code>
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
              <section className="code-section demo-section">
                  <div className="row">
                      <div className="title">
                          <h1>Demo</h1>
                      </div>
                      <MappyMonster
                          id='mappyMonster'
                          apiKey=''
                          width=''
                          height='450px'
                          markerIcon={''}
                          markerTitle='YOUR_TITLE'
                          location={{
                              lat: 37.422204,
                              lng: -122.083596
                          }}
                          zoom={5}
                          onClickZoom={17} //Done 
                          styles={[{ "featureType": "all", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "all", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "administrative", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.country", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "administrative.country", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.locality", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "saturation": "-100" }, { "lightness": "30" }] }, { "featureType": "administrative.neighborhood", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.land_parcel", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "gamma": "0.00" }, { "lightness": "74" }, { "hue": "#ff0073" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "landscape", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "lightness": "3" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }, { "color": "#424242" }, { "lightness": "-61" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2a2727" }, { "lightness": "-61" }, { "saturation": "-100" }] }, { "featureType": "transit", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }]}
                          mapTypeControl={true}
                          streetViewControl={true}
                          rotateControl={true}
                          fullscreenControl={true}
                          scrollwheel={false}
                          infoWindowOffSetY={-60}
                          infoWindowStartOpen={false}
                      >

                          <InfoWindow>
                              <Youtube code="RiIE5GsiVWQ" autoPlay={true} />
                              <Content>
                                  <p>Your content goes here</p>
                                  <button onClick={() => alert('this is amazing!!!')} className="yourClass" style={
                                        {
                                            color: '#ee6f9b',
                                            background: '#333',
                                            padding: '10px 20px',
                                            borderRadius: '50px',
                                            border:'4px solid #000',
                                            fontWeight:'600',
                                            background: 'transparent'
                                        }}>Call To Action
                                    </button>
                              </Content>
                          </InfoWindow>
                      </MappyMonster>
                  </div>
              </section>
        </section>

        <footer className="footer">
            <div className="row">
                {/* <div className="ads-wrapper-content"></div> */}
            </div>
        </footer>
    </div>
  );
}

export default App;

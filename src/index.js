import React, { Component } from 'react';
import { render } from 'react-dom';
import mapMarker from './img/svg/map-marker.svg';
import './css/app.css';


const defaultTheme = [
    { "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] }, 
    { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, 
    { "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] }, 
    { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f5f5" }] }, 
    { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#bdbdbd" }] }, 
    { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] }, 
    { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] }, 
    { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#e5e5e5" }] }, 
    { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }, 
    { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] }, 
    { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] }, 
    { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#dadada" }] }, 
    { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] }, 
    { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }, 
    { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#e5e5e5" }] }, 
    { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] }, 
    { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#ebf4ff" }] }, 
    { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }
];

//Export Modules
export { InfoWindow } from './components/infoWindow';
export { Youtube } from './components/youtube';
export { Content } from './components/content';


export class Map extends React.Component {
    constructor(props) {
        super(props);

        this.mappyOpts = {
            marker: {
                icon: mapMarker
            },
            mapSize: {
                width: '100%',
                height: '450px',
            },
            center: {
                lat: this.props.location.lat,
                lng: this.props.location.lng
            },  
            zoom: this.props.zoom ? this.props.zoom : 5,
            onClickZoom: this.props.onClickZoom ? this.props.onClickZoom : 17,
            styles: this.props.styles ? this.props.styles : defaultTheme,
            mapTypeControl: this.props.mapTypeControl ? this.props.mapTypeControl : false,
            streetViewControl: this.props.streetViewControl ? this.props.streetViewControl :false,
            rotateControl: this.props.rotateControl ? this.props.rotateControl : false,
            fullscreenControl: this.props.fullscreenControl ? this.props.fullscreenControl : false,
            scrollwheel: this.props.scrollwheel ? this.props.scrollwheel : false,
            infoWindowOffSetY: this.props.infoWindowOffSetY ? this.props.infoWindowOffSetY : -60,
            infoWindowStartOpen: this.props.infoWindowStartOpen ? this.props.infoWindowStartOpen : false
        }

        this.gScript = this.gScript.bind(this)

    }

    InfoWindow(e, map) {

        const infoWindow = new window.google.maps.InfoWindow({
            content: '<div id="infoWindow" />',
            pixelOffset: new window.google.maps.Size(0, this.mappyOpts.infoWindowOffSetY),
            position: {
                lat: this.props.location.lat ? this.props.location.lat : '',
                lng: this.props.location.lng ? this.props.location.lng : ''
            }
        })

        infoWindow.addListener('domready', e => {
            render(<div className="inner-info">{this.props.children}</div>, document.getElementById('infoWindow'))
        })

        infoWindow.open(map)

        infoWindow.addListener('closeclick', e => {
            map.setZoom(5);
            map.setMapTypeId('roadmap');
        });

    }

    marker(map) {
        const marker = new window.google.maps.Marker({
            map: map,
            icon: this.props.markerIcon ? this.props.markerIcon : this.mappyOpts.marker.icon,
            title: this.props.markerTitle ? this.props.markerTitle : '',
            position: {
                lat: this.props.location.lat ? this.props.location.lat : '',
                lng: this.props.location.lng ? this.props.location.lng : ''
            }
        });

        marker.addListener('click', e => {
            this.InfoWindow(e, map);
            map.setZoom(this.mappyOpts.onClickZoom);
            map.setMapTypeId('satellite');
        });
    }

    gScript(e) {
        const map = new window.google.maps.Map(document.getElementById(this.props.id), this.mappyOpts);
        //this.props.onMapLoad(map);
        this.marker(map);

        if (this.mappyOpts.infoWindowStartOpen === true) {
            this.InfoWindow(e, map);
        }

    }

    componentDidMount() {
        if (!window.google) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = `https://maps.google.com/maps/api/js?key=${this.props.apiKey ? this.props.apiKey : '' }`;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
            // Below is important. 
            //We cannot access google.maps until it's finished loading
            s.addEventListener('load', e => {
                this.gScript();
            })
        } else {
            this.gScript();
        }

    }

    render() {
        return (
            <div style={
                {
                    width: this.props.width ? this.props.width : this.mappyOpts.mapSize.width,
                    height: this.props.height ? this.props.height : this.mappyOpts.mapSize.height
                }
            } className="mappyMonster" id={this.props.id} />
        );
    }
}

export default Map
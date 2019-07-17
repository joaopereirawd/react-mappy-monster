import React, { Component } from 'react';
import { render } from 'react-dom';
import mapMarker from '../img/svg/map-marker.svg';
import InfoBubble from '../components/popup';
const defaultTheme = [{ "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f5f5" }] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#bdbdbd" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#e5e5e5" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#dadada" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#e5e5e5" }] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#ebf4ff" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }];

class Map extends Component {
    constructor(props) {
        super(props);

        this.gMapOptions = {
            googleAPIOpts: {
                marker: {
                    icon: this.props.gMapOptions.marker.icon ? this.props.gMapOptions.marker.icon : mapMarker,
                    title: this.props.gMapOptions.marker.title ? this.props.gMapOptions.marker.title : ''
                },
                mapSize: {
                    width: this.props.gMapOptions.mapSize.width ? this.props.gMapOptions.mapSize.width : '100%',
                    height: this.props.gMapOptions.mapSize.height ? this.props.gMapOptions.mapSize.height : '450px',
                },
                location: {
                    lat: this.props.gMapOptions.mapControls.location.lat ? this.props.gMapOptions.mapControls.location.lat : 37.422204,
                    lng: this.props.gMapOptions.mapControls.location.lng ? this.props.gMapOptions.mapControls.location.lng : -122.083596
                },
                center: {
                    lat: this.props.gMapOptions.mapControls.center.lat ? this.props.gMapOptions.mapControls.center.lat : 37.422204,
                    lng: this.props.gMapOptions.mapControls.center.lng ? this.props.gMapOptions.mapControls.center.lng : -122.083596
                },
                zoom: this.props.gMapOptions.mapControls.initZoom ? this.props.gMapOptions.mapControls.initZoom : 5,
                onClickZoom: this.props.gMapOptions.mapControls.onClickZoom ? this.props.gMapOptions.mapControls.onClickZoom : 17,
                styles: this.props.gMapOptions.mapControls.styles ? this.props.gMapOptions.mapControls.styles : defaultTheme,
                mapTypeControl: this.props.gMapOptions.mapControls.mapTypeControl ? this.props.gMapOptions.mapControls.mapTypeControl : false,
                streetViewControl: this.props.gMapOptions.mapControls.streetViewControl ? this.props.gMapOptions.mapControls.streetViewControl : false,
                rotateControl: this.props.gMapOptions.mapControls.rotateControl ? this.props.gMapOptions.mapControls.rotateControl : false,
                fullscreenControl: this.props.gMapOptions.mapControls.fullscreenControl ? this.props.gMapOptions.mapControls.fullscreenControl : false,
                scrollwheel: this.props.gMapOptions.mapControls.scrollwheel ? this.props.gMapOptions.mapControls.scrollwheel : false,
                infoWindowOffSetY: this.props.gMapOptions.infoWindowOffSetY ? this.props.gMapOptions.infoWindowOffSetY : -60,
                infoWindowStartOpen: this.props.gMapOptions.infoWindowStartOpen ? this.props.gMapOptions.infoWindowStartOpen : false
            }
        }

        this.monsterOptions = {
            youtube: {
                embed_code: this.props.popUp.youtube ? this.props.popUp.youtube.embed_code : ''
            },
            image: {
                url: this.props.popUp.image ? this.props.popUp.image.url : ''
            }
        }
        this.popUpContent = {
            content: this.props.popUpContent ? this.props.popUpContent : ''
        }

        this.gScript = this.gScript.bind(this)

    }

    InfoWindow(e, map) {

        const infoWindow = new window.google.maps.InfoWindow({
            content: '<div id="infoWindow" />',
            pixelOffset: new window.google.maps.Size(0, this.gMapOptions.googleAPIOpts.infoWindowOffSetY),
            position: {
                lat: this.gMapOptions.googleAPIOpts.location.lat,
                lng: this.gMapOptions.googleAPIOpts.location.lng
            }
        })

        infoWindow.addListener('domready', e => {
            render(<div className="inner-info">
                <div className="content">
                    {/*this.props.infoBubble ? this.props.infoBubble : ''*/}
                    <InfoBubble
                        youtube={
                            {
                                embed_code: this.monsterOptions.youtube.embed_code,
                                autoplay: true
                            }
                        }
                        image={
                            {
                                url: this.monsterOptions.image.url
                            }
                        }
                    />

                    {this.popUpContent.content}
                </div>
            </div>, document.getElementById('infoWindow'))
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
            icon: this.gMapOptions.googleAPIOpts.marker.icon,
            title: this.gMapOptions.googleAPIOpts.marker.title,
            position: {
                lat: this.gMapOptions.googleAPIOpts.location.lat,
                lng: this.gMapOptions.googleAPIOpts.location.lng
            }
        });

        marker.addListener('click', e => {
            this.InfoWindow(e, map);
            map.setZoom(this.gMapOptions.googleAPIOpts.onClickZoom);
            map.setMapTypeId('satellite');
        });

    }

    gScript(e) {
        const map = new window.google.maps.Map(document.getElementById(this.props.id), this.gMapOptions.googleAPIOpts);
        //this.props.onMapLoad(map);
        this.marker(map);

        if (this.gMapOptions.googleAPIOpts.infoWindowStartOpen === true) {
            this.InfoWindow(e, map);
        }

    }

    componentDidMount() {
        if (!window.google) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = `https://maps.google.com/maps/api/js?key=AIzaSyAOlJGrIizTC33VGo06CpRenExyJLm19PE`;
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
                    width: this.gMapOptions.googleAPIOpts.mapSize.width,
                    height: this.gMapOptions.googleAPIOpts.mapSize.height
                }
            } id={this.props.id} />
        );
    }
}

export default Map
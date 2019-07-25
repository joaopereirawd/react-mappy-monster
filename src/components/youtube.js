import React, { Component } from 'react';

export class Youtube extends Component {
    constructor(props) {
        super(props);

        this.youtube = {
            url: 'https://www.youtube.com/embed/',
            autoPlay:false,
            controls: false,
            code:null,
        }
    }

    render() {
        const yt_url = `${this.youtube.url}${this.props.code ? this.props.code : this.youtube.code}?&autoplay=${this.props.autoPlay ? this.props.autoPlay : this.youtube.autoPlay}&controls=${this.props.controls ? this.props.controls : this.youtube.controls}`; // youtube url
        const yt_iframe = <iframe width='100%' height='200px' src={yt_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
        return (
            <div className="info-window-wrapper">
                <div className="youtube">
                    {yt_iframe}
                </div>
            </div>

        );
    }
}


export default Youtube;


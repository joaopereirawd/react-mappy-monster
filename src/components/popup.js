import React, { Component } from 'react';

class InfoBubble extends Component {
    constructor(props) {
        super(props);

        this.youtube = {
            url: 'https://www.youtube.com/embed/',
            autoPlay: this.props.youtube.autoplay ? this.props.youtube.autoplay : false,
            controls: false,
            code: this.props.youtube.embed_code ? this.props.youtube.embed_code : null,
        }

        this.image = {
            url: this.props.image.url ? this.props.image.url : ''
        }

    }

    render() {
        const yt_url = `${this.youtube.url}${this.youtube.code}?&autoplay=${this.youtube.autoPlay}&controls=${this.youtube.controls}`; // youtube url
        const yt_iframe = <iframe width='100%' height='200px' src={yt_url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
        const yt_image = <img src={this.image.url}></img>

        return (
            <div className="info-window-wrapper">
                <div className="image">
                    {this.youtube.code && this.image.url ? yt_iframe : this.image.url ? yt_image : this.youtube.code ? yt_iframe : ''}
                </div>
            </div>

        );
    }
}


export default InfoBubble;


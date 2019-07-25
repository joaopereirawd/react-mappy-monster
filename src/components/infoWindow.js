import React, { Component } from 'react';

export class InfoWindow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info-window-wrapper">
                {this.props.children}
            </div>
        );
    }
}


export default InfoWindow;


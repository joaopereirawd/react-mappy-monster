import React, { Component } from 'react';

export class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <div className="content-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}


export default Content;


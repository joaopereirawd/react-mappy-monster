import React, { Component } from 'react';

class InfoBubbleContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="content-wrapper">
                <p>CIm inside</p>
                <button onClick={() => alert('this is amazing!!!')} className="yourClass" style={
                    {
                        color: '#fff',
                        background: '#437cff',
                        padding: '10px 20px',
                        borderRadius: '50px'
                    }}>Call To Action
                        </button>
            </div>
        );
    }
}


export default InfoBubbleContent;


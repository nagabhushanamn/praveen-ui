

import React, { Component } from 'react';
import B from './B';
import ColorContext from './ColorContext'

class A extends Component {
    render() {
        return (
            <div className="card card-body">
                <pre>
                    <span>A Component : <span className="badge badge-primary">{this.props.color}</span></span>
                </pre>
                <ColorContext.Provider value={this.props.color}>
                    <B />
                </ColorContext.Provider>
            </div>
        );
    }
}

export default A;
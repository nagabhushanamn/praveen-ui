

import React, { Component } from 'react';
import ColorContext from './ColorContext';

class C extends Component {
    render() {
        return (
            <div className="card card-body">
                <pre>
                    C Component :
                    <span className="badge badge-primary">
                        <ColorContext.Consumer>
                            {value => value}
                        </ColorContext.Consumer>
                    </span>
                </pre>
            </div>
        );
    }
}

export default C;
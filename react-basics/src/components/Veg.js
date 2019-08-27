import React, { Component } from 'react';

class Veg extends Component {
    render() {
        return (
            <div>
                Veg
                {this.props.children}
            </div>
        );
    }
}

export default Veg;
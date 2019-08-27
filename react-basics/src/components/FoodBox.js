import React, { Component } from 'react';

class FoodBox extends Component {
    renderChildren() {
        let { children } = this.props;
        return children.map((child, idx) => {
            return <li key={idx} className="list-group-item">{child}</li>
        })
    }
    render() {
        return (
            <div className="card card-body">
                <ul className="list-group">
                    {this.renderChildren()}
                </ul>
            </div>
        );
    }
}

export default FoodBox;
import React, { Component } from 'react';

import './Action.css';

class Action extends Component {
    state = {
        count: 0
    }
    incrementCount() {
        const { count } = this.state;
        this.setState({ count: count + 1 }, () => {
            const { onAction, value } = this.props;
            if (onAction) {
                let event = { v: this.state.count * value }
                onAction(event)
            }
        });
    }
    render() {
        const { count } = this.state;
        let className = `btn ${this.props.value < 0 ? 'btn-warning' : 'btn-success'}`
        return (
            <div className="action">
                <div className="card card-body">
                    <button className={className} onClick={e => this.incrementCount()}>
                        {this.props.value}
                    </button>
                    <hr />
                    <span className="badge badge-dark">{count}</span>
                </div>
            </div>
        );
    }
}

export default Action;
import React, { Component } from 'react';
import Action from './Action';
import Summary from './Summary'

class ActionBox extends Component {
    state = {
        totalCount: 0
    }
    incrementTotalCount(e) {
        const { totalCount } = this.state;
        this.setState({ totalCount: totalCount + e.v });
    }
    renderActions() {
        let numbers = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]
        return numbers.map((n, idx) => {
            return <Action key={idx} value={n} onAction={e => this.incrementTotalCount(e)} />
        })
    }
    render() {
        const { totalCount } = this.state;
        return (
            <div className="card">
                <div className="card-header">ActionBox - <span className="badge badge-warning">{totalCount}</span></div>
                <div className="card-body">
                    {
                        /* 
                        <Action value="kick" onAction={e => this.incrementTotalCount()} />
                        <Action value="slap" onAction={e => this.incrementTotalCount()} /> 
                        */
                    }
                    {this.renderActions()}
                    <div style={{ clear: 'both' }}>
                        <hr />
                        <Summary value={totalCount} />
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionBox;
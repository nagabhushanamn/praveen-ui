import React, { Component } from 'react';
import store from '../store';
class TopicList extends Component {
    constructor(props) {
        super();
        this.state = {
            topics: store.getState().topics
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            //..
        })
    }
    componentWillUnmount() {
        //..
    }
    renderTopics() {
        let { topics } = this.state;
        return topics.map((topic, idx) => {
            return <li key={idx} className="list-group-item">{topic}</li>
        })
    }
    render() {
        return (
            <div>
                {this.renderTopics()}
            </div>
        );
    }
}

export default TopicList;
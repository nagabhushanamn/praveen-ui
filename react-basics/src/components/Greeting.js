import React, { Component } from 'react';

class Greeting extends Component {
    constructor(props) {
        super()
        console.log("Greeting :: constructor()");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Greeting :: shouldComponentUpdate()");
        return this.props.message !== nextProps.message;
    }
    render() {
        console.log("Greeting :: render()");
        const { message } = this.props;
        return (
            <div>
                <div className="alert alert-info">
                    <div>{message}</div>
                    <hr />
                    <div>{new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}</div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        console.log("Greeting :: componentDidMount()");
        this.interval = setInterval(() => {
            this.forceUpdate()
        }, 1000);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Greeting :: componentDidUpdate()");
        // console.log(this.props);
        // console.log(prevProps);
    }
    componentWillUnmount() {
        console.log("Greeting :: componentWillUnmount()");
        clearInterval(this.interval)
    }
}

export default Greeting;
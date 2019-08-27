import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Greeting from './components/Greeting';
import ActionBox from './components/ActionBox';
import A from './components/A';
import FoodBox from './components/FoodBox';
import Veg from './components/Veg';
import NonVeg from './components/NonVeg';
import TopicList from './components/TopicList';
import CommentList from './components/CommentList';

class App extends Component {
  state = {
    message: 'greetings'
  }
  constructor(props) {
    super();
    // console.log(props);
    console.log("App :: constructor()");
  }
  changeMessage(message) {
    this.setState({ message });
  }
  render() {
    console.log("App :: render()");
    const { title, trainer } = this.props;
    const { message } = this.state;
    // trainer="" // illegal , becoz props by default immutable
    return (
      <div className="container">
        <hr />
        <h1>{title} - by <span className="badge badge-info">{trainer}</span></h1>
        <hr />
        <div className="row">
          <div className="col-6 col-sm-6 col-md-6">
            <TopicList />
          </div>
          <div className="col-6 col-sm-6 col-md-6">
            <CommentList />
          </div>
        </div>



        {/* 

        <Veg>
          <h1>VEG</h1>
        </Veg>
        
        <FoodBox >
          <Veg />
          <Veg />
          <Veg />
        </FoodBox>

        <FoodBox>
          <NonVeg />
          <NonVeg />
          <Veg />
        </FoodBox> 
        */}

        {
        /* 
        <A color={"red"}/>
        <A color={"green"}/>
        <A color={"blue"}/> 
        */}

        {/* <ActionBox /> */}

        {/* 
        <button onClick={e => this.changeMessage('good morning')}>GM</button>
        <button onClick={e => this.changeMessage('good noon')}>GN</button>
        <button onClick={e => this.changeMessage('good evening')}>GE</button>
        <button onClick={e => this.changeMessage('')}>Remove</button>
        <hr />
        {message ? <Greeting message={message} /> : null} 
        */}

      </div>
    );
  }
  componentDidMount() {
    console.log("App :: componentDidMount()");
    // setTimeout(() => {
    //   let response = "hello , react"
    //   this.setState({ message: response });
    // }, 2000);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("App :: componentDidUpdate()");
  }
}

App.defaultProps = {
  trainer: 'Nag'
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}

export default App;


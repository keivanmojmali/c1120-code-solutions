import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOn = this.handleClickOn.bind(this);
    let count = 0;
  };
  handleClick() {
    let intervalId = null;
    if(this.state.on === false){
    this.setState({on:true})
    intervalId = setInterval(this.count++,1000);
    } else {
      this.count = 0;
      clearInterval(intervalId);
    }
  };
  render() {
    if (this.state.on) {
      return (
          <div onClick={this.handleClick}>
            <div className="circle">
              <h1>{this.count}</h1>
            </div>
            <i className="fas fa-pause"></i>
          </div>
      )
    } else {
      return (
        <div onClick={this.handleClick}>
          <div className="circle">
            <h1>{this.count}</h1>
          </div>
          <i className="fas fa-play"></i>
        </div>
      )
    }
  }
}

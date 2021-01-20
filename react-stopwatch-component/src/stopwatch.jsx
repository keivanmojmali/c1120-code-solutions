import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false, ticker: 0 };
    this.handleClick = this.handleClick.bind(this);
    let intervalId = null;
  };
  handleClick() {
    if (this.state.on === false) {
      intervalId = setInterval(() => {
        let newNum = this.state.ticker + 1;
        this.setState({ on: true, ticker: newNum });
      }, 1000);
    } else {
      this.setState({ on: false, ticker: 0 });
      clearInterval(intervalId);
    }
  };

  render() {
    let iconClass = "fas fa-play";
    if (this.state.on) {
      iconClass = "fas fa-pause"
    }
    return (
      <div onClick={this.handleClick}>
        <div className="circle">
          <h1>{this.count}</h1>
        </div>
        <i className={this.iconClass}></i>
      </div>
    )
  }
}

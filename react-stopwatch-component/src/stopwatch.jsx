import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false, ticker: 0 };
    this.handleClick = this.handleClick.bind(this);
    let intervalId = null;
    let iconClass = "fas fa-play";
  };
  handleClick() {
    if (this.state.on === false) {
      this.setState({ticker: 0 });
      this.intervalId = setInterval(() => {
        let newNum = this.state.ticker + 1;
        this.setState({ on: true, ticker: newNum });
      }, 1000);
    } else {
      this.setState({ on: false});
      clearInterval(this.intervalId);
    }
  };

  render() {
    if (this.state.on) {
     this.iconClass = "fas fa-pause"
    } else {
      this.iconClass = "fas fa-play";
    }
    return (
      <div className="center" onClick={this.handleClick}>
        <div className="circle small-margin">
          <h1 className="color">{this.state.ticker}</h1>
        </div>
        <i className={this.iconClass}></i>
      </div>
    )
  }
}

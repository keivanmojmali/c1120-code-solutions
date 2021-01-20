import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { light: false };
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick() {
    if (this.state.light) {
      this.setState({ light: false });
    } else {
      this.setState({ light: true });
    }
  };
  render() {
    if (this.state.light) {
      return (
        <div onClick={this.handleClick}>
          <div className="on">
            <div className="switch"></div>
          </div>
          <h1>ON</h1>
        </div>
      )
    } else {
      return (
        <div onClick={this.handleClick}>
          <div className="off">
            <div className="switch"></div>
          </div>
          <h1>OFF</h1>
        </div>
      )
    }
  }
}

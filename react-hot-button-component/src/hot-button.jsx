import React from "react";


export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 1};
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick() {
    let newCount = this.state.clicks +1;
    this.setState({clicks: newCount});
  };
  render() {
    if(this.state.clicks < 4) {
      return <button className="blue-v" onClick={this.handleClick}>Hot Button</button>
    } else if(this.state.clicks >= 4 && this.state.clicks < 7) {
      return <button className="dark-o" onClick={this.handleClick}>Hot Button</button>
    } else if(this.state.clicks >= 7 && this.state.clicks < 10) {
      return <button className="dark-s" onClick={this.handleClick}>Hot Button</button>
    } else if(this.state.clicks >= 10 && this.state.clicks < 14) {
      return <button className="dark-orange" onClick={this.handleClick}>Hot Button</button>
    } else if(this.state.clicks >= 14 && this.state.clicks < 18) {
      return <button className="gold" onClick={this.handleClick}>Hot Button</button>
    } else if(this.state.clicks >= 18) {
      return <button className="snow" onClick={this.handleClick}>Hot Button</button>
    }
  }

}

import React from 'react';


export default class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.iconClass = "fas fa-times red";
    this.message = "A password is required";
  };
  handleChange(event) {
    this.setState({ value: event.target.value });
  };
  render() {
    if (this.state.value.length > 0 && this.state.value.length < 9) {
      this.message = "Your password is too short"
      this.iconClass = "fas fa-times red";
    }
    if (this.state.value.length > 8) {
      this.message = "";
      this.iconClass = "fas fa-check green";
    }
    return (
      <form className="flex">
        <label htmlFor="password">Password</label>
        <div>
          <input className="margin-five" onChange={this.handleChange} type="password" name="password" value={this.state.value} />
          <i className={this.iconClass}></i>
        </div>
        <h6 className="red margin-five">{this.message}</h6>
      </form>
    );
  }
}

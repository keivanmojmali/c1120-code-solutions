import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false}
    this.burgerClass = '';
    this.fullMenu = 'display-none';
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange(event){
    if(this.state.open === false) {
      this.burgerClass = 'display-none';
      this.fullMenu = 'flex';
      this.setState({open: true});
    } else {
      this.burgerClass = '';
      this.fullMenu = 'display-none';
      this.setState({ open: false });
    }
  };

  render() {
    return (
      <div>
        <div className={this.burgerClass}>
          <i onClick={this.handleChange} className="fas fa-bars black"></i>
        </div>
        <div className={this.fullMenu}>
          <ul className="menu links">
            <li><h4>Menu</h4></li>
            <li onClick={this.handleChange}><a href="#">About</a></li>
            <li onClick={this.handleChange}><a href="#">Get Started</a></li>
            <li onClick={this.handleChange}><a href="#">Sign In</a></li>
          </ul>
          <div onClick={this.handleChange} className="shade">

          </div>
        </div>
      </div>
    )
  }

}

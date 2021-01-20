import React from 'react';
import ReactDOM from 'react-dom';
const $root = document.querySelector('#root');

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChange(event) {

    this.setState({email: event.target.value});
  };
  handleSubmit(event) {
    console.log('Value of State :', this.state)
    event.preventDefault();
  }




render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label for="email">Email</label>
      <input onChange={this.handleChange} type="text" name="email" value={this.state.value}></input>
      <button type="submit">Sign Up</button>
    </form>
  )
}
}



ReactDOM.render(<NewsletterForm />, $root);

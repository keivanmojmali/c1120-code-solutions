import React from 'react';
import ReactDOM from 'react-dom';
const $root = document.querySelector('#root');

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
  }
render() {
  return (
    <form>
      <label for="email">Email</label>
      <input type="text" name="email"></input>
      <button type="submit">Sign Up</button>
    </form>
  )
}
}



ReactDOM.render(<NewsletterForm />, $root);

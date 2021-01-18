import React from 'react';
import ReactDOM from 'react-dom';
const helloLocation = document.getElementById('hello');

const react =  React.createElement(
  'h1',
  null,
  "Hello, React!"
)

ReactDOM.render(react,helloLocation);

import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById('root');

function CustomButton(prop) {
  return (
    <button> {prop.text} </button>
  )
};

const element = (
  <div>
      <CustomButton text="I" />
      <CustomButton text="know" />
      <CustomButton text="React!" />
  </div>
);


ReactDOM.render(element, root);

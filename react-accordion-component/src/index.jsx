import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './accordian';
const $root = document.getElementById('root');


const example = [
  { name: "Hyper Text Language", id: '001', info: "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript." },
  { name: "Cascading Style Sheets", id: '005', info: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript." },
  { name: "JavaScript", id: '090', info: "JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm" }
];


ReactDOM.render(<Accordian dataArray={example} />,$root);

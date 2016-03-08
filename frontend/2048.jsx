var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./components/2048game');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Game />, document.getElementById('root'));
});

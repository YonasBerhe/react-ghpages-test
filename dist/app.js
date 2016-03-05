'use strict';

var _reactD = require('react-d3');

var _reactD2 = _interopRequireDefault(_reactD);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


var Hello = React.createClass({
  displayName: 'Hello',


  render: function render() {
    return React.createElement(
      'div',
      null,
      'Helsdjdk'
    );
  }
});

ReactDOM.render(React.createElement(Hello, null), document.getElementById('content'));
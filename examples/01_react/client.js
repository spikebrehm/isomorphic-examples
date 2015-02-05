var React = require('react');
var App = React.createFactory(require('./components/App.jsx'));

var faves = [
  'Breaking Bad',
  'burritos',
  'bikes',
];

React.render(App({faves: faves}), document.body);

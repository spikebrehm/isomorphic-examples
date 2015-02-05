var express = require('express');
var morgan = require('morgan');
var React = require('react');

require('node-jsx').install({extensions: ['.jsx']});

var App = React.createFactory(require('./components/App.jsx'));

var app = express();

// Logger.
app.use(morgan('dev'));

// Static files.
app.use(express.static(__dirname + '/public'));

var faves = [
  'pizza',
  'Game of Thrones',
  'sports',
];

app.use(function(req, res, next) {
  var html = React.renderToString(App({res: res, faves: faves}));
  res.send(wrapWithLayout(html));
});

app.listen(process.env.PORT || 3030);

function wrapWithLayout(html) {
  return '<html><head><title>Isomorphic React!</title></head>' +
    '<body>' + html + '</body>' +
    '<script src="/bundle.js"></script>' +
    '</html>';
}

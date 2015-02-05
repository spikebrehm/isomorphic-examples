var React = require('react');

var Faves = React.createClass({
  render: function() {
    return <ul>
      {this.props.faves.map(function(fave) {
        return <li>{fave}</li>;
      })}
    </ul>;
  },
});

module.exports = Faves;

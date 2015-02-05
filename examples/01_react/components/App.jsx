var React = require('react');
var Faves = require('./Faves.jsx');

var App = React.createClass({
  render: function() {
    return <div>
      <header>
        <h1>Welcome to my app!</h1>
      </header>
      <section>
        <Faves faves={this.props.faves} />
      </section>
    </div>;
  },
});

module.exports = App;

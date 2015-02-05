var React = require('react');
var Faves = require('./Faves.jsx');
var setCookie = require('set-cookie');

var App = React.createClass({
  render: function() {
    this.setCurrentTimeCookie();

    return <div>
      <header>
        <h1>Welcome to my app!</h1>
      </header>
      <section>
        <Faves faves={this.props.faves} />
      </section>
    </div>;
  },

  setCurrentTimeCookie: function() {
    var time = Date.now();
    setCookie('the_time', time, {res: this.props.res});
  },
});

module.exports = App;

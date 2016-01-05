var React = require('react');
var Timer = require('../Components/Timer');

var About = React.createClass({
  render: function() {
    return (
	<div>
		<div>About</div>
		<Timer/>
	</div>
    );
  }
});

module.exports = About;

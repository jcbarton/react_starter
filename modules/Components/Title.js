var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
		<div>
			<h1>{this.props.name}</h1>
		</div>
    );
  }
});

module.exports = Header;
var React = require('react');

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  resetTimer: function(){
	this.setState({secondsElapsed: 0});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
		<div>
			<div>Seconds Elapsed: {this.state.secondsElapsed}</div>
			<a onClick={this.resetTimer}>Reset</a>
		</div>
    );
  }
});

module.exports = Timer;
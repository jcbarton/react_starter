var React = require('react');
var Title = require('./components/title');
var {Link, RouteHandler} = require('react-router');

require('./App.css');

// TODO Look into routing 
// http://stackoverflow.com/questions/28553904/client-routing-using-react-router-and-server-side-routing

var App = React.createClass({
  render: function() {
    return (
      <div>
		<Title name="Some title"></Title>
	  
        <header>
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </header>
		
		<hr/>
		
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;

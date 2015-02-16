var React = require('react');
var { 
  Link,
  RouteHandler
} = require('react-router');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="header">
          <nav>
            <ul className="nav nav-pills pull-right">
              <li role="presentation"><Link to="home">Home</Link></li>
              <li role="presentation"><Link to="about">About</Link></li>
              <li role="presentation"><Link to="contact">Contact</Link></li>
            </ul>
          </nav>
          <h3 className="text-muted">Project name</h3>
        </div>

        <RouteHandler />

        <footer class="footer">
          <p>&copy; Company 2014</p>
        </footer>

      </div>
    );
  }
});
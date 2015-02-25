var React = require('react');
var { 
  Link,
  RouteHandler
} = require('react-router');

require('../../styles/bootstrap.css');
require('../../styles/custom.less');

var App = React.createClass({
  render: function() {
    return (
      <div>
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
        </div>

        <footer class='footer' style={styles.footer}>
          <div className='container'>
            <p className='text-muted' style={styles.footerCopy}>&copy; Company 2014</p>
          </div>
        </footer>
      </div>
    );
  }
});

module.exports = App;

var styles = {
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '60px',
    backgroundColor: '#f5f5f5',
  },

  footerCopy: {
    'lineHeight': '20px',
    margin: '20px 0'
  }
};
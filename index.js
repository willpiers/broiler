var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

require('./styles/bootstrap.css');
require('./styles/custom.less');

var Site = React.createClass({
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

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <h1>Jumbotron heading</h1>
          <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        </div>

        <div className="row marketing">
          <div className="col-lg-6">
            <h4>Subheading</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

            <h4>Subheading</h4>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

            <h4>Subheading</h4>
            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
          </div>

          <div className="col-lg-6">
            <h4>Subheading</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

            <h4>Subheading</h4>
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

            <h4>Subheading</h4>
            <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
          </div>
        </div>
      </div>
    );
  }
});

var About = React.createClass({
  render: function() {
    return (
      <div>About</div>
    );
  }
});

var Contact = React.createClass({
  render: function() {
    return (
      <div>Contact</div>
    );
  }
})

var routes = (
  <Route name="app" path="/" handler={Site}>
    <Route name="about" handler={About}/>
    <Route name="home" handler={Home}/>
    <Route name="contact" handler={Contact}/>

    <DefaultRoute handler={Home}/>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
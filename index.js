var React = require('react');
var Router = require('react-router');

var {
  Route,
  NotFoundRoute,
  DefaultRoute,
  Link,
  RouteHandler
} = Router;

var App = require('./screens/App/index');
var Home = require('./screens/App/screens/Home/index');
var Contact = require('./screens/App/screens/Contact/index');
var About = require('./screens/App/screens/About/index');

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={About}/>
    <Route name="home" handler={Home}/>
    <Route name="contact" handler={Contact}/>

    <DefaultRoute handler={Home}/>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
var React = require('react');

require('./styles/bootstrap.css');
require('./styles/custom.css');

var Site = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="header">
          <nav>
            <ul className="nav nav-pills pull-right">
              <li role="presentation" className="active"><a href="#">Home</a></li>
              <li role="presentation"><a href="#">About</a></li>
              <li role="presentation"><a href="#">Contact</a></li>
            </ul>
          </nav>
          <h3 className="text-muted">Project name</h3>
        </div>

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

        <footer class="footer">
          <p>&copy; Company 2014</p>
        </footer>

      </div>
    );
  }
});

React.render(<Site />, document.body);
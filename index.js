// Define a simple React component
var Hello = React.createClass({
  render: function() {
    return React.DOM.h1(null, "Hello World");
  }
});

// Render the component into the DOM
React.renderComponent(
  Hello(),
  document.getElementById("app")
);

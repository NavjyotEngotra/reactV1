var React = require("react");

// Define a component using createClass
var Counter = React.createClass({
  getInitialState: function() {
    return { count: 0 };
  },
  increment: function() {
    this.setState({ count: this.state.count + 1 });
  },
  render: function() {
    return React.createElement("div", null,
      React.createElement("h1", null, "React 0.13 Counter"),
      React.createElement("p", null, "Count: " + this.state.count),
      React.createElement("button", { onClick: this.increment }, "Increment")
    );
  }
});

// Render into DOM (no ReactDOM yet)
React.render(
  React.createElement(Counter, null),
  document.getElementById("app")
);

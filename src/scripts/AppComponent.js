var React = require('react');
module.exports = React.createClass({
  render: function () {
    return (
    <span>
      <em>C</em><sub>max</sub> = {this.props.data.toString()}
    </span>
    );
  }
});

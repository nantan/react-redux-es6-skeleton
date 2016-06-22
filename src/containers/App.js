import React, { Component, PropTypes } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sampleActions from '../actions/sample';

class Sample extends Component {
  constructor(props) {
    super(props);
    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
  }

  handleClickPlus() {
    this.props.actions.increase(1);
  }

  handleClickMinus() {
    this.props.actions.decrease(1);
  }

  render() {
    const { text, clicks, counter } = this.props;
    return (
      <div>
        <h1>Hello, {text} !</h1>
        <div>Clicks: {clicks}</div>
        <div>Counter: {counter}</div>
        <div>
          <button onClick={this.handleClickMinus}>minus</button>
          <button onClick={this.handleClickPlus}>plus</button>
        </div>
      </div>
    );
  }
}

Sample.propTypes = {
  text: PropTypes.string.isRequired,
  clicks: PropTypes.number.isRequired,
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  text: state.info.text,
  clicks: state.info.clicks,
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(sampleActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample);
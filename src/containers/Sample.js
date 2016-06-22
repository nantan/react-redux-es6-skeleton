import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge';
import Avatar from 'material-ui/Avatar';
import * as sampleActions from '../actions/sample';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

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
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
            <h1>Hello, {text}</h1>
          <Badge badgeContent={clicks} primary={true}>
            <Avatar>{counter}</Avatar>

          </Badge>
          <div>
          </div>
          <div>
            <RaisedButton
              label="Minus"
              secondary={true}
              onTouchTap={this.handleClickMinus}
            />&nbsp;
            <RaisedButton
              label="Plus"
              primary={true}
              onTouchTap={this.handleClickPlus}
            />
          </div>
        </div>
      </MuiThemeProvider>
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
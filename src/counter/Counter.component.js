import React, { Component } from 'react';
import { connect } from 'react-redux';

import { counterSelector } from './Counter.selector';


class CounterComponent extends Component {
  render() {
    console.log('props', this.props);
    return (
      <div className="counter">
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: counterSelector(state)
  }
}

export const Counter = connect(
  mapStateToProps
)(CounterComponent);

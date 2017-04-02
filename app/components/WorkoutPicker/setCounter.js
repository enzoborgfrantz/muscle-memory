import React, { Component } from 'react';
import styles from './setCounter.scss';

class SetCounter extends Component {

  constructor() {
    super();
    //this.props.increment = this.props.increment.bind(this);
  }

  render() {
    return (<div className="exercise-sets">
        sets
        <a className="exercise-counter" onClick={this.props.increment.bind(this)}>-</a>
        1
        <a className="exercise-counter" onClick={this.props.increment.bind(this)}>+</a>
    </div>);
  }

}

SetCounter.PropTypes = {
  increment: React.PropTypes.func,
};

module.exports = SetCounter;

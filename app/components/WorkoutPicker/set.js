import React, { Component } from 'react';
import styles from './set.scss';

class Set extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div className="set">
      <span className="set-no">{this.props.number}</span>
      <span className="set-lbl reps">Reps</span>
      <input className="set-input reps" type="text" />
      <span className="set-divider">|</span>
      <span className="set-lbl weight">Weight</span>
      <input className="set-input weight" type="text" />
      <input className="set-remove" type="button" />
    </div>);
  }
}

Set.PropTypes = {
  number: React.PropTypes.string,
};

module.exports = Set;

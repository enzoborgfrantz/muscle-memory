import React, { Component } from 'react';
import styles from './exercise.scss';

class Exercise extends Component {
  render() {
    return (
      <div className="exercise">
        {this.props.name}
      </div>
    );
  }
}

Exercise.propTypes = {
  name: React.PropTypes.string,
};

module.exports = Exercise;

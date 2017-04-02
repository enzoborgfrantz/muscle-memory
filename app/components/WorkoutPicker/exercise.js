import React, { Component } from 'react';
import styles from './exercise.scss';

class Exercise extends Component {
  constructor() {
    super();
    this.addSet = this.addSet.bind(this);
    this.state = {
      showSet: false,
    };
  }

  addSet() {
    this.setState({ showSet: !this.state.showSet });
  }

  render() {
    return (
      <div className="exercise">
        <span className="exercise-name" onClick={this.addSet}>{this.props.name}</span>
        {!this.state.showSet ? null :
        <div className="exercise-sets">
          sets
          <a className="exercise-counter">-</a>
          1
          <a className="exercise-counter">+</a>
        </div>
      }
      </div>
    );
  }
}

Exercise.propTypes = {
  name: React.PropTypes.string,
};

module.exports = Exercise;

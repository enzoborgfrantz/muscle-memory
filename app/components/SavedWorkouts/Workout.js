import React, { Component } from 'react';
import styles from './Workout.scss';

class Workout extends Component {
  constructor() {
    super();
    this.deleteWorkout = this.deleteWorkout.bind(this);
    this.editWorkout = this.editWorkout.bind(this);
  }

  deleteWorkout() {
    console.log('delete');
  }
  editWorkout() {
    console.log('edit');
  }
  render() {
    return (
      <div className="workout">
        <span>{this.props.name}</span>
        <a className="workout-btn edit" onClick={this.editWorkout}> edit </a>
        <a className="workout-btn delete" onClick={this.deleteWorkout}> × </a>
      </div>
    );
  }
}

Workout.PropTypes = {
  name: React.PropTypes.string,
};

module.exports = Workout;

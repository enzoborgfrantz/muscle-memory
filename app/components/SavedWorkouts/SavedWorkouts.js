import React, { Component } from 'react';
import styles from './SavedWorkouts.scss';
import Workout from './Workout';

class SavedWorkouts extends Component {
  constructor() {
    super();
    this.createWorkout = this.createWorkout.bind(this);
  }
  createWorkout() {
    console.log('create workout', this.props.workouts.toString());
  }
  render() {
    return (
      <div className="saved-workouts">
        <h3>Saved Workouts</h3>
        {this.props.workouts.map(m => <Workout name={m} />)}
        <a className="workout-create" onClick={this.createWorkout}>Create New Workout</a>
      </div>
    );
  }
}

SavedWorkouts.PropTypes = {
  workouts: React.PropTypes.array,
};

module.exports = SavedWorkouts;

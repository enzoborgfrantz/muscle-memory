import React, { Component } from 'react';
import styles from './SavedWorkouts.scss';
import Workout from './Workout';
import Button from '../Button/Button';
import Bar from '../Bar/Bar';

class SavedWorkouts extends Component {
  constructor() {
    super();
    this.createWorkout = this.createWorkout.bind(this);
  }
  createWorkout() {
    console.log('create workout');// , this.props.workouts.toString());
  }
  render() {
    return (
      <div className="saved-workouts">
        <h3>Saved Workouts</h3>
        {this.props.workouts.map(m => <Workout name={m} />)}
        <Button onClick={this.createWorkout} color="blue">
          <span>Create New Workout</span>
        </Button>
      </div>
    );
  }
}

SavedWorkouts.PropTypes = {
  workouts: React.PropTypes.array,
};

module.exports = SavedWorkouts;

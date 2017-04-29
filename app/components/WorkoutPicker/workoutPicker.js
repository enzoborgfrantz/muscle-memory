import React, { Component } from 'react';
import styles from './workoutPicker.scss';
import MuscleGroup from './muscleGroup';
import TextInput from '../TextInput/TextInput';

class WorkoutPicker extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="workout-picker">
        <TextInput placeholder={this.props.name} />
        <br />
        {this.props.muscleGroups
          .map(mg => <MuscleGroup name={mg.name} exercises={mg.exercises} />)}
      </div>
    );
  }
}

WorkoutPicker.propTypes = {
  muscleGroups: React.PropTypes.array,
  name: React.PropTypes.string,
  selectedWorkout: {},
};

module.exports = WorkoutPicker;

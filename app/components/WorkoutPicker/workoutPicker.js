import React, { Component } from 'react';
import styles from './workoutPicker.scss';
import MuscleGroup from './muscleGroup';

class WorkoutPicker extends Component {
  render() {
    return (
      <div className="workout-picker">
        <h3>{this.props.name}</h3>
        {this.props.muscleGroups
          .map(mg => <MuscleGroup name={mg.name} exercises={mg.exercises} />)}
      </div>
    );
  }
}

WorkoutPicker.propTypes = {
  muscleGroups: React.PropTypes.array,
  name: React.PropTypes.string,
};

module.exports = WorkoutPicker;

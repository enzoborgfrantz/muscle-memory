import React, { Component } from 'react';
import styles from './workoutPicker.scss';
import MuscleGroup from './muscleGroup';

class WorkoutPicker extends Component {
  render() {
    return (
      <div className="workout-picker">
        {this.props.muscleGroups
          .map(mg => <MuscleGroup name={mg.name} exercises={mg.exercises} />)}
      </div>
    );
  }
}

WorkoutPicker.propTypes = {
  muscleGroups: React.PropTypes.array,
};

module.exports = WorkoutPicker;

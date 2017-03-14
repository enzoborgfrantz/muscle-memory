import React, { Component } from 'react';
import Exercises from '../../modules/Exercise.module';
import styles from './workoutPicker.scss';

function clickMe(e) {
  e.target.classList.toggle('muscle-group-show-children');
}

class WorkoutPicker extends Component {
  render() {
    return (<div className="workout-picker">
      {Exercises().map(e =>
        <div className="muscle-group" onClick={clickMe}>
          <span>{e.name}</span>
          {e.exercises.map(m => <label className="exercise">{m}</label>)}
        </div>)}
    </div>);
  }
}

module.exports = WorkoutPicker;

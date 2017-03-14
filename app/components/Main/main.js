import React, { Component } from 'react';
import Planner from '../Planner/planner';
import styles from './main.scss';
import WorkoutPicker from '../WorkoutPicker/workoutPicker';
import DatePicker from '../DatePicker/datePicker';

class Main extends Component {

  render() {
    return (
      <div className="main">
        <div className="content-container">
          <h1>Muscle Memory</h1>
          <input type="date" />
          <DatePicker />
          <WorkoutPicker />
        </div>
        <div className="planner-container">
          <Planner />
        </div>
      </div>
    );
  }
}

module.exports = Main;

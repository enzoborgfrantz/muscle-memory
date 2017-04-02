import React, { Component } from 'react';
import Planner from '../Planner/planner';
import styles from './main.scss';
import WorkoutPicker from '../WorkoutPicker/workoutPicker';
import DatePicker from '../DatePicker/datePicker';
import MuscleGroups from '../../modules/MuscleGroups.module';
import UserProfile from '../UserProfile/userProfile';
import Menu from '../Menu/menu';
import SavedWorkouts from '../SavedWorkouts/SavedWorkouts';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <div className="header-left">
            <h1>Muscle Memory</h1>
            <div className="menu">
              <Menu menuItems={['Home', 'Planner']} />
            </div>
          </div>
          <div className="header-right">
            <div className="user-profile">
              <UserProfile streak="3" username="enzoborgfrantz" profilePicture="http://lucasparker.ca/wp-content/uploads/2015/08/about-011.jpg" />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content-left">
            <SavedWorkouts workouts={['Full Body', 'Upper Body and Cardio', 'Legs and Abs']} />
          </div>
          <div className="content-right">
            <WorkoutPicker muscleGroups={MuscleGroups} name="New Workout" />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Main;

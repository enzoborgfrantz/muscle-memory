import React, { Component } from 'react';
import styles from './muscleGroup.scss';
import Exercise from './exercise';

class MuscleGroup extends Component {
  constructor() {
    super();
    this.toggleExercises = this.toggleExercises.bind(this);
    this.state = {
      showExercises: false,
    };
  }

  toggleExercises() {
    this.setState({ showExercises: !this.state.showExercises });
  }
  render() {
    return (
      <div className="muscle-group">
        <span className="mg-button" onClick={this.toggleExercises}>{this.props.name}</span>
        {this.state.showExercises ? this.props.exercises.map(e => <Exercise name={e} />) : null}
      </div>
    );
  }
}

MuscleGroup.propTypes = {
  name: React.PropTypes.string,
  exercises: React.PropTypes.array,
};

module.exports = MuscleGroup;

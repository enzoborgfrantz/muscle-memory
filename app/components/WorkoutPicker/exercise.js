import _ from 'lodash';
import React, { Component } from 'react';
import styles from './exercise.scss';
import SetCounter from './setCounter';
import Set from './set';

class Exercise extends Component {
  constructor() {
    super();
    this.showSet = this.showSet.bind(this);
    //this.updateSetCount = this.updateSetCount.bind(this);
    this.state = {
      showSetCounter: false,
      setCount: 0,
    };
  }

  showSet() {
    this.setState({ showSetCounter: !this.state.showSetCounter, setCount: this.state.showSetCounter ? 0 : 1 });
  }

  updateSetCount() {
    console.log('hit');
    this.setState({ setCount: this.state.setCount += 1 });
    console.log('clicked');
  }

  render() {
    return (
      <div className="exercise">
        <span className="exercise-name" onClick={this.showSet}>{this.props.name}</span>
        {!this.state.showSetCounter ? null : <SetCounter increment={this.updateSetCount}/>}
        {_.range(1, this.state.setCount + 1).map(m => <Set number={m} />)}
      </div>
    );
  }
}

Exercise.propTypes = {
  name: React.PropTypes.string,
};

module.exports = Exercise;

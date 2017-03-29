import React, { Component } from 'react';
import styles from './userProfile.scss';
import Heart from '../Heart/heart';

class UserProfile extends Component {
  render() {
    return (<div className="user-profile">
      <img src={this.props.profilePicture} />
      <label className="username">{this.props.username}</label>
      <label className="streak">{`${this.props.streak}`}</label>
      <Heart />
    </div>);
  }
}

UserProfile.PropTypes = {
  username: React.PropTypes.string,
  streak: React.PropTypes.number,
  profilePicture: React.PropTypes.string,
};

module.exports = UserProfile;

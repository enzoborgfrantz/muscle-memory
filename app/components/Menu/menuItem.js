import React, { Component } from 'react';
import styles from './menuItem.scss';

class MenuItem extends Component {
  render() {
    return (
      <li className="menu-item">
        <a href="lol">{this.props.name}</a>
      </li>
    );
  }
}

MenuItem.PropTypes = {
  name: React.PropTypes.string,
};

module.exports = MenuItem;

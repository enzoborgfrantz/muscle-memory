import React, { Component } from 'react';
import styles from './menu.scss';
import MenuItem from './menuItem';

class Menu extends Component {
  render() {
    return (<div>
      <ul className="menu">{this.props.menuItems.map(mi => <MenuItem name={mi} />)}</ul>
    </div>);
  }
}

Menu.propTypes = {
  menuItems: React.PropTypes.array,
};

module.exports = Menu;

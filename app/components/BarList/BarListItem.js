import React, { PropTypes, Component } from 'react';
import { ListHead, ListItems } from '../List/List';
import Bar from '../Bar/Bar';

class BarListItem extends Component {
  constructor(props) {
    super(props);
    this.state = ({ active: false });
    this.clickHead = this.clickHead.bind(this);
  }

  clickHead() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const { head, items } = this.props;
    return (
      <div>
        <ListHead onClick={this.clickHead}>
          <Bar theme="blue">
            {head}
          </Bar>
        </ListHead>
        {
          this.state.active &&
          <ListItems>
              {items.map(m => <Bar theme="green" inline key={m}>{m}</Bar>)}
          </ListItems>
        }
      </div>
    );
  }
}

BarListItem.propTypes = {
  head: PropTypes.string,
};

BarListItem.defaultProps = {
  head: 'bar',
  items: null,
};

module.exports = BarListItem;

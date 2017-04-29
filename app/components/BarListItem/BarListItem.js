import React, { PropTypes, Component } from 'react';
import { ListHead, ListItems, ListItem } from '../List/List';
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
          <Bar>
            {head}
          </Bar>
        </ListHead>
        {
          this.state.active &&
          <ListItems>
              {
                items.map(m =>
                  <ListItem>
                    <Bar inline theme="blue" key={m}>
                      {m}
                    </Bar>
                  </ListItem>)
              }
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

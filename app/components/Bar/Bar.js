import React, { PropTypes } from 'react';
import styles from './Bar.scss';

const Bar = ({ theme, inline, children }) => {
  const cn = `bar ${theme} ${inline ? 'inline' : 'block'}`;

  return (
    <div className={cn}>
      { children}
    </div>);
};

Bar.propTypes = {
  // children: PropTypes.element.isRequired,
  theme: PropTypes.string,
  inline: PropTypes.bool,
};

Bar.defaultProps = {
  theme: 'red',
  inline: false,
};

export default Bar;

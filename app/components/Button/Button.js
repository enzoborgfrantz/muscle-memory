import React, { PropTypes } from 'react';
import styles from './Button.scss';

const Button = ({ children, color, disabled, ...rest }) => {
  const eventHandlers = disabled ? {} : {
    ...rest,
  };

  const cn = `button ${disabled ? 'disabled' : color}`;

  return (
    <div>
      <button className={cn} {...eventHandlers}>
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  color: 'green',
};

export default Button;

import React, { PropTypes, Component } from 'react';
import styles from './TextInput.scss';

class TextInput extends Component {

  constructor(props) {
    super(props);
    this.state = { isFocused: false };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  handleInputFocus() {
    this.setState({ isFocused: true });
  }

  handleInputBlur() {
    this.setState({ isFocused: false });
  }

  render() {
    const cn = 'text-input';

    const { placeholder } = this.props;

    const eventHandlers = {
      onBlur: this.handleInputBlur,
      onFocus: this.handleInputFocus,
    };

    return (
      <div>
        <input
          className={cn} type="text" placeholder={placeholder}
          {...eventHandlers} spellCheck="false"
        />
        <hr className={`underline ${this.state.isFocused ? 'visible' : 'hidden'}`} />
      </div>
    );
  }
}

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  placeholder: 'hello',
};

export default TextInput;

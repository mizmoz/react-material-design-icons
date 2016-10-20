
import React, { PropTypes } from 'react';

const KeyboardReturn = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M38 14v8H11.66l7.17-7.17L16 12 4 24l12 12 2.83-2.83L11.66 26H42V14z"/>
    </svg>
  );
};

KeyboardReturn.defaultProps = {
  style: {},
  className: '',
};

KeyboardReturn.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default KeyboardReturn;

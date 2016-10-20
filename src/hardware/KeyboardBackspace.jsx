
import React, { PropTypes } from 'react';

const KeyboardBackspace = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 22H13.66l7.17-7.17L18 12 6 24l12 12 2.83-2.83L13.66 26H42z"/>
    </svg>
  );
};

KeyboardBackspace.defaultProps = {
  style: {},
  className: '',
};

KeyboardBackspace.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default KeyboardBackspace;

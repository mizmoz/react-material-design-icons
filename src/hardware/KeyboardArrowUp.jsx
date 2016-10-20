
import React, { PropTypes } from 'react';

const KeyboardArrowUp = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"/>
    </svg>
  );
};

KeyboardArrowUp.defaultProps = {
  style: {},
  className: '',
};

KeyboardArrowUp.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default KeyboardArrowUp;

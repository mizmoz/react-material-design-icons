
import React, { PropTypes } from 'react';

const KeyboardArrowDown = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14.83 16.42L24 25.59l9.17-9.17L36 19.25l-12 12-12-12z"/>
    </svg>
  );
};

KeyboardArrowDown.defaultProps = {
  style: {},
  className: '',
};

KeyboardArrowDown.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default KeyboardArrowDown;

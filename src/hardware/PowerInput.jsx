
import React, { PropTypes } from 'react';

const PowerInput = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M5 18v4h38v-4H5zm0 12h10v-4H5v4zm14 0h10v-4H19v4zm14 0h10v-4H33v4z"/>
    </svg>
  );
};

PowerInput.defaultProps = {
  style: {},
  className: '',
};

PowerInput.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PowerInput;

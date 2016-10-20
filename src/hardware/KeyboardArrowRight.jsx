
import React, { PropTypes } from 'react';

const KeyboardArrowRight = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"/>
    </svg>
  );
};

KeyboardArrowRight.defaultProps = {
  style: {},
  className: '',
};

KeyboardArrowRight.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default KeyboardArrowRight;


import React, { PropTypes } from 'react';

const KeyboardArrowLeft = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z"/>
    </svg>
  );
};

KeyboardArrowLeft.defaultProps = {
  style: {},
  className: '',
};

KeyboardArrowLeft.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default KeyboardArrowLeft;

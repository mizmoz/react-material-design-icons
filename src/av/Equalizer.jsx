
import React, { PropTypes } from 'react';

const Equalizer = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20 40h8V8h-8v32zM8 40h8V24H8v16zm24-22v22h8V18h-8z"/>
    </svg>
  );
};

Equalizer.defaultProps = {
  style: {},
  className: '',
};

Equalizer.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Equalizer;


import React, { PropTypes } from 'react';

const LocalAirport = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 32v-4L26 18V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v11L4 28v4l16-5v11l-4 3v3l7-2 7 2v-3l-4-3V27l16 5z"/>
    </svg>
  );
};

LocalAirport.defaultProps = {
  style: {},
  className: '',
};

LocalAirport.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LocalAirport;

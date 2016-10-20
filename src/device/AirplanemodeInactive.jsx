
import React, { PropTypes } from 'react';

const AirplanemodeInactive = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M26 18V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v7.36l15.65 15.65L42 32v-4L26 18zM6 10.55l9.97 9.97L4 28v4l16-5v11l-4 3v3l7-2 7 2v-3l-4-3v-7.45L37.45 42 40 39.45 8.55 8 6 10.55z"/>
    </svg>
  );
};

AirplanemodeInactive.defaultProps = {
  style: {},
  className: '',
};

AirplanemodeInactive.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AirplanemodeInactive;

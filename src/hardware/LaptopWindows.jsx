
import React, { PropTypes } from 'react';

const LaptopWindows = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 36v-2c2.21 0 3.98-1.79 3.98-4L44 10c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4v2H0v4h48v-4h-8zM8 10h32v20H8V10z"/>
    </svg>
  );
};

LaptopWindows.defaultProps = {
  style: {},
  className: '',
};

LaptopWindows.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LaptopWindows;

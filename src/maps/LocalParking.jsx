
import React, { PropTypes } from 'react';

const LocalParking = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M26 6H12v36h8V30h6c6.63 0 12-5.37 12-12S32.63 6 26 6zm.4 16H20v-8h6.4c2.21 0 4 1.79 4 4s-1.79 4-4 4z"/>
    </svg>
  );
};

LocalParking.defaultProps = {
  style: {},
  className: '',
};

LocalParking.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LocalParking;


import React, { PropTypes } from 'react';

const AirplanemodeActive = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M20.36 18"/>
    </svg>
  );
};

AirplanemodeActive.defaultProps = {
  style: {},
  className: '',
};

AirplanemodeActive.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AirplanemodeActive;

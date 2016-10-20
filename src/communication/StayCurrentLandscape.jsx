
import React, { PropTypes } from 'react';

const StayCurrentLandscape = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M2.02 14L2 34c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4H6c-2.21 0-3.98 1.79-3.98 4zM38 14v20H10V14h28z"/>
    </svg>
  );
};

StayCurrentLandscape.defaultProps = {
  style: {},
  className: '',
};

StayCurrentLandscape.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default StayCurrentLandscape;

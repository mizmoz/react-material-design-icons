
import React, { PropTypes } from 'react';

const SignalCellularConnectedNoInternet1Bar = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path fill-opacity=".3" d="M44 16V4L4 44h32V16z"/>
    </svg>
  );
};

SignalCellularConnectedNoInternet1Bar.defaultProps = {
  style: {},
  className: '',
};

SignalCellularConnectedNoInternet1Bar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SignalCellularConnectedNoInternet1Bar;

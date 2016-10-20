
import React, { PropTypes } from 'react';

const SignalCellularConnectedNoInternet4Bar = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 36h4V20h-4v16zm0 8h4v-4h-4v4zM4 44h32V16h8V4L4 44z"/>
    </svg>
  );
};

SignalCellularConnectedNoInternet4Bar.defaultProps = {
  style: {},
  className: '',
};

SignalCellularConnectedNoInternet4Bar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SignalCellularConnectedNoInternet4Bar;


import React, { PropTypes } from 'react';

const SignalWifi0Bar = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path fill-opacity=".3" d="M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8C10.57 6 1.62 13.32.72 14l23.26 28.98.02.02.02-.02z"/>
    </svg>
  );
};

SignalWifi0Bar.defaultProps = {
  style: {},
  className: '',
};

SignalWifi0Bar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SignalWifi0Bar;

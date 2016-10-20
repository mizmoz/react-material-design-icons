
import React, { PropTypes } from 'react';

const SignalWifi2BarLock = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path opacity=".3" d="M41 19c.7 0 1.4.1 2.1.2l4.2-5.2c-.9-.7-9.9-8-23.3-8S1.6 13.3.7 14L24 43l7-8.7V29c0-5.5 4.5-10 10-10z"/>
    </svg>
  );
};

SignalWifi2BarLock.defaultProps = {
  style: {},
  className: '',
};

SignalWifi2BarLock.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SignalWifi2BarLock;

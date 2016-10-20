
import React, { PropTypes } from 'react';

const SignalCellular1Bar = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path fill-opacity=".3" d="M4 44h40V4z"/>
    </svg>
  );
};

SignalCellular1Bar.defaultProps = {
  style: {},
  className: '',
};

SignalCellular1Bar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SignalCellular1Bar;

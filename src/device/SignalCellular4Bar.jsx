
import React, { PropTypes } from 'react';

const SignalCellular4Bar = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M4 44h40V4z"/>
    </svg>
  );
};

SignalCellular4Bar.defaultProps = {
  style: {},
  className: '',
};

SignalCellular4Bar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SignalCellular4Bar;


import React, { PropTypes } from 'react';

const SignalCellularNull = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M40 13.66V40H13.66L40 13.66M44 4L4 44h40V4z"/>
    </svg>
  );
};

SignalCellularNull.defaultProps = {
  style: {},
  className: '',
};

SignalCellularNull.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SignalCellularNull;

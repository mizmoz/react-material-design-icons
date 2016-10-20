
import React, { PropTypes } from 'react';

const SignalCellularOff = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M42 2L24.82 19.18 42 36.36V2zM9.55 9L7 11.54l12.73 12.73L2 42h35.45l4 4L44 43.45 9.55 9z"/>
    </svg>
  );
};

SignalCellularOff.defaultProps = {
  style: {},
  className: '',
};

SignalCellularOff.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SignalCellularOff;

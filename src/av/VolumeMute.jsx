
import React, { PropTypes } from 'react';

const VolumeMute = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      style={props.style}
      className={props.className}
    >
      <path d="M14 18v12h8l10 10V8L22 18h-8z"/>
    </svg>
  );
};

VolumeMute.defaultProps = {
  style: {},
  className: '',
};

VolumeMute.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default VolumeMute;
